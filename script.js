$(document).ready(function() {
  $('#user').hover(function(){
    $(this).html($("<span>User Image</span>"));
  },
  function(){
    $(this).html($(""));
  }
);
$('#mic').hover(function(){
  $(this).html($("<span>Search by voice</span>")).css();
},
function(){
  $(this).html($(""));
}
);
$("#notification").hover(function(){
  $(this).html($("<span>Google Notifications</span>"));
},
function(){
  $(this).html($(""));
}
);
});
