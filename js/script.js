function showHideNav() {
    var nav = document.getElementById("nav");


    console.log(nav.classList);

    if (nav.classList.contains('main-nav__list--hide')) {
        nav.classList.remove('main-nav__list--hide');
        nav.classList.add('main-nav__list--show');
    } else {
        nav.classList.add('main-nav__list--hide');
        nav.classList.remove('main-nav__list--show');
    }
  }