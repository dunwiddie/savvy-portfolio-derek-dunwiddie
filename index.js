var userName = prompt("What's your name?");

var greet = function greet(){
    if(!userName.trim()){
        userName = prompt("But really. What's your name?");
        greet();
    }
    else{
        alert('Hello, ' + userName + '!');
    }
};

greet();