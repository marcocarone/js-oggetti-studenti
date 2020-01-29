$(document).ready(function() {

  $(document).on('click', '.message_send', function() {
    var testoPrompt = $(".input_message").val();

      var source = $("#entry-template").html();
      var template = Handlebars.compile(source);

      var contenuto = {
        "testo" : testoPrompt,
        "template" : "message__me",
      };

      var html = template(contenuto);
      $("#lista-studenti").append(html);
      $('.input_message').val("");


      //FUNZIONE MESSAGGIO DI RISPOSTA BOT
      setTimeout(function() {

        var frasiBot = [
          "So che mi piaci,perché non penso alle conseguenze.",
          "Ecco perché mi piaci così tanto.🤗 ",
          "Da quando ti ho incontrato non so più chi sono.",
          "Quale parte del “Mi fai impazzire” non ti è chiara",
          "Meglio in ritardo che struccata 🤗 ",
          "Non sono Google...non cercarmi solo quando ti servo",
          "Le sensazioni sono già mezze verità",
          "Sono a casa, tra poco ti chiamo 💋",
          "Non saprei",
          "Non dirmi di no",
        ];
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        var contenuto = {
          "testo" : frasiBot[numeroRandom(0, 9)],
          "template" : "message__user",
        };

        var html = template(contenuto);
        $("#lista-studenti").append(html);

      }, 1200);

  });
});

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
