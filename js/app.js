var towerElements = document.querySelectorAll('.tower');
towerElements = [...towerElements].sort((a, b) => {
  return parseFloat(a.getAttribute('x')) - parseFloat(b.getAttribute('x'));
});

towerLeft = towerElements.slice(0, Math.floor(towerElements.length/2));
towerRight = towerElements.slice(Math.floor(towerElements.length/2), towerElements.length);


var easingLeft = anime({
  targets: towerLeft,
  translateX: function(el, i, l) {
    return [7000-((i+1)*100), 0];
  },
  easing: 'easeInOutQuart',
  delay: function(el, i, l) {
    return i * 100;
  }
});

var easingRight = anime({
  targets: towerRight,
  translateX: function(el, i, l) {
    return [-7000+((i+1)*100), 0];
  },
  easing: 'easeInOutQuart',
  delay: function(el, i, l) {
    return i * 100;
  }
});

var easingQuotes = anime({
  targets: '#quotes',
  scale: [0,1],
  easing: 'easeInOutQuart',
  delay: 1000
});
