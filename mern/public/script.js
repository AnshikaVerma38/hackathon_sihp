cards = document.querySelectorAll(".card");
cards.forEach(e => {
    e.addEventListener("click", ()=> {
        window.location.href ="./quiz/quiz.html"
    })
});