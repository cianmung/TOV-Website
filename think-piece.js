const $ = document.querySelector.bind(document);
const firstPage = $('#firstContent');
const secondPage = $('#secondContent');
const firstPageTitle = $('#firstContentTitle');
const secondPageTitle = $('#secondContentTitle');
const forgetMeNotTitle = $('#forget-me-not');
const lessConverMoreAction = $('#less-conversation-more-action');
var today = new Date().toLocaleTimeString();
const beyondBankingUpperArrow = $(".arrow-container-up");
const beyondBankingArrow = $(".arrow-container");

 
function trackArticleId() {
    const scroll = jQuery('.think-piece-content-article').scrollTop();
    const percentageOfFirstPage = parseInt((parseInt(scroll)/firstPage.offsetHeight) * 100);
    const percentageOfSecondPage = parseInt((parseInt(scroll)/secondPage.offsetHeight) * 100);
    
    if(percentageOfFirstPage >= 100) {
        //lessConverMoreAction.style.borderLeft = `5px solid #000`;
        //lessConverMoreAction.style.transition = `all 1s`;
        //forgetMeNotTitle.style.borderLeft = `5px solid transparent`;
        secondPageTitle.style.fontWeight = "bold";
        firstPageTitle.style.fontWeight = "normal";
    }
    else{
        //forgetMeNotTitle.style.borderLeft = `5px solid #000`;
        //forgetMeNotTitle.style.transition = `all 1s`;
        //lessConverMoreAction.style.borderLeft = `5px solid transparent`;
        firstPageTitle.style.fontWeight = "bold";
        secondPageTitle.style.fontWeight = "normal";
    }
    //arrow----
    if(percentageOfFirstPage === 0){
        beyondBankingUpperArrow.style.opacity = `0`;
    } else {
        beyondBankingUpperArrow.style.opacity = `1`;
    }
    console.log(percentageOfSecondPage)
    if(percentageOfSecondPage <= 190 && percentageOfSecondPage >= 183){
        beyondBankingArrow.style.opacity = `0`;
    } else {
        beyondBankingArrow.style.opacity = `1`;
    }
    //arrow----
}
$('.think-piece-content-article').addEventListener("scroll", trackArticleId);


function addDarkMode(){
    const nightMode = $('#nightMode');
    const dayMode = $('#dayMode');
    const darkModeSwitch = $('.circle-dark-mode-switch');
    
    //add dark mode
    console.log("Dark Mode is on!");
    
    if(sessionStorage["darkModeClicked"]){
        sessionStorage["darkMode"] = "on";
    }
    else {
        sessionStorage.removeItem("darkMode");
    }

    jQuery('.component-container-about-us').addClass("dark");
    jQuery('.navbar-container').addClass("dark");
    jQuery('.switch-mode').addClass("dark");
    jQuery('.think-piece-component-container').addClass("dark");
    jQuery('.think-piece-content-article').addClass("dark");
    jQuery('.think-piece-article-menu').addClass("dark");
    jQuery('.think-piece-article-pointer').addClass("dark");
    jQuery('.think-piece-article-row').addClass("dark");
    jQuery('.arrow').addClass("dark");
    jQuery('.think-piece-container-wrapper').addClass("dark");
    jQuery('.navbar-menu-icon').addClass("dark"); 
    dayMode.style.backgroundColor = `transparent`;
    nightMode.style.backgroundColor = `#fff`;
    darkModeSwitch.style.border = `1px solid #fff`;
    darkModeSwitch.style.borderRight = `none`;
    darkModeSwitch.style.backgroundColor = `#808080`;
}

function addLightMode(){
    const nightMode = $('#nightMode');
    const dayMode = $('#dayMode');
    const darkModeSwitch = $('.circle-dark-mode-switch');

    //remove dark mode
    console.log("Dark Mode is off!");
    if(sessionStorage["darkModeClicked"]){
        sessionStorage["darkMode"] = "off";
    }
    else {
        sessionStorage.removeItem("darkMode");
    }
    jQuery('.component-container-about-us').removeClass("dark");
    jQuery('.navbar-container').removeClass("dark");
    jQuery('.switch-mode').removeClass("dark");
    jQuery('.think-piece-component-container').removeClass("dark");
    jQuery('.think-piece-content-article').removeClass("dark");
    jQuery('.think-piece-article-menu').removeClass("dark");
    jQuery('.think-piece-article-pointer').removeClass("dark");
    jQuery('.think-piece-article-row').removeClass("dark");
    jQuery('.arrow').removeClass("dark");
    jQuery('.think-piece-container-wrapper').removeClass("dark");
    jQuery('.navbar-menu-icon').removeClass("dark"); 
    dayMode.style.backgroundColor = `#000`;
    nightMode.style.backgroundColor = `transparent`;
    darkModeSwitch.style.border = `1px solid #000`;
    darkModeSwitch.style.borderRight = `none`;
    darkModeSwitch.style.backgroundColor = `#C5C5C5`;
}


function getDarkOrDayMode(input) {
    if(input === false){
        if(sessionStorage["darkMode"] === "on" && sessionStorage["darkModeClicked"]) {
            addDarkMode();
        } else if(sessionStorage["darkMode"] === "off" && sessionStorage["darkModeClicked"]){
            addLightMode();
        }else {
        addDarkMode();
        }        
    }
    else if(input === true) {
        if(sessionStorage["darkMode"] === "on" && sessionStorage["darkModeClicked"]) {
            addDarkMode();
        } else if(sessionStorage["darkMode"] === "off" && sessionStorage["darkModeClicked"]){
            addLightMode();
        }else {
        addLightMode();                
        }        
    }
}

function ampmTo24(time)
{
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AP = time.match(/\s(.*)$/);
  if (!AP) AP = time.slice(-2);
  else AP=AP[1];
  if(AP == "PM" && hours<12) hours = hours+12;
  if(AP == "AM" && hours==12) hours = hours-12;
  var Hours24 = hours.toString();
  var Minutes24 = minutes.toString();
  if(hours<10) Hours24 = "0" + Hours24;
  if(minutes<10) Minutes24 = "0" + Minutes24;

  return Hours24 + ":" + Minutes24
}

var today = new Date().toLocaleTimeString();
var today1 = ampmTo24(today);
var hour = today1.split(":")[0];
var day = hour > 7 && hour < 19;
window.addEventListener("onload", getDarkOrDayMode(day));

function darkModeOn(props) {
    sessionStorage["darkModeClicked"] = true;
    if(props.id === "nightMode"){
        addDarkMode();
    }else {       
        addLightMode();        
    }
}
function clickMenuIcon (){
    if(!jQuery('.navbar-nav-wrapper').hasClass('menuIsClicked')) {
        jQuery('.navbar-nav-wrapper').addClass('menuIsClicked');
        jQuery('#navbar-menu-wrapper').addClass('navbar-container-inner');
    }else {
        jQuery('.navbar-nav-wrapper').removeClass('menuIsClicked');
        jQuery('#navbar-menu-wrapper').removeClass('navbar-container-inner');
    }
}