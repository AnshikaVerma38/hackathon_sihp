cards = document.querySelectorAll(".card");
cards.forEach(e => {
    e.addEventListener("click", ()=> {
        window.location.href ="./quiz/quiz.html"
    })
});
const inst_button = document.querySelector(".contactButton");
inst_button.addEventListener("click",()=> {
    window.location.href ="./enrollment/institute.html"})