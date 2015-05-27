var hasNum1 = false;
var hasOpp = false;
var hasNum2 = false;


var keys = document.querySelectorAll("div.button");
for(var i = 0; i<keys.length; i++){
    keys[i].addEventListener("click", mathify);
}

var display = document.getElementById("display");
var num1Val = 0;
var num2Val = 0;
var oppVal;
var numClick;
console.log(keys);


function mathify(){
    
/* for determining if value is compatible with the position it is called in */
if(this.innerHTML === "Clear"){
        display.innerHTML = " ";
        hasNum1 = false;
        hasOpp = false;
        hasNum2 = false;
}
else if(!hasOpp &&!isNaN(this.innerHTML)){
    /*for first number slot*/
    display.insertAdjacentHTML('beforeend', this.innerHTML);
    num1Val = display.innerHTML;
    hasNum1 = true;
}
else if(hasNum1 && isNaN(this.innerHTML) && !hasNum2){
    /*for the opperator slot*/
    display.innerHTML = this.innerHTML;
    oppVal = display.innerHTML;
    hasOpp = true;
}
else if(hasOpp&&!isNaN(this.innerHTML)){
    /*for second number slot*/
    if (hasOpp === isNaN){
      display.innerHTML = " "
}
    
    display.insertAdjacentHTML('beforeend', this.innerHTML);
    num2Val = display.innerHTML;
    
    hasNum2 = true;
}
else if(hasNum2 && this.innerHTML === "="){
    num1Val + oppVal + numVal2;
  
}
else if(hasNum1&&hasOpp&&hasNum2) {
  parseInt(numVal1);
  parseInt(oppVal);
  parseInt(numVal2);
}

    
    
    
    /* numClick = parseInt(this.innerHTML)
    
	if(this.classList.contains("opp")){
		var btnVal = output.innerHTML;
		output.insertAdjacentHTML('beforeend', this.innerHTML);
		hasOpp = true;
	}
	else if(this.innerHTML === "="){

	}
	else if(this.innerHTML === "Clear"){
        output.innerHTML = " "
	}
	else{
	output.insertAdjacentHTML('beforeend', this.innerHTML);
	var btnVal = output.innerHTML;

    } */
}

    
    


