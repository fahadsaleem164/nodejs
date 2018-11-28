$(function() {
  $.getJSON('api', updateFeedback);
  $('.feedback-form').submit(function(e){
    e.preventDefault();
    $.post('insert',{
      alert()

    });
  });

  $('.feedback-messages').on('click', function(e){
    
    if(e.target.className == 'glyphicon glyphicon-remove'){
      $.ajax({
        url: 'api/' +e.target.id,
        type: 'DELETE',
        success: updateFeedback
      });
    }
  });

});