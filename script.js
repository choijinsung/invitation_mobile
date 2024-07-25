const remainDays = document.querySelector('#d-day_days');
const remainHour = document.querySelector('#d-day_hour');
const remainMin = document.querySelector('#d-day_min');
const remainSec = document.querySelector('#d-day_sec');

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

diffDay();
setInterval(diffDay, 1000);