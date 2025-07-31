document.addEventListener('DOMContentLoaded', () => {
    const conocerMasBtn = document.querySelector('.btn-conocer-mas');
    if (conocerMasBtn) {
        conocerMasBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});