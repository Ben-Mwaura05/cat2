const images = document.querySelector('.images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const totalImages = document.querySelectorAll('.images img').length;

let index = 0;

function showImage() {
  images.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalImages;
  showImage();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  showImage();
});

// Optional: auto-slide every 5 seconds
setInterval(() => {
  nextBtn.click();
}, 5000);