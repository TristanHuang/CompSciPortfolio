var miliSeconds;
var dropDown = document.getElementById("DropdownMenu1");
var myVar = setInterval(function(){ myTimer(); }, 1000);

var num1 = document.getElementById('Number1');
var num2 = document.getElementById('Number2');
var num1mili, num2mili;

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}
/*drop down menu*/
var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);



function doMath() {

    var num1v = parseInt(num1.value);
    var num2v = parseInt(num2.value);

  if (dropDown.value === "AM") {


    if (num1.value <= 12){
      num1mili = num1v * 3600000;
    }

    if (num2.value < 60){
      num2mili = num2v * 60000;
    }
    miliSeconds = num1mili + num2mili;
    }
  else {
  /*for PM, adding another 12 hours to the hour slot*/
    if (num1.value <= 12){
      num1mili = num1v * 3600000 + (12 * 3600000);
    }

    if (num2.value < 60){
      num2mili = num2v*60000;
    }
    miliSeconds = num1mili + num2mili;
  }
  console.log(miliSeconds);
}
setInterval(myTimer, 1000);
