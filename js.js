const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const dotsContainer = document.querySelector('.dots');

let index = 0;
let startX = 0;
let isDragging = false;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

// إنشاء النقاط
images.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});

const dots = document.querySelectorAll('.dots span');

function updateSlider() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateSlider();
}

// التشغيل التلقائي
setInterval(nextSlide, 3000);

// إضافة السحب بالماوس/اللمس
slides.addEventListener('mousedown', dragStart);
slides.addEventListener('touchstart', dragStart);

slides.addEventListener('mouseup', dragEnd);
slides.addEventListener('touchend', dragEnd);

slides.addEventListener('mousemove', dragAction);
slides.addEventListener('touchmove', dragAction);

function dragStart(event) {
  isDragging = true;
  startX = getPositionX(event);
  slides.style.transition = 'none';
  cancelAnimationFrame(animationID);
}

function dragAction(event) {
  if (!isDragging) return;
  const currentPosition = getPositionX(event);
  const diff = currentPosition - startX;
  slides.style.transform = `translateX(${prevTranslate + diff}px)`;
}

function dragEnd() {
  if (!isDragging) return;
  isDragging = false;
  const movedBy = prevTranslate - parseInt(slides.style.transform.replace('translateX(', '').replace('px)', ''));
  
  if (movedBy < -50 && index < images.length - 1) index++;
  if (movedBy > 50 && index > 0) index--;

  slides.style.transition = 'transform 0.3s ease';
  updateSlider();
  prevTranslate = -index * slides.clientWidth;
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}
 const input = document.getElementById('numInput');
  function step(delta){
    let val = Number(input.value) || 0;
    input.value = val + delta;
    if (input.min !== '') {
      const min = Number(input.min);
      if (!isNaN(min) && Number(input.value) < min) input.value = min;
    }
  }