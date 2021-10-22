/**/
let event = [23, 30, 0];

const counter = (timer) => {
  for (let i = timer.length - 1; i >= 0; i--) {
    if (timer[i] < 10) {
      timer[i] = '0' + timer[i];
    } else {
      timer[i] = timer[i].toString();
    }
  }

  document.getElementById('time').innerHTML = `${timer[0]} : ${timer[1]} : ${timer[2]}`;
}

let countdown = setInterval(() => {
  let date = new Date();
  let times = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];
  let timer = [
   event[0] - times[0],
   event[1] - times[1],
   event[2] - times[2]
  ];

  for (let i = timer.length - 1; i > 0; i--) {
    if (timer[i] < 0) {
      timer[i] += 60;
      timer[i - 1]--;
    }
  }


  let timerTotal = (timer[0] * 360) + (timer[1] * 60) + timer[2];

  if (timerTotal !== 0) {
    counter(timer);
  } else {
    clearInterval(countdown);
    document.getElementById('time').style.fontFamily = 'Montserrat';
    document.getElementById('time').style.fontSize = '48px';
    document.getElementById('time').innerHTML = 'sebentar lagi...';
  }
}, 1000);