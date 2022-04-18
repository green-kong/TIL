import moment from 'moment';

function currentTime() {
  return moment().format('H:m:s');
}

const div = document.createElement('div');
document.body.appendChild(div);

setInterval(() => {
  div.innerHTML = currentTime();
}, 1000);
