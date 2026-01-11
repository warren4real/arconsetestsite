// Initialize EmailJS with your public key
(function() {
    // You'll need to replace these with your own EmailJS credentials
    emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Get from EmailJS dashboard
})();

// DOM Elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('successModal');
const modalClose = document.getElementById('modalClose');
const modalCloseBtn = document.querySelector('.modal-close');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            
            // Scroll to element
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Show loading state
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;
    
    // Form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked ? 'Yes' : 'No',
        date: new Date().toLocaleString(),
        to_email: 'your-business-email@gmail.com' // Your business email
    };
    
    try {
        // Send email using EmailJS
        // Replace with your actual Service ID and Template ID from EmailJS
        const response = await emailjs.send(
            'YOUR_SERVICE_ID_HERE',      // Service ID from EmailJS
            'YOUR_TEMPLATE_ID_HERE',     // Template ID from EmailJS
            formData
        );
        
        // Success
        showSuccessMessage();
        
        // Send auto-reply to customer
        await sendAutoReply(formData);
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        // Error handling
        console.error('Email sending failed:', error);
        showFormMessage('Oops! Something went wrong. Please try again.', 'error');
    } finally {
        // Reset button state
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        submitBtn.disabled = false;
    }
});

// Function to send auto-reply to customer
async function sendAutoReply(customerData) {
    try {
        const autoReplyData = {
            to_email: customerData.from_email,
            to_name: customerData.from_name,
            from_name: 'TechSolutions Team',
            subject: 'Thank you for contacting TechSolutions!',
            message: `Hi ${customerData.from_name}, we've received your inquiry about ${customerData.service || 'our services'} and will get back to you within 24 hours.`
        };
        
        // Send auto-reply using a different template
        await emailjs.send(
            'YOUR_SERVICE_ID_HERE',          // Same Service ID
            'YOUR_AUTO_REPLY_TEMPLATE_ID',   // Auto-reply Template ID
            autoReplyData
        );
        
        console.log('Auto-reply sent successfully');
        
    } catch (error) {
        console.error('Auto-reply failed:', error);
        // Don't show error to user - auto-reply failure shouldn't affect main submission
    }
}

// Show success message and modal
function showSuccessMessage() {
    // Show success modal
    modal.style.display = 'flex';
    
    // Close modal handlers
    modalClose.addEventListener('click', closeModal);
    modalCloseBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Close modal function
function closeModal() {
    modal.style.display = 'none';
    // Scroll to top of contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Show form message (for errors)
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = type;
    formMessage.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Form validation on blur
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
    input.addEventListener('blur', function() {
        validateField(this);
    });
});

// Individual field validation
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    
    // Clear previous error
    field.style.borderColor = '#e9ecef';
    
    if (field.required && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }
    
    if (fieldName === 'from_email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }
    
    return true;
}

// Show field error
function showFieldError(field, message) {
    field.style.borderColor = '#dc3545';
    
    // Create or update error message
    let errorElement = field.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    errorElement.style.color = '#dc3545';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
}

// Animate stats counter
function animateStats() {
    const stats = document.querySelectorAll('.stat h3');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        const suffix = stat.textContent.replace(target, '');
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 20);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('about-stats')) {
                animateStats();
            }
            
            // Add animation class
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .testimonial-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});