// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    setupDashboard();
    loadDashboardData();
});

// Check if user is authenticated
function checkAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }
    
    // Update user name in header
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) {
        userNameElement.textContent = currentUser.name;
    }
    
    // Update profile information
    updateProfileInfo(currentUser);
}

// Setup dashboard functionality
function setupDashboard() {
    setupNavigation();
    setupUserMenu();
    setupEventListeners();
    loadCartCount();
}

// Setup navigation
function setupNavigation() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.dashboard-section');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            sidebarLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetSection = this.getAttribute('data-section');
            const section = document.getElementById(targetSection);
            if (section) {
                section.classList.add('active');
            }
        });
    });
}

// Setup user menu
function setupUserMenu() {
    const userMenuBtn = document.querySelector('.user-menu-btn');
    const userDropdown = document.querySelector('.user-dropdown');
    const logoutBtn = document.getElementById('logout-btn');
    
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', function() {
            userDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
        });
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Profile form
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileUpdate);
    }
    
    // Password form
    const passwordForm = document.getElementById('password-form');
    if (passwordForm) {
        passwordForm.addEventListener('submit', handlePasswordChange);
    }
    
    // Notification settings
    const saveNotificationsBtn = document.getElementById('save-notifications');
    if (saveNotificationsBtn) {
        saveNotificationsBtn.addEventListener('click', handleNotificationSettings);
    }
    
    // Delete account
    const deleteAccountBtn = document.getElementById('delete-account-btn');
    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', handleDeleteAccount);
    }
    
    // Address management
    const addAddressBtn = document.getElementById('add-address-btn');
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', showAddressModal);
    }
    
    // Address modal
    const addressModal = document.getElementById('address-modal');
    const closeAddressModal = document.getElementById('close-address-modal');
    const cancelAddress = document.getElementById('cancel-address');
    const addressForm = document.getElementById('address-form');
    
    if (closeAddressModal) {
        closeAddressModal.addEventListener('click', hideAddressModal);
    }
    
    if (cancelAddress) {
        cancelAddress.addEventListener('click', hideAddressModal);
    }
    
    if (addressForm) {
        addressForm.addEventListener('submit', handleAddAddress);
    }
    
    // Close modal when clicking outside
    if (addressModal) {
        addressModal.addEventListener('click', function(e) {
            if (e.target === addressModal) {
                hideAddressModal();
            }
        });
    }
    
    // Order filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterOrders(this.getAttribute('data-filter'));
        });
    });
}

// Load dashboard data
function loadDashboardData() {
    loadRecentOrders();
    loadAllOrders();
    loadWishlist();
    loadAddresses();
    updateStats();
}

// Update profile information
function updateProfileInfo(user) {
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    
    if (profileName) profileName.textContent = user.name;
    if (profileEmail) profileEmail.textContent = user.email;
    if (firstName) firstName.value = user.name.split(' ')[0] || '';
    if (lastName) lastName.value = user.name.split(' ').slice(1).join(' ') || '';
    if (email) email.value = user.email;
}

// Load recent orders
function loadRecentOrders() {
    const recentOrdersList = document.getElementById('recent-orders-list');
    if (!recentOrdersList) return;
    
    const orders = getOrders().slice(0, 3); // Get last 3 orders
    recentOrdersList.innerHTML = '';
    
    if (orders.length === 0) {
        recentOrdersList.innerHTML = '<p class="no-data">No recent orders</p>';
        return;
    }
    
    orders.forEach(order => {
        const orderCard = createOrderCard(order);
        recentOrdersList.appendChild(orderCard);
    });
}

// Load all orders
function loadAllOrders() {
    const ordersList = document.getElementById('orders-list');
    if (!ordersList) return;
    
    const orders = getOrders();
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="no-data">No orders found</p>';
        return;
    }
    
    orders.forEach(order => {
        const orderCard = createOrderCard(order);
        ordersList.appendChild(orderCard);
    });
}

// Create order card
function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';
    card.innerHTML = `
        <div class="order-header">
            <span class="order-id">Order #${order.id}</span>
            <span class="order-status ${order.status}">${order.status}</span>
        </div>
        <div class="order-details">
            <div class="order-detail">
                <label>Date</label>
                <span>${new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div class="order-detail">
                <label>Total</label>
                <span>$${order.total.toFixed(2)}</span>
            </div>
            <div class="order-detail">
                <label>Items</label>
                <span>${order.items.length} items</span>
            </div>
        </div>
        <div class="order-actions">
            <a href="#" class="btn-order btn-primary" onclick="viewOrder('${order.id}')">View Details</a>
            <a href="#" class="btn-order btn-secondary" onclick="trackOrder('${order.id}')">Track Order</a>
        </div>
    `;
    return card;
}

