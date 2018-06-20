
  $(document).ready(function() {
    $('.container').click(function(){
      this.classList.toggle("change")
      $('ul').slideToggle("dropdown");
    })
  })