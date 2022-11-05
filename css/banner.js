/*for puter*/
var limiter = 24, img=document.getElementById("chImg");
function changer(){
    img.src=`img/header/p${Math.floor((Math.random()*limiter))+1}.png`;
}
img.addEventListener('click', changer());
    window.onload =changer();
/*for phone*/
var limiter = 24, img=document.getElementById("phImg");
function changer(){
    img.src=`img/header/p${Math.floor((Math.random()*limiter))+1}.png`;
}
img.addEventListener('click', changer());
    window.onload =changer();