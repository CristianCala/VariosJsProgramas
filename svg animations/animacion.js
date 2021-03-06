var uno = anime({
  targets: '.layer',
  translateY: 5,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: true
});

function loop(t) {
  animation.tick(t);
  customRAF = requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

var slowAnimation = anime({
  targets: '.layer-2',
  translateY: 8,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutQuad',
  autoplay: true
});