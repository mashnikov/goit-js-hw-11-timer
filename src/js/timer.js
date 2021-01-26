//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
//new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  minutes: document.querySelector('.value[data-value="mins"]'),
  seconds: document.querySelector('.value[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date('Jul 17, 2021');
    const currentDate = Date.now();
    const deltaTime = targetDate - currentDate;
    updateClockface(deltaTime);

    setInterval(() => {
      const currentDate = Date.now();

      const deltaTime = targetDate - currentDate;

      updateClockface(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockface(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = mins;
  refs.seconds.textContent = secs;
}

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
  return String(value).padStart(2, '0');
}
