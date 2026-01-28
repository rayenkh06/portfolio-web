function verif() {
    user = document.getElementsByName("username")[0].value;
    pass = document.getElementsByName("password")[0].value;
    char = ".,;:!?\'\"…()[]{}+-×÷=<>\u2264\u2265\u2260%@#$€£¥&_~^`|\\*/°§±µ©®™ ";


    if (user.length == 8 && !isNaN(user) ) {
        document.getElementsByName("username")[0].style.borderColor = "green";
        document.getElementById("s1").innerHTML = "";



     
    } else {
        document.getElementsByName("username")[0].style.borderColor = "red";
        document.getElementById("s1").innerHTML = "le cin doit contenir 8 chiffres";
        
    }
 for (let i = 0; i < pass.length; i++) {

    if (
        char.includes(pass[i]) || 
        (pass[i] >= 'A' && pass[i] <= 'Z' || pass[i] >= 'a' && pass[i] <= 'z')
    ) {
        document.getElementsByName("password")[0].style.borderColor = "green";
        document.getElementById("s2").innerHTML = "";

        break;
    } else {
        document.getElementsByName("password")[0].style.borderColor = "red";
        document.getElementById("s2").innerHTML = "le mot de passe doit contenir au moins une lettre majuscule ou un caractère spécial";

    }
}

}