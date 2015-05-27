//Saving all of the elements in the html to variables in javascript
var nameDisplay = document.getElementById("nameDisplay");
var ageDisplay = document.getElementById("ageDisplay");
var numberDisplay = document.getElementById("numberDisplay");
var button = document.getElementById("button");
var searchInput = document.getElementById("searchBar");
var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var numberInput = document.getElementById("number");
//creates contact when button is clicked
button.addEventListener("click", function(evt){
    
        createContact();
});
searchInput.addEventListener("keydown", function(evt){
    if(evt.keyCode === 13){
       searchContacts();
       }
    
});
//creates empty array to save all contacts in
var contacts = [];
//custom object constructor that makes an object called Contact
function Contact (name, age, number) {
    this.name = name;
    this.age = age;
    this.number = number;
    /*this.initialize = function(){
        this.elem = document.createElement("div");
        this.elem.innerHTML = "hello";
        this.elem.style.color = "red";
        document.getElementById("test").appendChild(this.elem);
    }*/
    
}
//this function makes a loop that checks through the array to check if the value in the searchBar matches any in the array
function searchContact(){
    var searchedIndex;
    for (i=0; i < contacts.length; i++) {
        if(contacts[i].name === searchBar.value){
            searchedIndex = i;
        }
    }
//the next 3 lines print the values of the name, age, and phone number into 3 empty divs
    nameDisplay.innerHTML = contacts[searchedIndex].name;
    ageDisplay.innerHTML = contacts[searchedIndex].age;
    numberDisplay.innerHTML = contacts[searchedIndex].number;
}
//this function takes the values of the inputs and pushes them into an array so we can call them back
function createContact(){
    var tempName = nameInput.value;
    var tempAge = ageInput.value;
    var tempNumber =  numberInput.value;
    contacts.push(new Contact(tempName, tempAge, tempNumber));
    numberDisplay.innerHTML = contacts[0].age;
}

