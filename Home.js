
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var info = document.getElementById("text");
    var image = document.getElementById("image");
    var width = 0;
    var id = setInterval(frame, 100)
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        info.innerHTML = "Upload Complete";
        image.style.display = "block";
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
