function showHideNav() {
    var nav = document.getElementById("nav");
    var chevron = document.getElementById("chevron");

    if (nav.classList.contains('nav__list--hide')) {
        nav.classList.remove('nav__list--hide');
    } else {
        nav.classList.add('nav__list--hide');
    }

    if (chevron.classList.contains('header__toggle__chevron--rotate')) {
        chevron.classList.remove('header__toggle__chevron--rotate');
        chevron.classList.add('header__toggle__chevron--original-position');
    } else {
        chevron.classList.add('header__toggle__chevron--rotate');
        chevron.classList.remove('header__toggle__chevron--original-position');
    }
  }