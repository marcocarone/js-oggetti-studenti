$(document).ready(function() {
  // Creo un oggetto che descrive uno studente con le seguenti proprietà: nome, cognome e età.

  var studente = {
    "nome": " ",
    "cognome": " ",
    "eta": 0
  }

  // Stampo a schermo attraverso il for tutte le proprietà.
  for (var proprieta in studente) {
    console.log(proprieta + " " + studente[proprieta]);
  }

  // Creo un array di oggetti di studenti.

  var studenti = [{
      "nome": "Nicola",
      "cognome": "Formigoni",
      "eta": 29
    },
    {
      "nome": "Marco",
      "cognome": "Carone",
      "eta": 35
    },
    {
      "nome": "Elsa",
      "cognome": "Marra",
      "eta": 27
    },
    {
      "nome": "Roberta",
      "cognome": "Rotoli",
      "eta": 33
    }

  ]

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
  var nuovoStudente = studente;
  nuovoStudente.nome = prompt("inserisci il tuo nome");
  nuovoStudente.cognome = prompt("inserisci il tuo cognome");
  nuovoStudente.eta = parseInt(prompt("inserisci la tua età"));
  studenti.push(nuovoStudente);
  console.log(studenti);

  // Ciclo su tutti gli studenti e stampo per ognuno nome e cognome
  for (var i = 0; i < studenti.length; i++) {
    var studenteLista = studenti[i];
    console.log(studenteLista.nome + " " + studenteLista.cognome);

    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var html = template(studenteLista);
    $("#lista-studenti").append(html);
  }
});
