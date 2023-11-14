// pc or touch
const isMobile = {
    Android: function () {
        return navigator.userAgent.match (/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match (/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match (/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match (/OperaMini/i);
    },
    Windows: function () {
        return navigator.userAgent.match (/IEMobile/i);
    },
    any: function () {
        return(
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    // footer menu
    const menuBtns =  document.querySelectorAll('.footer__menu-title')
  
    menuBtns.forEach.call(menuBtns, function(menuBtns) {
        menuBtns.addEventListener('click', function() {
  
        const menuList = menuBtns.parentElement.querySelector('.footer__submenu-list')
  
        menuBtns.classList.toggle('_active')
        menuList.classList.toggle('_active')
  
        if (menuList.classList.contains('_visible')) {
            menuList.style.maxHeight = menuList.scrollHeight + 'px'
          } else {
            menuList.style.maxHeight = null
          }
      })
    })

} else {
    document.body.classList.add('_pc');
}

// burger menu
const burger = document.querySelector('.menu__burger');
if(burger) {
    const menu = document.querySelector('.menu__list');
    burger.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
    });
}