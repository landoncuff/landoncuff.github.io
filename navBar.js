window.onscroll = function() {
    myFunction();
}

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}
 var path = "./img/"

 document.getElementById("lilPic").addEventListener("click", function(){
     bigP = document.getElementById("bigPic");

     newImg = path + bigP;

     newImg.style.display = "block";

     return newImg;
 })

 if(newImg == true){
     newImg.style.display = "block";
 }