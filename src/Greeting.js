var userName = prompt("What's your name?");

export default function greet(){
    var title = document.querySelector('h1');

    if(!userName.trim()){
        userName = prompt("But really. What's your name?");
        greet();
    }
    else{
        title.innerHTML += `, ${userName}`;
    }
}