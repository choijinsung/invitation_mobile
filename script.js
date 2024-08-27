const remainDays = document.querySelector('#d-day_days');
const remainHour = document.querySelector('#d-day_hour');
const remainMin = document.querySelector('#d-day_min');
const remainSec = document.querySelector('#d-day_sec');

const remainDay = document.querySelector('#remain-day');
const remainOrPast = document.querySelector('#remain_or_past');

document.addEventListener('DOMContentLoaded', () => {
  
  new TypeIt('#title', {
    afterComplete: function (instance) {
      instance.destroy();
    }
  }).go();

  // Initialize Swiper
  let swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
  });

  // Event listeners for gallery items
  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', (event) => {
      let slideIndex = parseInt(item.getAttribute('data-slide'));
      swiper.slideToLoop(slideIndex, 0);
      document.querySelector('.swiper-container').style.display = 'block';
      event.stopPropagation();
    });
  });

  // Hide swiper on background click
  document.querySelector('.swiper-container').addEventListener('click', (event) => {
    if (event.target === document.querySelector('.swiper-slide.swiper-slide-active')) {
      document.querySelector('.swiper-container').style.display = 'none';
    }
    event.stopPropagation();
    swiper.update();
  });

  const accountGroomHeader = document.querySelector('.account_groom_header');
  const accountGroomContent = document.querySelector('.account_groom_content');
  const arrowGroom = document.querySelector('.arrow-groom');

  accountGroomHeader.addEventListener('click', function() {
    const isOpen = accountGroomContent.classList.contains('open');

    if (isOpen) {
      accountGroomContent.classList.remove('open');
      arrowGroom.classList.remove('fa-chevron-up');
      arrowGroom.classList.add('fa-chevron-down');
    } else {
      accountGroomContent.classList.add('open');
      arrowGroom.classList.remove('fa-chevron-down');
      arrowGroom.classList.add('fa-chevron-up');
    }
  });

  const accountBrideHeader = document.querySelector('.account_bride_header');
  const accountBrideContent = document.querySelector('.account_bride_content');
  const arrowBride = document.querySelector('.arrow-bride');

  accountBrideHeader.addEventListener('click', function() {
    const isOpen = accountBrideContent.classList.contains('open');

    if (isOpen) {
      accountBrideContent.classList.remove('open');
      arrowBride.classList.remove('fa-chevron-up');
      arrowBride.classList.add('fa-chevron-down');
    } else {
      accountBrideContent.classList.add('open');
      arrowBride.classList.remove('fa-chevron-down');
      arrowBride.classList.add('fa-chevron-up');
    }
  });

});

const closeBtn = document.getElementById('closeBtn');
const swiperContainer = document.getElementById('mySwiper');

closeBtn.addEventListener('click', () => {
    swiperContainer.style.display = 'none';
});

function copy() {
   // 복사
  navigator.clipboard.writeText("경기도 성남시 분당구 판교역로226번길 16");
}

function copyGroomAccount() {
  // 복사
 navigator.clipboard.writeText("신한 110-166-342310");
}

function copyBrideAccount() {
  // 복사
 navigator.clipboard.writeText("우리 1005-604-094903");
}

function diffDay() {
  const weddingTime = new Date("2024-11-23").setHours(12, 30, 0, 0);
  const todayTime = new Date();

  const diff = weddingTime - todayTime;

  if(diff <= 0) {
    remainDays.innerText = '0';
    remainHour.innerText = '0';
    remainMin.innerText = '0';
    remainSec.innerText = '0';

    return;
  }

  const diffDays = Math.floor(diff / (1000*60*60*24));
  const diffHour = Math.floor((diff / (1000*60*60)) % 24);
  const diffMin = Math.floor((diff / (1000*60)) % 60);
  const diffSec = Math.floor(diff / 1000 % 60);

  remainDays.innerText = `${diffDays}`;
  remainHour.innerText = `${diffHour}`;
  remainMin.innerText = `${diffMin}`;
  remainSec.innerText = `${diffSec}`;
}

function calRemainDay() {
  const weddingDay = new Date("2024-11-23").setHours(0, 0, 0, 0);
  const today = new Date().setHours(0, 0, 0, 0);

  const diff = weddingDay - today;
  let diffDays;

  if (diff < 0) {
    diffDays = diff*(-1) / (1000*60*60*24);
    remainOrPast.innerText = '지났습니다.';
  } else {
    diffDays = diff / (1000*60*60*24);
  }

  remainDay.innerText = `${diffDays}`;
}

diffDay();
setInterval(diffDay, 1000);

calRemainDay();
setInterval(calRemainDay, 1000*60*60*24);

// let mapButton = document.querySelector('.location_map_button');
// let dynamicMap = document.querySelector('.location_dynamic_map');
// let staticMap = document.querySelector('.location_static_map');

// mapButton.addEventListener('click', function() {
//   if(mapButton.textContent === '약도보기') {
//     mapButton.innerText = '지도보기';
//   } else if(mapButton.textContent === '지도보기') {
//     mapButton.innerText = '약도보기';
//   }

//   dynamicMap.classList.toggle('show');
//   staticMap.classList.toggle('show');
// });

// b75e7c0e521976aa6642a7c905fb48d8