// Filter orders
function filterOrders(status) {
    const ordersList = document.getElementById('orders-list');
    if (!ordersList) return;
    
    const orders = getOrders();
    const filteredOrders = status === 'all' ? orders : orders.filter(order => order.status === status);
    
    ordersList.innerHTML = '';
    
    if (filteredOrders.length === 0) {
        ordersList.innerHTML = '<p class="no-data">No orders found</p>';
        return;
    }
    
    filteredOrders.forEach(order => {
        const orderCard = createOrderCard(order);
        ordersList.appendChild(orderCard);
    });
}

// Load wishlist
function loadWishlist() {
    const wishlistItems = document.getElementById('wishlist-items');
    if (!wishlistItems) return;
    
    const wishlist = getWishlist();
    wishlistItems.innerHTML = '';
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = '<p class="no-data">Your wishlist is empty</p>';
        return;
    }
    
    wishlist.forEach(item => {
        const wishlistCard = createWishlistCard(item);
        wishlistItems.appendChild(wishlistCard);
    });
}

// Create wishlist card
function createWishlistCard(item) {
    const card = document.createElement('div');
    card.className = 'wishlist-item';
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="wishlist-item-content">
            <h4 class="wishlist-item-title">${item.name}</h4>
            <div class="wishlist-item-price">$${item.price.toFixed(2)}</div>
            <div class="wishlist-item-actions">
                <button class="btn-order btn-primary" onclick="addToCart('${item.id}')">Add to Cart</button>
                <button class="btn-order btn-secondary" onclick="removeFromWishlist('${item.id}')">Remove</button>
            </div>
        </div>
    `;
    return card;
}

// Load addresses
function loadAddresses() {
    const addressesList = document.getElementById('addresses-list');
    if (!addressesList) return;
    
    const addresses = getAddresses();
    addressesList.innerHTML = '';
    
    if (addresses.length === 0) {
        addressesList.innerHTML = '<p class="no-data">No addresses saved</p>';
        return;
    }
    
    addresses.forEach(address => {
        const addressCard = createAddressCard(address);
        addressesList.appendChild(addressCard);
    });
}

// Create address card
function createAddressCard(address) {
    const card = document.createElement('div');
    card.className = 'address-card';
    card.innerHTML = `
        <div class="address-header">
            <span class="address-type">${address.type}</span>
            <div class="address-actions">
                <button class="btn-edit" onclick="editAddress('${address.id}')">Edit</button>
                <button class="btn-delete" onclick="deleteAddress('${address.id}')">Delete</button>
            </div>
        </div>
        <p>${address.street}</p>
        <p>${address.city}, ${address.state} ${address.zip}</p>
        <p>${address.country}</p>
    `;
    return card;
}

// Update stats
function updateStats() {
    const orders = getOrders();
    const wishlist = getWishlist();
    
    const totalOrders = orders.length;
    const totalSpent = orders.reduce((sum, order) => sum + order.total, 0);
    const wishlistItems = wishlist.length;
    const reviewsGiven = Math.floor(Math.random() * 10) + 1; // Mock data
    
    // Update stats in DOM
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 4) {
        statNumbers[0].textContent = totalOrders;
        statNumbers[1].textContent = `$${totalSpent.toFixed(2)}`;
        statNumbers[2].textContent = wishlistItems;
        statNumbers[3].textContent = reviewsGiven;
    }
}

// Handle profile update
function handleProfileUpdate(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Update user data
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.name = `${firstName} ${lastName}`.trim();
    currentUser.email = email;
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex].name = currentUser.name;
        users[userIndex].email = email;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    showNotification('Profile updated successfully!', 'success');
    updateProfileInfo(currentUser);
}

// Handle password change
function handlePasswordChange(e) {
    e.preventDefault();
    
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-new-password').value;
    
    if (newPassword !== confirmPassword) {
        showNotification('New passwords do not match!', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('Password must be at least 6 characters long!', 'error');
        return;
    }
    
    // Update password
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex !== -1 && users[userIndex].password === currentPassword) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        showNotification('Password changed successfully!', 'success');
        e.target.reset();
    } else {
        showNotification('Current password is incorrect!', 'error');
    }
}

// Handle notification settings
function handleNotificationSettings() {
    const settings = {
        emailNotifications: document.getElementById('email-notifications').checked,
        orderUpdates: document.getElementById('order-updates').checked,
        promotionalEmails: document.getElementById('promotional-emails').checked,
        newsletter: document.getElementById('newsletter').checked
    };
    
    localStorage.setItem('notificationSettings', JSON.stringify(settings));
    showNotification('Notification settings saved!', 'success');
}

// Handle delete account
function handleDeleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const filteredUsers = users.filter(u => u.id !== currentUser.id);
        
        localStorage.setItem('users', JSON.stringify(filteredUsers));
        localStorage.removeItem('currentUser');
        localStorage.removeItem('cart');
        localStorage.removeItem('wishlist');
        localStorage.removeItem('orders');
        localStorage.removeItem('addresses');
        
        showNotification('Account deleted successfully!', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    }
}

// Show address modal
function showAddressModal() {
    const modal = document.getElementById('address-modal');
    if (modal) {
        modal.classList.add('active');
    }
}

// Hide address modal
function hideAddressModal() {
    const modal = document.getElementById('address-modal');
    if (modal) {
        modal.classList.remove('active');
        document.getElementById('address-form').reset();
    }
}

// Handle add address
function handleAddAddress(e) {
    e.preventDefault();
    
    const address = {
        id: Date.now().toString(),
        type: document.getElementById('address-type').value,
        street: document.getElementById('street-address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip-code').value,
        country: document.getElementById('country').value
    };
    
    const addresses = getAddresses();
    addresses.push(address);
    localStorage.setItem('addresses', JSON.stringify(addresses));
    
    showNotification('Address added successfully!', 'success');
    hideAddressModal();
    loadAddresses();
}

// Load cart count
function loadCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Utility functions
function getOrders() {
    return JSON.parse(localStorage.getItem('orders')) || generateMockOrders();
}

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function getAddresses() {
    return JSON.parse(localStorage.getItem('addresses')) || [];
}

function generateMockOrders() {
    const mockOrders = [
        {
            id: 'ORD001',
            date: '2024-01-15',
            status: 'delivered',
            total: 299.99,
            items: [
                { name: 'Wireless Bluetooth Headphones', quantity: 1, price: 89.99 },
                { name: 'Smart Watch', quantity: 1, price: 299.99 }
            ]
        },
        {
            id: 'ORD002',
            date: '2024-01-20',
            status: 'shipped',
            total: 199.99,
            items: [
                { name: 'Leather Jacket', quantity: 1, price: 199.99 }
            ]
        },
        {
            id: 'ORD003',
            date: '2024-01-25',
            status: 'pending',
            total: 149.99,
            items: [
                { name: 'Table Lamp', quantity: 1, price: 89.99 },
                { name: 'Wall Art', quantity: 1, price: 149.99 }
            ]
        }
    ];
    
    localStorage.setItem('orders', JSON.stringify(mockOrders));
    return mockOrders;
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#667eea'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

function logout() {
    localStorage.removeItem('currentUser');
    showNotification('Logged out successfully!', 'success');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// Global functions for order actions
window.viewOrder = function(orderId) {
    showNotification(`Viewing order ${orderId}`, 'info');
};

window.trackOrder = function(orderId) {
    showNotification(`Tracking order ${orderId}`, 'info');
};

window.addToCart = function(productId) {
    // This would integrate with the main cart functionality
    showNotification('Product added to cart!', 'success');
};

window.removeFromWishlist = function(productId) {
    const wishlist = getWishlist();
    const filteredWishlist = wishlist.filter(item => item.id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(filteredWishlist));
    loadWishlist();
    showNotification('Item removed from wishlist!', 'success');
};

window.editAddress = function(addressId) {
    showNotification(`Editing address ${addressId}`, 'info');
};

window.deleteAddress = function(addressId) {
    if (confirm('Are you sure you want to delete this address?')) {
        const addresses = getAddresses();
        const filteredAddresses = addresses.filter(addr => addr.id !== addressId);
        localStorage.setItem('addresses', JSON.stringify(filteredAddresses));
        loadAddresses();
        showNotification('Address deleted successfully!', 'success');
    }
}; 