
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var a = document.getElementById("a");
    var elem = document.getElementById("myBar");
    var info = document.getElementById("text");
    var image = document.getElementById("b");
    var width = 0;
    image.style.display = "none";
    var id = setInterval(frame, 100)
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        info.innerHTML = "Upload Complete";
        image.style.display = "flex";
        a.style.display = "none";

      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}
