
$(document).ready(function() {
  var quoteBlock = $('#text');
  var author = $('#text2');
  var colors = ["#ADD8E6", " #FF7F50" ," #3CB371" ,"#BC8F8F" ,"#A52A2A" ," #F0E68C" ," #FF6347"];
  var test = 0;
  var i = 0;

  $("#quote").click(function() {
  
      
     $.ajax({url: 'http://quotes.stormconsultancy.co.uk/random.json', 
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
         quoteBlock.text('"' +data.quote + '"');
         author.text("- " +data.author);
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


     
  