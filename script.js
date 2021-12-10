const hamburger = document.getElementById('hamburger-menu');
const nav = document.getElementById('hamburger-nav');
const unitConverterMenu = document.getElementById('dropdown-unit');
const encDecMenu = document.getElementById('dropdown-encdec')

hamburger.addEventListener('click', () => {
    if (hamburger.classList[1] === 'clicked') {
        hamburger.classList.remove('clicked');
        nav.classList.remove('clicked');
    } else {
        hamburger.classList.add('clicked');
        nav.classList.add('clicked');
    }
})

unitConverterMenu.addEventListener('mouseover', () => {
    unitConverterMenu.classList.add('unit-converters');

})

encDecMenu.addEventListener('mouseover', () => {
    encDecMenu.classList.add('unit-converters-eh');
})

unitConverterMenu.addEventListener('mouseout', () => {
    unitConverterMenu.classList.remove('unit-converters');

})
encDecMenu.addEventListener('mouseout', () => {
    encDecMenu.classList.remove('unit-converters-eh');
})