function trigger(event) {
  const text = document.querySelector('#' + event.target.id + 'P');
  setTimeout( () => text.classList.remove('trigger'), 500 );
  text.classList.add('trigger');
};

export { trigger };
