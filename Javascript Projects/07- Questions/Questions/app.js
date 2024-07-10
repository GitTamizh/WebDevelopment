//using selectors inside the element
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
    // selecting all the buttons
    const button = question.querySelector(".question-btn");

    //  adding eventlister for open the show-text in the QA.
    button.addEventListener('click', function(){

        // adding foreach function for removing the answer (show-text) box if it opened.
        questions.forEach(function(qns){
            if(qns !== question){
                qns.classList.remove('show-text');
            }
            
        });

        question.classList.toggle('show-text');
    });
    
});



// traversing the dom

// const buttons = document.querySelectorAll(".question-btn");

// buttons.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const text = e.currentTarget.parentElement.parentElement;
//         text.classList.toggle('show-text');
//     });
// });
