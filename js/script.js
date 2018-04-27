// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  $.ajax({
  url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
  method: "GET",
  success: function(response) {
       
        console.log(response.data[0].images.fixed_width.url);
        
        var gif = response.data[0].images.fixed_width.url;
        https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC
        
        $('body').append('<img src=' + gif + '>');
        
  },
});
  
  
});
