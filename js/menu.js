document.addEventListener('DOMContentLoaded', () => {
  const btnHamburger = document.getElementById('btn-hamburger');
  const btnClose = document.getElementById('btn-close');
  const listMenu = document.querySelector('.list-menu');
  const bgOverlay = document.getElementById('bg-overlay');
  const headerBtnRequest = document.querySelector('header > .btn-request');

  if (window.innerWidth >= 922) {
    btnHamburger.classList.add('hide');
    btnClose.classList.add('hide');
    listMenu.classList.remove('hide');
    bgOverlay.classList.add('hide');
    headerBtnRequest.classList.remove('hide');
  } else {
    btnHamburger.classList.remove('hide');
    btnClose.classList.add('hide');
    listMenu.classList.add('hide');
    bgOverlay.classList.add('hide');
    headerBtnRequest.classList.add('hide');
  }

  btnHamburger.addEventListener('click', (e) => {
    e.preventDefault();

    btnHamburger.classList.add('hide');
    btnClose.classList.remove('hide');
    listMenu.classList.remove('hide');
    bgOverlay.classList.remove('hide');
  });

  btnClose.addEventListener('click', (e) => {
    e.preventDefault();

    btnHamburger.classList.remove('hide');
    btnClose.classList.add('hide');
    listMenu.classList.add('hide');
    bgOverlay.classList.add('hide');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 922) {
      btnHamburger.classList.add('hide');
      btnClose.classList.add('hide');
      listMenu.classList.remove('hide');
      bgOverlay.classList.add('hide');
      headerBtnRequest.classList.remove('hide');
    } else {
      btnHamburger.classList.remove('hide');
      btnClose.classList.add('hide');
      listMenu.classList.add('hide');
      bgOverlay.classList.add('hide');
      headerBtnRequest.classList.add('hide');
    }
  });
});