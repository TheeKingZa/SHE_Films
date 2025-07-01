// main.js – tiny helper utilities
document.addEventListener('DOMContentLoaded', () => {

  /* ------ (1) auto-update year in footer ------ */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ------ (2) gallery light-box ------ */
  const galleryFigures = document.querySelectorAll('.gallery figure img');
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  lightbox.classList.add('closeable');
  document.body.appendChild(lightbox);

  galleryFigures.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.innerHTML = '';                // clear previous
      const clone = img.cloneNode();          // big copy
      lightbox.appendChild(clone);
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => lightbox.style.display = 'none');

  // Removed contact-form validation and submission logic
});
