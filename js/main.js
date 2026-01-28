// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu
            document.getElementById('nav-toggle').checked = false;
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

// Observe all service cards and gallery items
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Mobile menu close on outside click
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const navToggle = document.getElementById('nav-toggle');
    
    if (!navbar.contains(e.target) && navToggle.checked) {
        navToggle.checked = false;
    }
});

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}