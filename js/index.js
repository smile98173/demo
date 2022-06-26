$('#mode').on('click', function (e) {
     var butclass = $(this).attr("class");
     if (butclass == "btn btn-light"){
      
      document.body.setAttribute('style', 'background-image: url("../img/hand-dark.jpg")');
      $(this).attr('class', 'btn btn-dark');
      $(this).html('dark');
     
     } else {
     
     document.body.setAttribute('style', 'background-image: url("../img/hand.jpg")');
     $(this).attr('class', 'btn btn-light');
     $(this).html('light');
     }
});