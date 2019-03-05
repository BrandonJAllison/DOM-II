
const navBar = document.querySelector(".main-navigation");
window.addEventListener("scroll", function() {

if (window.pageYOffset > 0) {
    navBar.style.opacity = ".8";
}
});

const imgOpacity = document.querySelectorAll('.img-content');

const newImgContent = Array.from(imgOpacity);

for(let i = 0; i< newImgContent.length; i++){
newImgContent[i].addEventListener("mouseover", function(e) {
    newImgContent[i].style.opacity = ".2";
    e.stopPropagation();
});
}

for(let i = 0; i< newImgContent.length; i++){
    newImgContent[i].addEventListener("mouseleave", function(e) {
        newImgContent[i].style.opacity = "1";
        e.stopPropagation();
});
}


const navigator = document.querySelectorAll('.nav-link');
const navLinks = Array.from(navigator);
console.log(navLinks);

for(let i = 0; i< navLinks.length; i++){
navLinks[i].addEventListener("mouseover", function(e) {
    navLinks[i].style.scale = "2";
    e.stopPropagation();
});
}
for(let i = 0; i< navLinks.length; i++){
    navLinks[i].addEventListener("mouseleave", function() {
        navLinks[i].style.scale = "1";
    });
    }

const headings = document.querySelectorAll ('h2, h4');
const newHeadings = Array.from (headings);

for(let i = 0; i< newHeadings.length; i++){
newHeadings[i].addEventListener("mouseover", function() {
    newHeadings[i].style.textDecoration = "underline";
});
}
for(let i = 0; i< newHeadings.length; i++){
    newHeadings[i].addEventListener("mouseleave", function() {
        newHeadings[i].style.textDecoration = "none";
    });
    }

