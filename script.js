$(document).ready(function() {
  $('#user').hover(function(){
    $(this).html($("<span>User Image</span>"));
  },
  function(){
    $(this).html($(""));
  }
);
});
