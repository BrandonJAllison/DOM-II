

//load an alert
window.addEventListener("load", function(e) {
    alert("All aboard the fun bus!");
    setTimeout(4000);
  });

//kyboard event
  window.addEventListener("keydown", e => {
    if (event.key == "v") {
      document.body.style.background = "silver";
    }
  });
  window.addEventListener("keyup", e => {
    if (event.key == "v") {
      document.body.style.background = "";
    }
  });
  
//touchevent for touch screen

  function update(event) {
    for (let dot; dot = document.querySelector("dot");) {
      dot.remove();
    }
    for (let i = 0; i < event.touches.length; i++) {
      let {pageX, pageY} = event.touches[i];
      let dot = document.createElement("dot");
      dot.style.left = (pageX - 50) + "px";
      dot.style.top = (pageY - 50) + "px";
      document.body.appendChild(dot);
    }
  }
  window.addEventListener("touchstart", update);
  window.addEventListener("touchmove", update);
  window.addEventListener("touchend", update);


//greensock animation attempt
const logoImg = document.querySelector('.logo-heading');
logoImg.addEventListener('mousedown', function(e){

TweenMax.to(".logo-heading", 2, {x: 300, ease: Bounce.easeOut});
     
     
});

//change header image on mouseover 
const headImg = document.querySelector("img");
headImg.addEventListener('mouseover', function(e){
headImg.style.borderRadius = "50px";
e.stopPropagation();

})

headImg.addEventListener('mouseleave', function(e){
    headImg.style.borderRadius = "0";
    e.stopPropagation();
    
    })

    headImg.addEventListener('dblclick', function(e){
        headImg.style.display = "none";
        e.stopPropagation();
        
        })


//opacity for mouseover images
const imgOpacity = document.querySelectorAll('.img-content');

const newImgContent = Array.from(imgOpacity);


newImgContent.forEach((currentValue) => {
currentValue.addEventListener('mouseover', function(e){
    currentValue.style.opacity = ".2";
    e.stopPropagation();
})
});

newImgContent.forEach((currentValue) => {
currentValue.addEventListener('mouseleave', function(e){
    currentValue.style.opacity = "1";
    e.stopPropagation();
})
});

//nav link color change on mouseover
const navigator = document.querySelectorAll('a');
const navLinks = Array.from(navigator);
console.log(navLinks);

navLinks.forEach((currentValue) => {
currentValue.addEventListener('mouseover', function(e){
    currentValue.style.color = "gray";
    e.stopPropagation();
    e.preventDefault();
    
})
});

navLinks.forEach((currentValue) => {
currentValue.addEventListener('mouseleave', function(e){
    currentValue.style.color = "black";
    e.stopPropagation();
})
});


//color and size change on click
navLinks.forEach((currentValue) => {
currentValue.addEventListener('mousedown', function(e){
    currentValue.style.color = "#ffd800";
    currentValue.style.fontSize = "2rem";
    e.preventDefault();
})
})

navLinks.forEach((currentValue) => {
currentValue.addEventListener('mouseup', function(e){
    currentValue.style.color = "black";
    currentValue.style.fontSize = "16px";
    e.preventDefault();
})
})




//text underline for h2 and h4 on mouseover
const headings = document.querySelectorAll ('h2, h4');
const newHeadings = Array.from (headings);

newHeadings.forEach((currentValue) => {
currentValue.addEventListener('mouseover', function(event){
    currentValue.style.textDecoration = "underline"
    event.preventDefault();
})
})

newHeadings.forEach((currentValue) => {
currentValue.addEventListener('mouseleave', function(event){
    currentValue.style.textDecoration = "none"
    event.preventDefault();
})
})


//sound for mouse down 
const button = document.querySelectorAll('.btn');
const arrBtn = Array.from(button);



arrBtn.forEach((currentValue) => {
let sound = document.querySelector('.audio');
sound.setAttribute('src', "img/flock-of-seagulls_daniel-simion.wav");
currentValue.addEventListener('mousedown', function(){
    sound.play();
})

});

const sound2 = document.querySelector('.audio');
sound2.setAttribute('src', "img/yodel.mp3");
const mtnBtn = arrBtn[1];
mtnBtn.addEventListener('mousedown', function(){
sound2.play(); 
//need to append

})


arrBtn.forEach((currentValue) => {
let sound = document.querySelector('.audio');
sound.setAttribute('src', "img/flock-of-seagulls_daniel-simion.wav");
currentValue.addEventListener('mouseup', function(){
sound.pause();
sound.currentTime = 0;
})
});



//change footer color on wheel
const footer = document.querySelector ('.footer p');
footer.addEventListener('wheel', function(){
console.log ('its working');
    
    footer.style.backgroundColor = 'tan';
    

});


