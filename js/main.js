const ellSiteThemeToggler = document.querySelector(".site-header-theme-toggler")

ellSiteThemeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})