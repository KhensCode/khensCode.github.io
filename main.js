const passwordBox = document.getElementById("password");
let length = 15;
const upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
const lowerCase  = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#@<?:|/*-+=)(<>&$%_;.,'";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
}
passwordBox.value = password;
}



function copyBtn () {
    passwordBox.select();
    document.execCommand("copy");
    passwordBox.classList.add("highlighted");
     setTimeout(() => passwordBox.classList.remove("highlighted"), 600);
}
passwordBox.addEventListener("input" , function(event){
event.preventDefault();
this.value = passwordBox.value;
});