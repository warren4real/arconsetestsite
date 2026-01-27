// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Form Submission
const quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const inquiryType = document.getElementById('inquiry-type').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Determine which phone number to show based on inquiry type
        let contactNumber = '';
        if (inquiryType === 'service' || inquiryType === 'project') {
            contactNumber = '0916-693-8001 (Norman Tan)';
        } else if (inquiryType === 'product') {
            contactNumber = '0917-204-3104 (Joash Gaerlan)';
        } else {
            contactNumber = '0916-693-8001 or 0917-204-3104';
        }
        
        // Create inquiry type text
        const inquiryText = {
            'service': 'Service Quotation',
            'product': 'Product Inquiry',
            'project': 'Project Consultation',
            'general': 'General Inquiry'
        }[inquiryType] || 'Inquiry';
        
        // Show confirmation message
        alert(`Thank you ${name}! Your ${inquiryText} has been submitted.\n\nWe'll contact you at ${phone} or ${email} within 24 hours.\n\nFor immediate assistance, you can call:\n${contactNumber}`);
        
        // Reset form
        quoteForm.reset();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Make product cards clickable (already handled by onclick in HTML)
// This is just for visual feedback
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});
