// Smooth scroll animation for timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
        }
    });
}, observerOptions);

timelineItems.forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Add hover effect to stat items
const statItems = document.querySelectorAll('.stat-item');

statItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        const number = this.querySelector('.stat-number');
        number.style.transform = 'scale(1)';
    });
});