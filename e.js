const btns = document.querySelectorAll('.card-button button');
const sections = document.querySelectorAll('.card-section');
const card = document.querySelector('.card-main');

card.addEventListener("click", function(e) {
    const section = e.target.dataset.section;

    if(section) {
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        sections.forEach(function(article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(section);
        element.classList.add("active");
    }
})