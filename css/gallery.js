scrollableElement.addEventListener('wheel', (ev) => {
  ev.preventDefault();  // stop scrolling in another direction
  scrollableElement.scrollLeft += (ev.deltaY + ev.deltaX);
});