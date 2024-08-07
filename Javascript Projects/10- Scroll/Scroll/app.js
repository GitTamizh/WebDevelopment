// Refrences

// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// ScrollY is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string 
//offsetTop - A Number, representing the top position of the element, in pixels

// code Startting from here

// ********** set date ************

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;

    }
    else{
        linksContainer.style.height = 0;
    }
});
// ********** fixed navbar ************

const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener("scroll", function(){
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;

    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
    }
    else{
        navBar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 600){
        topLink.classList.add('show-link')
    }
    else{
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link){

        link.addEventListener('click', function (e) {
            // prevent default
            e.preventDefault();

            // navigate to specific place
            const id = e.currentTarget.getAttribute("href").slice(1);
            const element = document.getElementById(id);

              // calculate the height
            const navHeight = navBar.getBoundingClientRect().height;
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const fixedNav = navBar.classList.contains('fixed-nav');

            let position = element.offsetTop - navHeight;

            if(!fixedNav){
                position = position - navHeight;
            }

            if(navHeight > 82 ){
                position = position + containerHeight;
            }

            window.scrollTo({
                left : 0,
                top : position,
            });

            //  for smaller screen the nav height will remove once we click the required place.
            linksContainer.style.height = 0;
        });
});
