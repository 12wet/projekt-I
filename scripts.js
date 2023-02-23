function getGreeted(){
    document.querySelector(".mytext").innerHTML = "<p>Hello, nice to meet you, I'm Chutt GeaPeaTea!</p>";
    document.querySelector(".donkeyImg").src = "images/donkey_robot2.jpg";
}

function submit(){
    var value = document.querySelector(".greet_input").value;
    var input = String(value).toLowerCase();

    if(input.includes("hi") || input.includes("hello") || input.includes("hey")){
        document.querySelector(".mytext").innerHTML = "<p>HI!!! :)</p>";
    document.querySelector(".donkeyImg").src = "images/happy_donkey.jpg";
    }
    else{
        document.querySelector(".mytext").innerHTML = "<p>This does not look like a 'hi' to me!</p>";
        document.querySelector(".donkeyImg").src = "images/mad_donkey.jpg";
    }
}