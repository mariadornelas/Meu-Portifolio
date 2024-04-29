const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrollTop')
        scroll.classList.toggle('active', window.scrollY > 450)
});

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function scrollToElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});