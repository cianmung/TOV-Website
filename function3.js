$('.think-piece-article-row').click(function(evt){
  var selectedID = this.id;
  if(selectedID === "forget-me-not"){
    var contentData = document.getElementById("firstContent");
    jQuery('#firstContent').removeClass("hide");

    if(!jQuery('#secondContent').hasClass("hide") || !jQuery('#defaultContent').hasClass("hide")){
        jQuery('#secondContent').addClass("hide");
        jQuery('#defaultContent').addClass("hide");
    }
  }
  else if(selectedID === "forget-me-not1") {
    jQuery('#secondContent').removeClass("hide");
    if(!jQuery('#firstContent').hasClass("hide") || !jQuery('#defaultContent').hasClass("hide")){
        jQuery('#firstContent').addClass("hide");
        jQuery('#defaultContent').addClass("hide");
    }
  }
  else {
    jQuery('#firstContent').addClass("hide");
    jQuery('#secondContent').addClass("hide");
    jQuery('#defaultContent').removeClass("hide");
    console.log(jQuery('#defaultContent'));
  }
})