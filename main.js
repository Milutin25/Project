const btn = document.querySelector('.btn');

btn.addEventlistener('click', () => {
    btn.style.backgroundColor = "#ffac09";
    btn.style.transition= '5s ease';
});
