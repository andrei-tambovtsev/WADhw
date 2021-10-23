$(document).ready(function(){
  $("#dropdown").hide();
  let dropdown_shown = false;
  $("#account").click(function(){
    if(dropdown_shown){
      console.log("hide dropdown")
      $("#dropdown").hide();
      dropdown_shown = false;
    }
  else{
    console.log("show dropdown")
    $("#dropdown").show();
    dropdown_shown = true;
  }
  });
});
