var popup = document.querySelector(".model-window");
var close = document.querySelector(".close-btn");
var link = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");
var login = popup.querySelector("[name = name]");
var form = popup.querySelector("form");
            
link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("model-window-show");
    overlay.classList.add("overlay-show");
    login.focus();
});
                        
close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("model-window-show");
    overlay.classList.remove("overlay-show");
});
            
overlay.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("model-window-show");
    overlay.classList.remove("overlay-show");
});
            
form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("login.value");
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("model-window-show")) 
            {popup.classList.remove("model-window-show");
        }
    }
});

 window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) { 
        if (overlay.classList.contains("overlay-show")) 
            {overlay.classList.remove("overlay-show");
        }
    }
});