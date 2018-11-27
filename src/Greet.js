var userName = prompt("What's your name?") /* || 'Default User' */; // returns string
var title = document.querySelector('h1'); // returns DOM node (object)

var greet = function greet(){
    if(!userName.trim()){
        userName = prompt("But really. What's your name?");
        greet();
    }
    else{
        title.textContent += `, ${userName}`;
    }
};

export default greet;