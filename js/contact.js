// FAQ Toggle Functionality
const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Allow keyboard navigation
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for contact links
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Allow default behavior for tel: and mailto: links
        return true;
    });
});