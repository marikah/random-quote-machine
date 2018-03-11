quotes = [
  {text: "Don't water your weeds.", author: "- Harvey McKay"},
  {text: "Continuous improvement is better than delayed perfection.", author: "- Mark Twain"},
  {text: "We cannot become what we want to be by remaining what we are.", author: "- Max DePree"},
  {text: "If you define the problem correctly, you almost have the solution.", author: "- Steve Jobs"},
  {text: "Perfection is not attainable. But if we chase perfection, we catch excellence.", author: "- Vince Lombardi"},
  {text: "Great things are done by a series of small things brought together.", author: "- Vincent Van Gough"},
  {text: "However beautiful the strategy, you should occasionally look at the results.", author: "- Winston Churchill"},
  {text: "The most dangerous kind of waste is the waste we do not recognize.", author: "- Shigeo Shingo"},
  {text: "There is nothing so useless as doing efficiently that which should not be done at all.", author: "- Peter F. Drucker"},
  {text: "Amateurs work until they get it right. Professionals work until they can't get it wrong.", author: "- Author Unknown"},
  {text: "There are so many men who can figure costs, and so few who can measure values.", author: "- Author Unknown"},
  {text: "A corporation is a living organism; it has to continue to shed its skin. Methods have to change. Focus has to change. Values have to change. The sum total of those changes is transformation.", author: "- Andrew Grove"},
  {text: "Your lean process should be a lean process.", author: "- Author Unknown"},
  {text: "If you need a new process and don't install it, you pay for it without getting it.", author: "- Ken Stork"},
  {text: "Everything can be improved.", author: "- Clarence W. Barron"},
  {text: "When solving problems, dig at the roots instead of just hacking at the leaves.", author: "- Anthony J. D'Angelo"},
  {text: "A bad system will beat a good person every time.", author: "- W. Edwards Deming"},
  {text: "It is an immutable law in business that words are words, explanations are explanations, promises are promises but only performance is reality.", author: "- Harold Geneen"},
  {text: "We are too busy mopping the floor to turn off the faucet.", author: "- Author Unknown"},
  {text: "Watch the little things; a small leak will sink a great ship.", author: "- Benjamin Franklin"},
  {text: "If you always do what you always did, you will always get what you always got.", author: "Henry Ford"}
  ];

var currentQuote = "";
var currentAuthor = "";

//get the first random quote
$(document).ready(function(){

  var quote = randomQuote();

  $("#quote").html('"' + quote.text + '"');
  $("#author").html(quote.author);

  });

//click a new random quote
$(document).ready(function() {

  $("#newQuote").click(function() {

    var quote = randomQuote();

    $("#quote").html('"' + quote.text + '"');
    $("#author").html(quote.author);

    });

  });

//get a random quote
function randomQuote () {

  var num = Math.floor((Math.random() * quotes.length));

  return quotes[num];
}

//create a tweet button with current quote
$(document).ready(function(){

  $("#tweetThis").click(function(){

    var myquote = $("#quote").text();
    var myauthor = $("#author").text();

    window.open('https://twitter.com/intent/tweet?text=' + myquote + myauthor, '_blank');

  });

});
