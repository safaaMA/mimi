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
 
  const cartIcon = document.querySelector('.cartIcon');
  const cartBox = document.querySelector('.cart-box');
  const blackShado = document.querySelector('.black-shado');
  const closeBtn = document.querySelector('.close');

  // فتح السلة
  cartIcon.addEventListener('click', () => {
    cartBox.classList.add('active');
    blackShado.classList.add('active');
  });

  // إغلاق السلة
  closeBtn.addEventListener('click', () => {
    cartBox.classList.remove('active');
    blackShado.classList.remove('active');
  });

  // إغلاق عند الضغط على الخلفية السوداء
  blackShado.addEventListener('click', () => {
    cartBox.classList.remove('active');
    blackShado.classList.remove('active');
  });
 
 
  const listIcon = document.querySelector('.listIcon');
  const menuBox = document.querySelector('.menu-box');
  const closeMenu = document.querySelector('.close-menu');
  const blackShado2 = document.querySelector('.black-shado'); // نفس الخلفية

  // فتح القائمة
  listIcon.addEventListener('click', () => {
    menuBox.classList.add('active');
    blackShado2.classList.add('active');
  });

  // غلق القائمة
  closeMenu.addEventListener('click', () => {
    menuBox.classList.remove('active');
    blackShado2.classList.remove('active');
  });

  // غلق عند الضغط على الخلفية السوداء
  blackShado2.addEventListener('click', () => {
    menuBox.classList.remove('active');
    blackShado2.classList.remove('active');
  });
 

 
  const searchIcon = document.querySelector('.serchIcon');
  const searchBox = document.querySelector('.search-box');
  const closeSearch = document.querySelector('.close-search');
  const blackShado3 = document.querySelector('.black-shado'); // نفس الخلفية

  // فتح البحث
  searchIcon.addEventListener('click', () => {
    searchBox.classList.add('active');
    blackShado3.classList.add('active');
  });

  // غلق البحث
  closeSearch.addEventListener('click', () => {
    searchBox.classList.remove('active');
    blackShado3.classList.remove('active');
  });

  // غلق عند الضغط على الخلفية
  blackShado3.addEventListener('click', () => {
    searchBox.classList.remove('active');
    blackShado3.classList.remove('active');
  });
 
    function changeImage(el) {
      document.getElementById("mainImg").src = el.src;
    }

    function step(val) {
      let input = document.getElementById("numInput");
      let newVal = parseInt(input.value) + val;
      if(newVal >= 1) input.value = newVal;
    }