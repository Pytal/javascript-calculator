function trigger(event) {
  const char = document.querySelector('#' + event.target.id + 'P');
  setTimeout( () => char.classList.remove('trigger'), 500 );
  char.classList.add('trigger');
};

function rounder(num) {
  return Math.round( num * 100000 ) / 100000;
};

export { trigger, rounder };
