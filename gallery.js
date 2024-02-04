
document.addEventListener("DOMContentLoaded", function() {
    var my_images = document.querySelectorAll("img");
    for (let i = 0; i < my_images.length; i++) {
        my_images[i].setAttribute("onfocus", "upDate(this)");
        my_images[i].setAttribute("onblur", "unDo()");
        my_images[i].setAttribute("tabindex", i + 1);
    }

    window.addEventListener("load", addTabFocus);
});
function upDate(previewPic){
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo(){

    document.getElementById('image').innerHTML='Hover over an image';
    document.getElementById('image').style.background="url('')";
    document.getElementById('image').style.backgroundColor="#8e68ff";
 }
 
function addTabFocus() {
    console.log("Document loaded! Adding tabindex attributes for keyboard access.");

    var my_images = document.querySelectorAll("img");

    for (let i = 0; i < my_images.length; i++) {
        my_images[i].setAttribute("tabindex", i + 1);
    }
}