
// selecting the buttons and sidebar

const toggleBtn = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function(){

    // console.log(sideBar.classList); --checking the classList
    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar');
    // }else{
    //     sideBar.classList.add('show-sidebar');
    // }

    // alternative method or easy way
    sideBar.classList.toggle('show-sidebar')
});

closeBtn.addEventListener("click", function(){
    sideBar.classList.remove('show-sidebar');
});