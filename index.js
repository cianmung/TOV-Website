function clickMenuIcon (){
    if(!jQuery('.navbar-nav-wrapper').hasClass('menuIsClicked')) {
        jQuery('.navbar-nav-wrapper').addClass('menuIsClicked');
        jQuery('#navbar-menu-wrapper').addClass('navbar-container-inner');
    }else {
        jQuery('.navbar-nav-wrapper').removeClass('menuIsClicked');
        jQuery('#navbar-menu-wrapper').removeClass('navbar-container-inner');
    }
}