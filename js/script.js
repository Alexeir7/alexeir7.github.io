function showHideNav() {
    var nav = document.getElementById("nav");
    var icon = document.getElementById("icon");

    console.log(nav.classList);

    if (nav.classList.contains('main-nav__list--hide')) {
        nav.classList.remove('main-nav__list--hide');
        nav.classList.add('main-nav__list--show');
    } else {
        nav.classList.add('main-nav__list--hide');
        nav.classList.remove('main-nav__list--show');
        
        icon.classList.add('main-nav_icon--rotate');
    }

    if (icon.classList.contains('main-nav_chevron--rotate')) {
        icon.classList.remove('main-nav_chevron--rotate');
        icon.classList.add('main-nav_chevron--original-position');
    } else {
        icon.classList.add('main-nav_chevron--rotate');
        icon.classList.remove('main-nav_chevron--original-position');
    }
  }