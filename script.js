$(document).ready(function() {
  $('#user').hover(function(){
    $(this).html($("<span>User Image</span>").css("display", "block", "font-size", "11px"));
  },
  function(){
    $(this).html($(""));
  }
);
$('#mic').hover(function(){
  $(this).html($("<span id=>Search by voice</span>").css("display", "block"));
},
function(){
  $(this).html($(""));
}
);
$("#notification").hover(function(){
  $(this).html($("<span>Google Notifications</span>").css("display", "block"));
},
function(){
  $(this).html($(""));
}
);
});
