if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    } else {
    document.documentElement.classList.remove('dark')
}



(function imageCreator() {
  let laptop = document.querySelector('.imgWrapper')
  let imageElement = document.createElement("img")
  document.documentElement.classList.contains('dark') ? imageElement.src = '/src/images/screensaverBlack.png' : imageElement.src = '/src/images/screensaverWhite.png'
  laptop.appendChild(imageElement)
}())
