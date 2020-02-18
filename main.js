var cursorsrc = chrome.extension.getURL('push.cur')

// var cursor1 = 'url('+chrome.extension.getURL('icon32.png')+')';
// console.log(cursor1)
$('body').style.cursor = cursor1;


var mousePosX;
var mousePosY;
var width = $( window ).width();
// YOUR CODE GOES HERE and can use the $ variable
var allElements = $("body *");
var flag = [];

$(window).ready(function(){
  Array.from(allElements).forEach(function(e){
    $(e).attr("id",[allElements.index(e)]);
    flag.push(1);
  });
});

$(window).click(function (e) {
  mousePosX = e.pageX;
  mousePosY = e.pageY;
  console.log(mousePosX, mousePosY);
  
  var nearest = 100000000;
  var id = 0;
  var chosen;
  
  Array.from(allElements).forEach(function(e){
  	if(e.offsetTop-mousePosY < 0 && mousePosY-e.offsetTop < e.offsetHeight ){
      var distanceY =  mousePosY - e.offsetTop;
      id = $(e).attr("id");
      if(distanceY < nearest && flag[id] != 0){
        nearest = distanceY;
        chosen = e;
       // chosen.style.color = "blue";
      };
    }
  });
  
  flag[id] = 0;
 // console.log(element);
  moveChosen(chosen);
 // chosen.style.backgroundColor = 'blue';
  //element.style.color = "blue";
});

function moveChosen(elem){
    if(mousePosX < width/2){
       elem.style.transform = "translateX(2000px)";
       elem.style.opacity = "0";
       elem.style.transition = "ease-in-out 5s"

      }else{
        elem.style.transform = "translateX(-2000px)";
        elem.style.opacity = "0";
        elem.style.transition = "ease-in-out 5s"
      };

 };