// Trust page functionality
document.addEventListener('DOMContentLoaded', function() {
    setupTrustPage();
});

function setupTrustPage() {
    // Setup donation form
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', handleDonationForm);
    }

    // Setup volunteer form
    const volunteerForm = document.getElementById('volunteer-form');
    if (volunteerForm) {
        volunteerForm.addEventListener('submit', handleVolunteerForm);
    }

    // Setup donation amount selection
    const donationAmount = document.getElementById('donation-amount');
    if (donationAmount) {
        donationAmount.addEventListener('change', handleDonationAmountChange);
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
    
    // Initialize counter animations
    animateCounters();
}

function handleDonationForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        donorName: document.getElementById('donor-name').value,
        donorEmail: document.getElementById('donor-email').value,
        donorPhone: document.getElementById('donor-phone').value,
        donationAmount: getDonationAmount(),
        donationPurpose: document.getElementById('donation-purpose').value,
        donationMessage: document.getElementById('donation-message').value,
        isAnonymous: document.getElementById('anonymous-donation').checked,
        submittedAt: new Date().toISOString()
    };
    
    // Validate form
    if (!validateDonationForm(formData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.btn-donate');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Save to localStorage (in real app, this would go to server)
        saveDonation(formData);
        
        // Show success message
        showNotification('Thank you for your generous donation! You will receive a confirmation email shortly.', 'success');
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function handleVolunteerForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        volunteerName: document.getElementById('volunteer-name').value,
        volunteerEmail: document.getElementById('volunteer-email').value,
        volunteerPhone: document.getElementById('volunteer-phone').value,
        volunteerInterest: document.getElementById('volunteer-interest').value,
        volunteerMessage: document.getElementById('volunteer-message').value,
        submittedAt: new Date().toISOString()
    };
    
    // Validate form
    if (!validateVolunteerForm(formData)) {
        return;
    }
    
    // Show loading state
    const submitBtn = e.target.querySelector('.btn-volunteer');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Save to localStorage (in real app, this would go to server)
        saveVolunteerApplication(formData);
        
        // Show success message
        showNotification('Thank you for your interest in volunteering! We will contact you within 48 hours.', 'success');
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function handleDonationAmountChange(e) {
    const customAmountField = document.querySelector('.custom-amount');
    if (e.target.value === 'custom') {
        customAmountField.style.display = 'block';
        document.getElementById('custom-amount').focus();
    } else {
        customAmountField.style.display = 'none';
    }
}

function getDonationAmount() {
    const selectedAmount = document.getElementById('donation-amount').value;
    if (selectedAmount === 'custom') {
        return document.getElementById('custom-amount').value;
    }
    return selectedAmount;
}

function validateDonationForm(data) {
    // Validate donor name
    if (data.donorName.length < 2) {
        showNotification('Please enter a valid name (minimum 2 characters)', 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.donorEmail)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.donorPhone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return false;
    }
    
    // Validate donation amount
    const amount = parseInt(data.donationAmount);
    if (!amount || amount < 100) {
        showNotification('Minimum donation amount is ₹100', 'error');
        return false;
    }
    
    // Validate donation purpose
    if (!data.donationPurpose) {
        showNotification('Please select a purpose for your donation', 'error');
        return false;
    }
    
    return true;
}

function validateVolunteerForm(data) {
    // Validate volunteer name
    if (data.volunteerName.length < 2) {
        showNotification('Please enter a valid name (minimum 2 characters)', 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.volunteerEmail)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.volunteerPhone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return false;
    }
    
    // Validate volunteer interest
    if (!data.volunteerInterest) {
        showNotification('Please select an area of interest', 'error');
        return false;
    }
    
    // Validate volunteer message
    if (data.volunteerMessage.length < 10) {
        showNotification('Please provide a brief explanation of why you want to volunteer (minimum 10 characters)', 'error');
        return false;
    }
    
    return true;
}

function saveDonation(data) {
    // Get existing donations from localStorage
    let donations = JSON.parse(localStorage.getItem('trustDonations')) || [];
    
    // Add new donation with unique ID
    const newDonation = {
        id: Date.now().toString(),
        ...data
    };
    
    donations.push(newDonation);
    
    // Save back to localStorage
    localStorage.setItem('trustDonations', JSON.stringify(donations));
}

function saveVolunteerApplication(data) {
    // Get existing volunteer applications from localStorage
    let volunteers = JSON.parse(localStorage.getItem('trustVolunteers')) || [];
    
    // Add new volunteer application with unique ID
    const newVolunteer = {
        id: Date.now().toString(),
        ...data
    };
    
    volunteers.push(newVolunteer);
    
    // Save back to localStorage
    localStorage.setItem('trustVolunteers', JSON.stringify(volunteers));
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
    const animateElements = document.querySelectorAll('.project-card, .impact-card, .mission-card, .vision-card, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number, .impact-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'error' ? '#ff4757' : type === 'success' ? '#2ed573' : '#2ed573'};
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

// Add hover effects for project cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add hover effects for impact cards
document.addEventListener('DOMContentLoaded', function() {
    const impactCards = document.querySelectorAll('.impact-card');
    
    impactCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add hover effects for mission and vision cards
document.addEventListener('DOMContentLoaded', function() {
    const missionVisionCards = document.querySelectorAll('.mission-card, .vision-card');
    
    missionVisionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
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
        color: #2ed573;
        transform: translateY(-5px);
    }
    
    .form-group.focused input,
    .form-group.focused select,
    .form-group.focused textarea {
        border-color: #2ed573;
        box-shadow: 0 0 0 3px rgba(46, 213, 115, 0.1);
    }
`;
document.head.appendChild(style);

// Export functions for global use
window.showNotification = showNotification; 