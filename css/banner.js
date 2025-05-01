/*it JUST works.*/
var limiter = 33, img=document.getElementById("chImg");
function changer(){
    img.src=`img/header/p${Math.floor((Math.random()*limiter))+1}.png`;
}
img.addEventListener('click', changer());
    window.onload =changer();   