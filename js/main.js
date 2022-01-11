

// Selected Item //
let items = document.querySelectorAll('.item');

items.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('item-select');
    })
});


// Button Go Top //
let goTop = document.querySelector('.go-top');
let home = document.querySelector('.home');

window.addEventListener('scroll', () => showHeade(goTop));
goTop.addEventListener('click', () => home.scrollIntoView())

function showHeade (el) {
    if (window.pageYOffset >= window.innerHeight + 150) {
        el.classList.add('show');
    } else {
        el.classList.remove('show');
    }
}