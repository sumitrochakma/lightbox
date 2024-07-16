$(function(){
    $("#hide").click(function(){
        $(".box").hide();
    })
    $("#show").click(function(){
        $(".box").show();
    })
     $("#hide_show").click(function(){
        $(".box").toggle();
    }) 
    $("#slideUp").click(function(){
        $(".box").slideUp(1000);
    }) 
    $("#slideDown").click(function(){
        $(".box").slideDown(1000);
    })
    $("#slideDownUp").click(function(){
        $(".box").slideToggle(1000);
    })
    $("#fadeIn").click(function(){
        $(".box").fadeIn(1000);
    }) 
    $("#fadeOut").click(function(){
        $(".box").fadeOut(1000);
    })
     $("#fadeToggle").click(function(){
        $(".box").fadeToggle(1000);
    })
    $("#bouAso").click(function(){
        $(".box").addClass("tanvirsgf");
    }) 
      $("#bouJao").click(function(){
        $(".box").removeClass("tanvirsgf");
    })
    
   
  
     
    
 
   
})