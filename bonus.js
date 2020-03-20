// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.


// chiedo a due persone quanti anni anno
var userUno = parseInt(prompt("Utente uno, quanti anni hai?"));
var userDue = parseInt(prompt("Utente due, quanti anni hai?"));

var etaMaggiore;


console.log("user uno età " + userUno + "user due età " + userDue);
// confronto le età per vedere chi è il più grande

if (userUno > userDue) {
  etaMaggiore = "Utente uno sei il più grande" + userUno;
} else if (userDue > userUno) {
  etaMaggiore = "Utente due sei il più grande" + userDue;
} else {
  etaMaggiore = "Utenti! Avete " + userUno + " anni, siete coetanei.";
}


console.log(etaMaggiore);

// dò l'output in html

document.getElementById('out-put').innerHTML = etaMaggiore;
