document.querySelector('.hamb').addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    if (e.target.classList.contains('closed')) {
        e.target.classList.remove('closed');
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
        e.target.classList.add('closed');
    }
});