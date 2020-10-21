const darkModeBtn = document.querySelector('.dark-mode-switch input')

darkModeBtn.addEventListener('click', () => {
    document.body.toggleAttribute('darkmode')
})