// Mobile menu toggle
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

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// State management for lightbox - following the exact pattern
let lightboxState = {
    selectedImage: null,
    selectedTitle: "",
    currentType: ""
};

// Get DOM elements
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxQuoteBtn = document.getElementById('lightbox-quote-btn');

// Open lightbox function - matches the pattern exactly
window.openLightbox = function(image, title, type) {
    // setSelectedImage(image);
    lightboxState.selectedImage = image;
    
    // setSelectedTitle(title);
    lightboxState.selectedTitle = title;
    lightboxState.currentType = type || 'general';
    
    // Update DOM
    if (lightboxImage) {
        lightboxImage.src = image;
        lightboxImage.alt = title;
    }
    
    if (lightboxTitle) {
        lightboxTitle.textContent = title;
    }
    
    if (lightboxQuoteBtn) {
        // Update the quote button link with context
        const baseLink = '#quote';
        lightboxQuoteBtn.href = baseLink;
        
        // You can add query params or context if needed
        lightboxQuoteBtn.innerHTML = `<i class="fas fa-file-alt"></i> Request a Quotation for ${title.split(' ').slice(0, 3).join(' ')}...`;
    }
    
    // Show modal
    if (lightboxModal) {
        lightboxModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

// Close lightbox function
window.closeLightbox = function() {
    // setSelectedImage(null);
    lightboxState.selectedImage = null;
    
    // setSelectedTitle("");
    lightboxState.selectedTitle = "";
    lightboxState.currentType = "";
    
    // Hide modal
    if (lightboxModal) {
        lightboxModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Close modal when clicking close button
const closeButtons = document.querySelectorAll('.close-lightbox');
closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (e) => {
    if (e.target === lightboxModal) {
        closeLightbox();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.style.display === 'block') {
        closeLightbox();
    }
});

// Contact form submission
const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inquiryType = document.getElementById('inquiry-type').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // You can include the lightbox context here if needed
        let contextMessage = message;
        if (lightboxState.selectedTitle) {
            contextMessage = `Regarding: ${lightboxState.selectedTitle}\n\n${message}`;
        }
        
        alert(`Thank you for your inquiry, ${name}! We will contact you at ${email} or ${phone} regarding your ${inquiryType} request.`);
        
        quoteForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close lightbox if open
            if (lightboxModal && lightboxModal.style.display === 'block') {
                closeLightbox();
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize: make sure lightbox is hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    if (lightboxModal) {
        lightboxModal.style.display = 'none';
    }
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
}
