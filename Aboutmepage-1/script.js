const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".hamburger i");
const links = document.querySelectorAll(".menu a");

hamburger.addEventListener("click", () => {
    
    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});