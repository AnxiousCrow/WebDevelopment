var checklist = document.getElementById("checklist");

var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");
//console.log(items);

for(var i = 0; i < items.length; i++){
  items[i].addEventListener("click", editItem);
  inputs[i].addEventListener("blur", exitItem);
  inputs[i].addEventListener("keypress", exitItemKeypress);
}

function editItem(){
  this.className = "edit";

  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0, input.value.length);
}

function exitItem(){
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function exitItemKeypress(event){ // enter key === 13
  if(event.which === 13){
    exitItem.call(this);
    console.log(this);
  }
}
