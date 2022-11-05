var displayImage = document.getElementById("displayImage");
var parentImg = document.getElementById("parentImg");
var allImages = parentImg.getElementsByTagName("IMG");
var index = 0;

function inItslider() {
    displayImage.src = allImages[index].src;
}
inItslider();

function next() {
  if (index == allImages.length - 1) {
    index = 0;
    displayImage.src = allImages[index].src;
    index++;
  } else {
    index++;
    inItslider();
  }
}
function previous() {
  if (index == 0) {
    index = allImages.length - 1;
  } else {
    index--;
    inItslider();
  }
}
