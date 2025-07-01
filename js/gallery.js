// gallery.js – handles dynamic loading and lightbox with watermark
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');

  // Define image list (manual for now)
  const imageCount = 12; // update if more images added
  const imageNames = Array.from({ length: imageCount }, (_, i) => `photo${i + 1}.jpg`);

  // Shuffle images randomly
  imageNames.sort(() => Math.random() - 0.5);

  // Add images to gallery
  imageNames.forEach(name => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = `img/gallery/${name}`;
    img.alt = name;
    figure.appendChild(img);
    gallery.appendChild(figure);
  });

  // Create lightbox container
  const lightbox = document.createElement('div');
  lightbox.id = 'lightbox';
  document.body.appendChild(lightbox);

  // Image click opens lightbox
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const src = e.target.src;

      lightbox.innerHTML = '';

      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.classList.add('lightbox-wrapper');

      // Fullscreen image
      const img = document.createElement('img');
      img.src = src;
      img.classList.add('lightbox-image');

      // Watermark
      const watermark = document.createElement('img');
      watermark.src = './img/Ent_logo/logo.png';
      watermark.classList.add('watermark');

      wrapper.appendChild(img);
      wrapper.appendChild(watermark);
      lightbox.appendChild(wrapper);
      lightbox.style.display = 'flex';
    }
  });

  // Click anywhere to close
  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
});
