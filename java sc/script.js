// example 1 alart message
$(document).ready(function(){
     alert("welcome to my website");

});
// example 2 alart message through button
$(document).ready(function(){
  $('#alart_m').on("click",function(){
    alert("welcome to my page");

  });
  // example 3 
  $('#show_m').on("click",function(){
    $("#sh_p").show(1000);
  });
  // example 4
  $('#hide_m').on("click",function(){
    $("#sh_p").hide(1000);
  });
   // example 5
   $('#sh_h_mes').on("click",function(){
    $("#s_h_m").toggle(300);
  });
    // example 6
    $('#fade_in').on("click",function(){
      $("#f_in").fadeIn();
    });
     // example 7
     $('#fade_out').on("click",function(){
      $("#f_in").fadeOut();
    });
     // example 8
     $('#fade_toggle').on("click",function(){
      $("#f_tog").fadeToggle();
    });
     // example 9
     $('#ques').on("click",function(){
      $("#ans").slideToggle();
    });
     // example 10
     $('#dbl_click').on("dblclick",function(){
      $("#dbl_p").slideToggle();
    });
     // example 11
     $('#over_event').on("mouseover",function(){
      $("#ov_ev").slideToggle();
    });
  
  
  
  


});
// example 12
$(document).ready(function(){
  
  $("#c_message").on("click",function (){
    $("#c_mesg").text("hello world. iam from bangladesh");

  });

  // example 13
  $("#use_append").on("click",function(){
    $("#use_ap").append("this is our beautyful country.which is recognized for its natural beauty all over the country.");

  });
  // example 14
  $("#use_prepend").on("click",function(){
    $("#use_pr").prepend("this is our beautyful country.which is recognized for its natural beauty all over the country.");

  });
  // example 15
  $("#c_color").on("click",function(){
    $("#c_col").css("color","red");

  });
  // example 16
  $("#c_size").on("click",function(){
    $("#c_si").css("color","red");
    $("#c_si").css("font-size","3rem")

  });
  // example 17
  $("#change_style").on("click",function(){
    $("#c_sty").css("color","red");
    $("#c_sty").css("font-size","3rem");
    $("#c_sty").css("font-style","italic");

  });
   // example 18
   $("#change_back").on("click",function(){
    $("#c_back").css("color","red");
    $("#c_back").css("font-size","3rem");
    $("#c_back").css("font-style","italic");
    $("#c_back").css("background-color","yellow");

  });
  // example 19
  $(".mybutton").on("click",function(){
    $("#multi").text(this.innerHTML+"is clicked")

  });




});



























