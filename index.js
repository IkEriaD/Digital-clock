const hourElement = document.getElementById('hour');

const minutesElement = document.getElementById('minutes');

const secondsElement = document.getElementById('seconds');

const ampmElement = document.getElementById('ampm');

function updateDate() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM'

  if (h > 12) {
    h = h - 12;
    ampm = 'PM';
  }
// to add zeros in front of the numbers .. 
// h is < 10, we make it to be zero, after that add h back to it again.. 
  h = h<10 ? '0' + h : h;
  m = m<10 ? '0' + m : m;
  s = s<10 ? '0' + s : s;

  hourElement.innerText = h;
  minutesElement.innerText = m;
  secondsElement.innerText = s;
  ampm, (innerText = ampm);
  setTimeout(() => {
    updateDate();
  }, 1000)
};

updateDate();