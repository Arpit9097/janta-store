// Marriage Hall page functionality
document.addEventListener('DOMContentLoaded', function() {
    setupMarriageHallPage();
});

function setupMarriageHallPage() {
    // Setup booking form
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingForm);
    }

    // Setup smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add animation on scroll
    setupScrollAnimations();
    
    // Setup gallery lightbox
    setupGalleryLightbox();
}

function handleBookingForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        eventType: document.getElementById('event-type').value,
        package: document.getElementById('package').value,
        eventDate: document.getElementById('event-date').value,
        guestCount: document.getElementById('guest-count').value,
        contactName: document.getElementById('contact-name').value,
        contactPhone: document.getElementById('contact-phone').value,
        contactEmail: document.getElementById('contact-email').value,
        specialRequirements: document.getElementById('special-requirements').value,
        submittedAt: new Date().toISOString()
    };
    
    // Validate form
    if (!validateBookingForm(formData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Save to localStorage (in real app, this would go to server)
        saveBookingRequest(formData);
        
        // Show success message
        showNotification('Booking request submitted successfully! We will contact you within 24 hours.', 'success');
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateBookingForm(data) {
    // Validate event type
    if (!data.eventType) {
        showNotification('Please select an event type', 'error');
        return false;
    }
    
    // Validate package
    if (!data.package) {
        showNotification('Please select a package', 'error');
        return false;
    }
    
    // Validate event date
    const selectedDate = new Date(data.eventDate);
    const today = new Date();
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(today.getMonth() + 3);
    
    if (selectedDate < today) {
        showNotification('Event date cannot be in the past', 'error');
        return false;
    }
    
    if (selectedDate < threeMonthsFromNow) {
        showNotification('Please book at least 3 months in advance', 'error');
        return false;
    }
    
    // Validate guest count
    const guestCount = parseInt(data.guestCount);
    if (guestCount < 50 || guestCount > 500) {
        showNotification('Guest count must be between 50 and 500', 'error');
        return false;
    }
    
    // Validate contact name
    if (data.contactName.length < 2) {
        showNotification('Please enter a valid contact name (minimum 2 characters)', 'error');
        return false;
    }
    
    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.contactPhone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.contactEmail)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    return true;
}

function saveBookingRequest(data) {
    // Get existing bookings from localStorage
    let bookings = JSON.parse(localStorage.getItem('marriageHallBookings')) || [];
    
    // Add new booking with unique ID
    const newBooking = {
        id: Date.now().toString(),
        ...data
    };
    
    bookings.push(newBooking);
    
    // Save back to localStorage
    localStorage.setItem('marriageHallBookings', JSON.stringify(bookings));
}

function bookPackage(packageType) {
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Pre-select the package
    const packageSelect = document.getElementById('package');
    if (packageSelect) {
        packageSelect.value = packageType;
    }
    
    // Show notification
    const packageNames = {
        'basic': 'Basic Package',
        'standard': 'Standard Package',
        'premium': 'Premium Package'
    };
    
    showNotification(`Selected ${packageNames[packageType]}. Please fill in the booking form below.`, 'info');
}

function setupScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .pricing-card, .gallery-item, .info-item, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

function setupGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                showLightbox(img.src, img.alt);
            }
        });
    });
}

function showLightbox(imageSrc, imageAlt) {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox-overlay';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    // Create image container
    const imageContainer = document.createElement('div');
    imageContainer.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        position: relative;
    `;
    
    // Create image
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt;
    img.style.cssText = `
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    `;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2rem;
        cursor: pointer;
        padding: 0;
        width: 40px;
        height: 40px;
    `;
    
    // Add event listeners
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });
    
    closeBtn.addEventListener('click', function() {
        lightbox.remove();
    });
    
    // Assemble lightbox
    imageContainer.appendChild(img);
    imageContainer.appendChild(closeBtn);
    lightbox.appendChild(imageContainer);
    document.body.appendChild(lightbox);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#ff6b6b'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    notification.textContent = message;
    
    // Add animation styles if not already present
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes animateIn {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-in {
                animation: animateIn 0.6s ease forwards;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add hover effects for pricing cards
document.addEventListener('DOMContentLoaded', function() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            } else {
                this.style.transform = 'scale(1.05) translateY(-10px)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('featured')) {
                this.style.transform = 'translateY(0) scale(1)';
            } else {
                this.style.transform = 'scale(1.05)';
            }
        });
    });
});

// Form field focus effects
document.addEventListener('DOMContentLoaded', function() {
    const formFields = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });
});

// Add CSS for focused state
const style = document.createElement('style');
style.textContent = `
    .form-group.focused label {
        color: #ff6b6b;
        transform: translateY(-5px);
    }
    
    .form-group.focused input,
    .form-group.focused select,
    .form-group.focused textarea {
        border-color: #ff6b6b;
        box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
    }
`;
document.head.appendChild(style);

// Export functions for global use
window.showNotification = showNotification;
window.bookPackage = bookPackage; 