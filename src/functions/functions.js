function trigger(event) {
  const btn = document.querySelector('#' + event.target.id);
  setTimeout( () => btn.classList.remove('trigger'), 500 );
  btn.classList.add('trigger');
};

export { trigger };
