document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('myModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementById('closeBtn');

  thumbnails.forEach(img => {
    img.addEventListener('click', () => {
      const highResSrc = img.getAttribute('data-full');
      modalImg.src = highResSrc;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImg.src = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });
});
