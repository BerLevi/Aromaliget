//hide and show the navbar on scroll
/*var previousScrollPosition = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPostion = window.pageYOffset;
    if(previousScrollPosition > currentScrollPostion){
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100px";
    }
    previousScrollPosition = currentScrollPostion;
}

//lift up the about-content section so that it laps over the image
var previousScrollPosition = window.pageYOffset;
window.onscroll = function (){
    var currentScrollPostion = window.pageYOffset;
    if(previousScrollPosition > currentScrollPostion){
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-100px";
    }
    previousScrollPosition = currentScrollPostion;
}*/

const navigationToggle = document.querySelector(".toggle-navigation")
const navigationItems = document.querySelectorAll(".navigation-element")

navigationToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("mobile-navigation")
})

navigationItems.forEach(link=>(
    link.addEventListener("click", ()=>
    document.body.classList.remove("mobile-navigation"))
))