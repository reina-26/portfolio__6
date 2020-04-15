/*==================================================

** SP menu
==================================================*/

(function () {
  const body = document.querySelector('.menu-trigger');
  const btn = document.querySelector('.menu-trigger');

  function toggleClass() {
    body.classList.toggle('active');
  }

  btn.addEventListener('click', toggleClass);
})();
