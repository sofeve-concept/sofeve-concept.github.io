document.getElementById('motif-placeholder').addEventListener("change", myPlaceholder);
function myPlaceholder() {
  var LesLabels = document.querySelectorAll('#motif-placeholder label');
  var LesInputs = document.querySelectorAll('#motif-placeholder input');
  for (i = 0; i < LesInputs.length; i++) {
    if (LesInputs[i].value !="") {
      LesLabels[i].classList.add("show");
    } else {
      LesLabels[i].classList.remove("show");
    }   
  }
}