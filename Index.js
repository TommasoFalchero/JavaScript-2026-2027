function stampaDati() {

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    let indirizzo = document.getElementById("indirizzo").value;
    let citta = document.getElementById("citta").value;
    let provincia = document.getElementById("prov").value;
    let commenti = document.getElementById("commenti").value;

    if (eta < 0) {
        alert("Età non valida!");
        return;
    }

    let sesso = "";

    for (let i = 0; i < document.getElementsByName("sesso").length; i++) {

        if (document.getElementsByName("sesso")[i].checked) {
            sesso = document.getElementsByName("sesso")[i].value;
        }

    }

    if (sesso == "") {
        sesso = "Non selezionato";
    }

    let sport = "";

    for (let i = 0; i < document.getElementsByName("sport").length; i++) {

        if (document.getElementsByName("sport")[i].checked) {
            sport += document.getElementsByName("sport")[i].value + " ";
        }

    }

    if (sport == "") {
        sport = "Nessuno";
    }

    let risultato =
        "<tr><td>Nome</td><td>" + nome + "</td></tr>" +
        "<tr><td>Cognome</td><td>" + cognome + "</td></tr>" +
        "<tr><td>Età</td><td>" + eta + "</td></tr>" +
        "<tr><td>Sesso</td><td>" + sesso + "</td></tr>" +
        "<tr><td>Indirizzo</td><td>" + indirizzo + "</td></tr>" +
        "<tr><td>Città</td><td>" + citta + "</td></tr>" +
        "<tr><td>Provincia</td><td>" + provincia + "</td></tr>" +
        "<tr><td>Sport</td><td>" + sport + "</td></tr>" +
        "<tr><td>Commenti</td><td>" + commenti + "</td></tr>";

    document.getElementById("risultato").innerHTML = risultato;

    document.getElementById("tabella").style.display = "table";

}