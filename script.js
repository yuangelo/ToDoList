function aggiungi() {
    let testo = document.getElementById("attivita").value;
    if (testo != "") {
        document.getElementById("lista").innerHTML += "<li>" + testo + "</li>";
        document.getElementById("attivita").value = "";
    }
}
