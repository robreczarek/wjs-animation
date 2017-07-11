var towerElements = document.querySelectorAll('.tower');
towerElements = [...towerElements].sort((a, b) => {
  return parseFloat(a.getAttribute('x')) - parseFloat(b.getAttribute('x'));
});

var easing = anime({
  targets: towerElements,
  translateX: function(el, i, l) {
    if (i > (l*0.5)) {
      return [4000-((i+1)*100), 0];
    } else {
      return [-4000+((i+1)*100), 0];
    }
  },
  easing: 'easeInOutQuart',
  delay: function(el, i, l) {
    if (i > .5*l) {
      return (i-(.5*l)) * 100;
    }
    return (l-i) * 100;
  }
});
