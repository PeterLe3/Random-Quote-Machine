
$(document).ready(function() {
  var proxy = "https://cors-anywhere.herokuapp.com/";
  var quoteBlock = $('#text');
  var author = $('#text2');
  var colors = ["#ADD8E6", " #FF7F50" ," #3CB371" ,"#BC8F8F" ,"#A52A2A" ," #F0E68C" ," #FF6347"];
  var test = 0;
  var i = 0;

  $("#quote").click(function() {
  
      
     $.ajax({url: proxy + 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', 
        type : 'GET',
        dataType: 'json',
        jsonp : false,
        async : true,
        contentType: 'text/plain',
        crossDomain: true,
        error: function(data) {
          console.log(data);
        },
         success: function(data){

         console.log("Sucess!", data.quote);
  
         i = dostuff(test, i);
         test = i;

         
         $("body").css("background-color", colors[i]);
         quoteBlock.text('"' +data.quoteText + '"');
         author.text("- " +data.quoteAuthor);
         author.css("font-size", "1em");
         }
           
      });
  });
   $("#quote2").click(function() {
         var tweet  = quoteBlock.text();
         window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(tweet));       
});

   function dostuff(test, i) {
     while(test == i ) {
           var i = Math.floor(Math.random() * 7);
         }
         return i;
   }
      
  });


     
  