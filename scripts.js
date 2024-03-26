
window.addEventListener('scroll', () => {
    const cabecalho = document.getElementById('cabeca');
    cabecalho.classList.toggle('small', window.scrollY > 0);
});

