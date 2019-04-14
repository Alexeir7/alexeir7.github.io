function showHideNav() {
  var nav = document.getElementById('nav');
  var chevron = document.getElementById('chevron');

  if (nav.classList.contains('nav--hide')) {
    nav.classList.remove('nav--hide');
  } else {
    nav.classList.add('nav--hide');
  }

  if (chevron.classList.contains('header__toggle__chevron--rotate')) {
    chevron.classList.remove('header__toggle__chevron--rotate');
    chevron.classList.add('header__toggle__chevron--original-position');
  } else {
    chevron.classList.add('header__toggle__chevron--rotate');
    chevron.classList.remove('header__toggle__chevron--original-position');
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0';
    document.getElementById('header').style.boxShadow =
      '0px 15px 35px rgba(1, 1, 1,0.5)';
    document.getElementById('logo').style.boxShadow =
      ' 4px 4px 25px hsla(232, 100%, 50%,0.5)';
  } else {
    document.getElementById('header').style.top = '-50px';
    document.getElementById('header').style.boxShadow = 'none';
    document.getElementById('logo').style.boxShadow = 'none';
    document.getElementById('nav').classList.add('nav--hide');
  }
  prevScrollpos = currentScrollPos;
};
