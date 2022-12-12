const elSiteHeaderThemeToggler = document.querySelector('.site-header-theme-toggler');


elSiteHeaderThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode')
})