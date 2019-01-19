(function(){
  'use strict';
  const total = document.getElementById('total-time');
  const task = [document.getElementById('task-time'),document.getElementById('creating-time'),document.getElementById('gathering-time'),document.getElementById('sport-time'),document.getElementById('reading-time'),document.getElementById('break-time')];
  const buttons = document.querySelectorAll('button');
  const totaltime = timecount(total);
  let hour = 0;
  let minute = 0;
  let second = 1;
  for(let i = 0;i<buttons.length;i++){
    buttons[i].onclick = () => {
      const rap = document.createElement('span');
      rap.innerText = addZero(hour) +':'+ addZero(minute) +':'+  addZero(second)+ ' ';
      task[i].appendChild(rap);
      hour = 0;
      minute = 0;
      second = 0;
    }
  }

  function timecount(timer) {

    timer.innerText = "00:00:00";
    let countInterval = setInterval(countup,1000);
    function countup() {
      if(minute == 60){
        hour++;
        minute = 0;
      }
      if(second == 60){
        minute++;
        second = 0
      }
      timer.innerText = addZero(hour) +':'+ addZero(minute) +':'+ addZero(second);
      second++;
    }
  }
  function addZero(time) {
    if(time < 10){
      return '0' + time;
    } else {
      return time;
    }
  }
}());
