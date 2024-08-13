function locomotiveAnimation(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
}

function hoverAnimation(){
    let hoverContainer = document.querySelector(".hover-container");
    let fixed = document.querySelector(".fixed");
    let elems = document.querySelectorAll(".elem");
    
    hoverContainer.addEventListener("mouseenter", function(){
        fixed.style.display = "block";
    })
    
    hoverContainer.addEventListener("mouseleave", function(){
        fixed.style.display = "none";
    })
    
    elems.forEach(function(e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}

function loaderAnimation(){
    var loader = document.querySelector("#loader");
    
    setTimeout(function(){
        loader.style.top = "-100%"
    },4200)
}

function hamburgerAnimation(){
    let menu = document.querySelector("nav i");
    let half = document.querySelector("nav .half");
    
    let flag = 0;
    menu.addEventListener("click", function(){
        if(flag == 0){
            half.style.left = "0%"
            flag = 1;
        }
        else{
            half.style.left = "-110%"
            flag = 0;
        }
    })
}


loaderAnimation();
hoverAnimation();
loaderAnimation();
hamburgerAnimation();