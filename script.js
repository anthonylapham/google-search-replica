$(document).ready(function() {
  $('#user').hover(function() {
      $(this).html($("<span>User Image</span>").css("display", "block").css("font-size", "12px"));
    },
    function() {
      $(this).html($(""));
    }
  );
  $('#mic').hover(function() {
      $(this).html($("<span id=>Search by voice</span>").css("display", "block").css("color", "white").css("font-size", "12px").css("position", "absolute").css("top", "25px").css("padding", "5px").css("border-radius", "10px").css("background-color", "black"));
    },
    function() {
      $(this).html($(""));
    }
  );
  $("#notification").hover(function() {
      $(this).html($("<span>Google Notifications</span>").css("display", "block").css("font-size", "12px"));
    },
    function() {
      $(this).html($(""));
    }
  );
});
