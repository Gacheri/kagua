$('#locationModal').click(function(){
    var buttonId = $(this).attr('id');
    $('#locationbtn').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })