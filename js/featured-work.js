// js/featured-work.js

// Featured Work Interactions
const featuredItems = document.querySelectorAll('.featured-item');

// Add interactive counter
featuredItems.forEach((item, index) => {
    item.addEventListener('mouseenter', function() {
        // Optionally add additional interactions
        console.log(`Viewing featured work ${index + 1}`);
    });
});

// Lazy load featured images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                if (img && img.dataset.src) {
                    img.src = img.dataset.src;
                    imageObserver.unobserve(entry.target);
                }
            }
        });
    });

    featuredItems.forEach(item => imageObserver.observe(item));
}