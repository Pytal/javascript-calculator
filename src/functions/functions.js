function trigger(event) {
  const char = document.querySelector('#' + event.target.id + 'P');
  setTimeout( () => char.classList.remove('trigger'), 500 );
  char.classList.add('trigger');
};

export { trigger };
