//using selectors inside the element
// traversing the dom

const buttons = document.querySelectorAll(".question-btn");

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const text = e.currentTarget.parentElement.parentElement;
        text.classList.toggle('show-text');
    });
});