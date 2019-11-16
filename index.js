const imageArray = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg',
    './images/8.jpg',
    './images/9.jpg'];

    let tmp = document.getElementById("changes");
    let tmp2 =document.getElementsByTagName("img");
   
     function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}  
      tmp2[0].addEventListener("click",()=>{
        tmp2[0].src = imageArray[randomInteger(1,8)];
      },false);

    tmp.addEventListener("click",()=>{
 
    let img = document.getElementsByTagName("img");
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let border = document.getElementById("border").value;
    let altText = document.getElementById("altText").value;
    img[0].width = width;
    img[0].height = height;
    img[0].border = border;
    img[0].alt = altText;

    document.getElementById("width").value = undefined;
    document.getElementById("height").value = undefined;
     document.getElementById("border").value = undefined;
    document.getElementById("altText").value = undefined;
},false);
