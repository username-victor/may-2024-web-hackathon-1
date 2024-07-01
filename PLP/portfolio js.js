//the first scroll animation
window.addEventListener('scroll', function() {
    const skillsElement = document.getElementById('SKILLS');
    const rect = skillsElement.getBoundingClientRect();

    
    if (rect.bottom >= 0 && rect.top <= window.innerHeight){
        skillsElement.style.opacity = 1;
        console.log("Element is in view!");
    } else {
        skillsElement.style.opacity = 0;
        console.log("Element is out of view!");
    }})

    
/* top button functionality

*/
const up = document.querySelector('.up').addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });


});


window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var halfWindowHeight = windowHeight / 2;

    if (scrollPosition > halfWindowHeight) {
        document.querySelector('.up').style.display = 'block';
    } else {
        document.querySelector('.up').style.display = 'none';
    }
});

/*
My projects 
*/
var clicked = 0
document.getElementById("projects").addEventListener("click",function(){
    if(clicked == 1){
    document.getElementById("project-folder").style.visibility = "visible";
    clicked = 0
}else if(clicked == 0){
    document.getElementById("project-folder").style.visibility = "hidden"
    clicked = 1
}
})


/*
SMOOTH SCROLL
*/
document.querySelectorAll('a[href^="#"]').forEach(button => {
    button.addEventListener('click', function (e) {
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' 
        });
    })})

    /*
    sidebar
    */
    var side = 0
    document.getElementById("nav").addEventListener("click",function(){
        
        if(side == 1){
            document.getElementById("nav-pannel").style.visibility = "visible";
            side = 0
        }else if(side == 0){
            document.getElementById("nav-pannel").style.visibility = "hidden"
            side = 1
        }
    })
    document.addEventListener("DOMContentLoaded", function() {
        const navPannel = document.getElementById("nav-pannel");
        const navLinks = document.querySelectorAll("#nav-list a");
    
        if (navPannel && navLinks) {
            navLinks.forEach(link => {
                link.addEventListener("click", function(event) {
                    
                    navPannel.style.visibility = "hidden";
                    side = 1; 
                });
            });
        }
    });
    
    /*
    closing the window
    */

    document.querySelector('.fa-window-close').addEventListener("click",function(){
        document.getElementById("nav-pannel").style.visibility = "hidden"
        side = 1

    })