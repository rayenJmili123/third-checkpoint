var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
var myTextArea=document.getElementById("myText");
var selectSize=document.getElementById("size");
var selectPolice=document.getElementById("police");
function makeBold(){
    if(myTextArea.style.fontWeight=="bold"){
        myTextArea.style.fontWeight="normal";
    }
    else{
        myTextArea.style.fontWeight="bold";
    }
}
function makeItalic(){
    if(myTextArea.style.fontStyle=="italic"){
        myTextArea.style.fontStyle="normal";
    }
    else{
        myTextArea.style.fontStyle="italic";
    }
}
function makeUnderline(){
    if(myTextArea.style.textDecoration=="underline"){
        myTextArea.style.textDecoration="";
    }
    else{
        myTextArea.style.textDecoration="underline";
    }
}
function changeSize(){
    myTextArea.style.fontSize=selectSize.value;
}
function changePolice(){
    myTextArea.style.fontFamily=selectPolice.value;
}
