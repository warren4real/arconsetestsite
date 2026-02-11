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

// Product database with detailed information
const productDatabase = {
    // Water Proofing Product
    "assets/Water Proofing Product.jpg": {
        title: "Water Proofing",
        brand: "INNOBIT® / iKOTE®",
        description: "We provide high performance water proofing, sealants, tapes and solutions for the construction industry in the Philippines. Our partners are based in Middle East and Asia that manufactures our products. Our water proofing products include bitumen membranes, PU liquid membranes, hybrid coatings, siliconized acrylic coating, acrylate urethane coating, cementitious coatings and other repair solutions. Sealants include silicones, advanced U, hybrids, acrylics and polysulphides. We also offer fire rated sealants and coatings.",
        features: [
            "Bitumen membranes",
            "PU liquid membranes",
            "Hybrid coatings",
            "Siliconized acrylic coating",
            "Acrylate urethane coating",
            "Cementitious coatings",
            "Fire rated sealants"
        ],
        contact: {
            phone1: "0916-693-8001",
            phone2: "0917-204-3104",
            email: "arconse.ic@gmail.com"
        }
    },
    
    // Water Dispenser Product
    "assets/Water Dispenser Product.jpg": {
        title: "Water Dispenser",
        productName: "ACS Hot & Cold Water Dispenser",
        specs: [
            "Power Source: Electric",
            "Housing Material: Plastic",
            "Application: Commercial, Hotels, Industrial",
            "Features: Hot & Cold",
            "Type: Compressed Gas",
            "Water Flow: 300GPD",
            "Dimensions: 575x400x200mm",
            "Function: Pure Water Filter: PP+UDF+PP+RO+T33",
            "Style: Hot Warm Cold"
        ],
        description: "High-quality water dispenser with advanced filtration system, providing both hot and cold purified water for commercial and industrial applications.",
        contact: {
            phone1: "0916-693-8001",
            phone2: "0917-204-3104",
            email: "arconse.ic@gmail.com"
        }
    },
    
    // Solar Products
    "assets/Solar Products.jpg": {
        title: "Solar Products",
        description: "Complete solar energy solutions including solar panels, batteries, and converters for residential and commercial applications. Sustainable energy solutions that reduce electricity costs and environmental impact.",
        features: [
            "Monocrystalline solar panels",
            "Lithium battery storage",
            "Power converters",
            "Complete installation services"
        ],
        contact: {
            phone1: "0916-693-8001",
            phone2: "0917-204-3104",
            email: "arconse.ic@gmail.com"
        }
    },
    
    // Power Station
    "assets/product-power station.jpg": {
        title: "Power Station",
        description: "Reliable power station solutions for backup and primary power needs. Ideal for residential, commercial, and industrial applications.",
        contact: {
            phone1: "0916-693-8001",
            phone2: "0917-204-3104",
            email: "arconse.ic@gmail.com"
        }
    },
    
    // Smart Organic Composter
    "assets/Smart Organic Composter.jpg": {
        title: "Smart Organic Composter",
        description: "Innovative smart composting solution that converts organic waste into nutrient-rich fertilizer. Perfect for homes, restaurants, and commercial establishments.",
        features: [
            "Automatic composting process",
            "Odorless operation",
            "Quick composting cycle",
            "Smart controls"
        ],
        contact: {
            phone1: "0916-693-8001",
            phone2: "0917-204-3104",
            email: "arconse.ic@gmail.com"
        }
    }
};

// State management for lightbox
let lightboxState = {
    selectedImage: null,
    selectedTitle: "",
    currentType: ""
};

// Get DOM elements
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDetails = document.getElementById('lightbox-details-container');

// Open lightbox function
window.openLightbox = function(image, title, type) {
    lightboxState.selectedImage = image;
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
    
    // Generate product details
    if (lightboxDetails) {
        lightboxDetails.innerHTML = generateProductDetails(image);
    }
    
    // Show modal
    if (lightboxModal) {
        lightboxModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
};

// Generate product details HTML based on the image path
function generateProductDetails(imagePath) {
    const product = productDatabase[imagePath];
    
    if (!product) {
        // Fallback for projects or other content
        return `
            <div class="product-detail-content">
                <p class="product-description">${lightboxState.selectedTitle}</p>
                <div class="contact-info-section">
                    <h4>Contact Us for purchase!</h4>
                    <div class="contact-details-list">
                        <p><i class="fas fa-phone"></i> 0916-693-8001</p>
                        <p><i class="fas fa-phone"></i> 0917-204-3104</p>
                        <p><i class="fas fa-envelope"></i> arconse.ic@gmail.com</p>
                    </div>
                </div>
            </div>
        `;
    }
    
    let html = '<div class="product-detail-content">';
    
    // Title
    html += `<h3 class="product-detail-title">${product.title}</h3>`;
    
    // Brand (if available)
    if (product.brand) {
        html += `<div class="product-brand">${product.brand}</div>`;
    }
    
    // Product Name (for dispenser)
    if (product.productName) {
        html += `<p class="product-name"><strong>${product.productName}</strong></p>`;
    }
    
    // Description
    if (product.description) {
        html += `<p class="product-description">${product.description}</p>`;
    }
    
    // Specifications (for dispenser)
    if (product.specs && product.specs.length > 0) {
        html += '<div class="product-specs"><h4>Specifications:</h4><ul>';
        product.specs.forEach(spec => {
            html += `<li>${spec}</li>`;
        });
        html += '</ul></div>';
    }
    
    // Features (for waterproofing, solar, composter)
    if (product.features && product.features.length > 0) {
        html += '<div class="product-features"><ul>';
        product.features.forEach(feature => {
            html += `<li>${feature}</li>`;
        });
        html += '</ul></div>';
    }
    
    // Contact Information - EXACTLY as shown in the images
    html += `
        <div class="contact-info-section">
            <h4>Contact Us for purchase!</h4>
            <div class="contact-details-list">
                <p><i class="fas fa-phone"></i> ${product.contact.phone1}</p>
                <p><i class="fas fa-phone"></i> ${product.contact.phone2}</p>
                <p><i class="fas fa-envelope"></i> ${product.contact.email}</p>
            </div>
        </div>
    `;
    
    html += '</div>';
    return html;
}

// Close lightbox function
window.closeLightbox = function() {
    lightboxState.selectedImage = null;
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
        
        let contextMessage = message;
        if (lightboxState.selectedTitle) {
            contextMessage = `Regarding: ${lightboxState.selectedTitle}\n\n${message}`;
        }
        
        const selectElement = document.getElementById('inquiry-type');
        const inquiryTypeText = selectElement.options[selectElement.selectedIndex]?.text || inquiryType;
        
        alert(`Thank you for your inquiry, ${name}! We will contact you at ${email} or ${phone} regarding your ${inquiryTypeText} request.`);
        
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
