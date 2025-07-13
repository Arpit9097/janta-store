// Store page functionality
document.addEventListener('DOMContentLoaded', function() {
    setupStorePage();
});

function setupStorePage() {
    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Map old category names to new ones for backward compatibility
    const categoryMap = {
        'electronics': 'jewellery',
        'fashion': 'vastralaya', 
        'home': 'rediment',
        'books': 'books',
        'sports': 'sports',
        'beauty': 'beauty'
    };
    
    // Get the correct category
    const currentCategory = categoryMap[category] || category;
    
    // Load products for the current category
    loadProducts(currentCategory);
    
    // Setup filters and sorting
    setupFilters();
    setupSorting();
    setupSearch();
    setupViewToggle();
}

function loadProducts(category) {
    const productsContainer = document.getElementById('products-container');
    const products = window.products[category] || [];
    
    if (products.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }
    
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-actions">
                <button onclick="addToCart(${product.id})" class="btn-add-cart">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button onclick="addToWishlist(${product.id})" class="btn-wishlist">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                ${generateStars(product.rating)}
                <span class="rating-text">(${product.rating})</span>
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
        </div>
    `;
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Apply filter logic here
            const filter = this.getAttribute('data-filter');
            applyFilter(filter);
        });
    });
}

function setupSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            applySorting(sortBy);
        });
    }
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            applySearch(searchTerm);
        });
    }
}

function setupViewToggle() {
    const gridViewBtn = document.getElementById('grid-view');
    const listViewBtn = document.getElementById('list-view');
    const productsContainer = document.getElementById('products-container');
    
    if (gridViewBtn && listViewBtn) {
        gridViewBtn.addEventListener('click', function() {
            productsContainer.className = 'products-grid';
            gridViewBtn.classList.add('active');
            listViewBtn.classList.remove('active');
        });
        
        listViewBtn.addEventListener('click', function() {
            productsContainer.className = 'products-list';
            listViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    }
}

function applyFilter(filter) {
    // Filter logic implementation
    console.log('Applying filter:', filter);
}

function applySorting(sortBy) {
    // Sorting logic implementation
    console.log('Applying sorting:', sortBy);
}

function applySearch(searchTerm) {
    // Search logic implementation
    console.log('Applying search:', searchTerm);
}

function addToCart(productId) {
    // Add to cart functionality
    const product = findProductById(productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        showNotification('Product added to cart!');
        updateCartCount();
    }
}

function addToWishlist(productId) {
    // Add to wishlist functionality
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const product = findProductById(productId);
    
    if (product && !wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Product added to wishlist!');
    } else {
        showNotification('Product already in wishlist!');
    }
}

function findProductById(productId) {
    // Search for product across all categories
    for (const category in window.products) {
        const product = window.products[category].find(p => p.id === productId);
        if (product) return product;
    }
    return null;
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    const cartIcon = document.querySelector('.cart-icon .cart-count');
    if (cartIcon) {
        cartIcon.textContent = cartCount;
        cartIcon.style.display = cartCount > 0 ? 'block' : 'none';
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #667eea;
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
}); 