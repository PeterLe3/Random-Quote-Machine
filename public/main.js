
$(document).ready(function() {
  var quoteBlock = $('#text');
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
         quoteBlock.text(data.quote);
         }
           
      });
  });
   $("#quote2").click(function() {
  
   
       //document.getElementById("text").innerHTML = "Paragraph changed!";
          var test = "";
          var arr = quoteBlock.text().split(" ");
          console.log(arr);
         
          for(var i = 0; i < arr.length; i++) {
            // test+='%20';
            test+=arr[i] + ' ';
         
          }
          console.log(test);
         window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(test));       
});
    
      
  });


     
  