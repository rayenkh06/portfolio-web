document.getElementById("btn").addEventListener("click", actif);
function actif() {
  nom = document.getElementById("name").value;
  password = document.getElementById("password").value;
  if (nom == "") {
    document.getElementById("name").style.border = "2px  red solid";
  } else {
    document.getElementById("name").style.border =
      "2px  rgb(53, 222, 53) solid";
  }
  if (password == "" || password.length != 8) {
    document.getElementById("password").style.border = "2px red solid";
  } else {
    document.getElementById("password").style.border =
      "2px rgb(53, 222, 53) solid";
      window.location.href = "page2.html";
  }
  
}
