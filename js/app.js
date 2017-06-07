$(document).ready(function() {
  $('select').material_select();

  $('#female').click(() => {
    $('#form-gender').val('female');
    $('#male').attr('src', './img/form-gender-mars-off.png');
    $('#female').attr('src', './img/form-gender-venus-on.png');
  });

  $('#male').click(() => {
    $('#form-gender').val('male');
    $('#female').attr('src', './img/form-gender-venus-off.png');
    $('#male').attr('src', './img/form-gender-mars-on.png');
  });

});

const overlayLeft = document.getElementById('overlay-left');
const overlayRight = document.getElementById('overlay-right');
const overlayLogo = document.getElementById('overlay-logo');
const bgGradient = document.getElementById('bg-gradient');
const bgLines = document.getElementById('bg-lines');
const formSidebar = document.getElementById('form-sidebar');
const formSidebarLines = document.getElementById('form-sidebar-lines');
const formBody = document.querySelector('.form-main');

let mainTimeline = anime.timeline();

mainTimeline.add({
  targets: overlayLeft,
  translateX: '45vw',
  width: 0,
  easing: 'easeOutQuint',
  complete: () => {
    overlayLeft.remove();
  },
  offset: 1500
})
.add({
  targets: overlayRight,
  width: '0',
  easing: 'easeOutQuint',
  complete: () => {
    overlayRight.remove();
  },
  offset: 1500
})
.add({
  targets: overlayLogo,
  opacity: 0,
  easing: 'easeOutQuint',
  complete: () => {
    overlayLogo.remove();
  },
  offset: 1200
})
.add({
  targets: bgGradient,
  width: ['50%', '55%'],
  easing: 'linear',
  offset: 1500,
  duration: 4000
})
.add({
  targets: bgLines,
  easing: 'linear',
  offset: 1500,
  rotate: {
    value: [5, 0],
    duration: 1800,
    easing: 'linear'
  },
  width: {
    value: ['90%', '100%'],
    duration: 1800,
    easing: 'linear'
  }
});

let domformSidebar = anime({
  targets: formSidebar,
  easing: 'easeOutQuint',
  duration: 3300,
  update: function(anim) {
    if (anim.currentTime >= 2300) {
      let progress = (anim.currentTime - 2300) / 10;
      $('#form-sidebar').css('clip-path', 'polygon(100% 0%, 100% 100%, ' + (100 - progress) + '% 100%, ' + (100 - progress) + '% 0%)');
    }
    if (anim.currentTime == 3300) {
      $('#form-sidebar').removeClass('clip-path');
    }
  }
});

let domformSidebarLines = anime({
  targets: formSidebarLines,
  easing: 'easeOutQuint',
  duration: 4300,
  update: function(anim) {
    if (anim.currentTime >= 3800) {
      let progress = (anim.currentTime - 3800) / 5;
      $('#form-sidebar-lines').css('clip-path', 'polygon(' + progress + '% 0%, ' + progress + '% 100%, 0% 100%, 0% 0%)');
    }
    if (anim.currentTime == 4300) {
      $('#form-sidebar-lines').removeClass('clip-path');
    }
  }
});

let domformBody = anime({
  targets: formBody,
  easing: 'easeOutQuint',
  duration: 3300,
  update: function(anim) {
    if (anim.currentTime >= 2300) {
      let progress = (anim.currentTime - 2300) / 10;
      $('.form-main').css('clip-path', 'polygon(' + progress + '% 0%, ' + progress + '% 100%, 0% 100%, 0% 0%)');
    }
    if (anim.currentTime == 3300) {
      $('.form-main').removeClass('clip-path');
    }
  }
});
