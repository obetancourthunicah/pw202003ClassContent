/*
onDrag   drag
onDragOver  dragover
onDrop  drop
*/

document.addEventListener("DOMContentLoaded", function(){
  var vcards = document.getElementsByClassName("vcard");
  var ccards = document.getElementsByClassName("acard");
  for(var index= 0; index < ccards.length; index ++){
    ccards[index].addEventListener("dragstart", function(e){
      e.dataTransfer.setData("text", e.target.dataset.value);
    });
  }
  for (var index = 0; index < vcards.length; index++) {
    vcards[index].addEventListener("dragenter", function (e) {
      if (/vcard/.test(e.toElement.className)){
        e.toElement.classList.toggle("over");
      }
    },false);
    vcards[index].addEventListener("dragleave", function (e) {
      if (/vcard/.test(e.toElement.className)) {
        e.toElement.classList.toggle("over");
      }
    }, false);
    vcards[index].addEventListener("dragover", function (e) {
      e.preventDefault();
    },false);
    vcards[index].addEventListener("drop", function (e) {
      e.preventDefault();
      if (/vcard/.test(e.toElement.className)) {
        var answer = e.dataTransfer.getData("text");
        var question = e.target.dataset.answer;
        if (answer == question) {
          e.target.classList.toggle("correct");
        }else{
          e.target.classList.toggle("incorrect");
          setTimeout(function () { e.target.classList.toggle("incorrect");}, 1000);
          e.target.classList.toggle("over");
        }
      }
    }, false);
  }
});
