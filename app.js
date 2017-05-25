function changeColorOnClick(idName){
   var originalElementColor = document.getElementById('selectedColorName').style.backgroundColor;
   document.getElementById(idName).style.backgroundColor = originalElementColor;
 }

 function getBackgroundColor(idName){
   var element = document.getElementById(idName);
   var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
   document.getElementById('selectedColorName').style.backgroundColor = style;
 }