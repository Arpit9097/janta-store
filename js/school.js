// School page functionality
document.addEventListener('DOMContentLoaded', function() {
    setupSchoolPage();
});

function setupSchoolPage() {
    // Setup admission form
    const admissionForm = document.getElementById('admission-form');
    if (admissionForm) {
        admissionForm.addEventListener('submit', handleAdmissionForm);
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
}

function handleAdmissionForm(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        parentName: document.getElementById('parent-name').value,
        studentName: document.getElementById('student-name').value,
        studentAge: document.getElementById('student-age').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        interestedClass: document.getElementById('interested-class').value,
        message: document.getElementById('message').value,
        submittedAt: new Date().toISOString()
    };
    
    // Validate form
    if (!validateAdmissionForm(formData)) {
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
        saveAdmissionApplication(formData);
        
        // Show success message
        showNotification('Admission application submitted successfully! We will contact you soon.', 'success');
        
        // Reset form
        e.target.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function validateAdmissionForm(data) {
    // Validate parent name
    if (data.parentName.length < 2) {
        showNotification('Please enter a valid parent name (minimum 2 characters)', 'error');
        return false;
    }
    
    // Validate student name
    if (data.studentName.length < 2) {
        showNotification('Please enter a valid student name (minimum 2 characters)', 'error');
        return false;
    }
    
    // Validate student age
    const age = parseInt(data.studentAge);
    if (age < 3 || age > 18) {
        showNotification('Student age must be between 3 and 18 years', 'error');
        return false;
    }
    
    // Validate phone number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Please enter a valid 10-digit phone number', 'error');
        return false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }
    
    // Validate interested class
    if (!data.interestedClass) {
        showNotification('Please select an interested class', 'error');
        return false;
    }
    
    return true;
}

function saveAdmissionApplication(data) {
    // Get existing applications from localStorage
    let applications = JSON.parse(localStorage.getItem('schoolAdmissions')) || [];
    
    // Add new application with unique ID
    const newApplication = {
        id: Date.now().toString(),
        ...data
    };
    
    applications.push(newApplication);
    
    // Save back to localStorage
    localStorage.setItem('schoolAdmissions', JSON.stringify(applications));
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
    const animateElements = document.querySelectorAll('.program-card, .facility-card, .step, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

function showNotification(message, type = 'info') {
    // Create notification element
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

// Statistics counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
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

// Initialize counter animation when page loads
window.addEventListener('load', function() {
    setTimeout(animateCounters, 1000);
});

// Add hover effects for facility cards
document.addEventListener('DOMContentLoaded', function() {
    const facilityCards = document.querySelectorAll('.facility-card');
    
    facilityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
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
        color: #667eea;
        transform: translateY(-5px);
    }
    
    .form-group.focused input,
    .form-group.focused select,
    .form-group.focused textarea {
        border-color: #667eea;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
`;
document.head.appendChild(style);

// Export functions for global use
window.showNotification = showNotification; 