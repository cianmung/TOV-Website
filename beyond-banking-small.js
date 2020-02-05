// set up text to print, each item in array is new line
var aText = new Array(
    "Together, Let's Create",
    "a Seamless Future"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
    var value = '';
    var destination = document.getElementById("typedtext");
    
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
    
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
     }
window.onload = typewriter;
//----- adding new div---------------------------------------------------------
function addNewDiv() {
    var div = document.createElement('div');
    div.className = 'component-container-beyond-banking';
    div.style = 'z-index: -2;';
    document.body.appendChild(div);
    console.log(div);
}

function addNewDivNeeded() {
    for( i = 0; i < 7; i++ ){
        addNewDiv();   
    }
}

window.addEventListener("onload", addNewDivNeeded());
//-----------------------------------------------------------------------------

const $ = document.querySelector.bind(document);
const beyondBankingFirstText = $(".beyond-banking-first-text");
const weBelieveInThePowerOfFirstText = $(".we-believe-in-the-power-of-first-text");
const weBelieveInThePowerOfWrapper = $(".we-believe-in-the-power-of");
const weBelieveInThePowerOfFirstPic = $("#we-believe-in-the-power-of-first-row-1");
const weBelieveInThePowerOfSecondPic = $("#we-believe-in-the-power-of-first-row-2");
const weBelieveInThePowerOfThirdPic = $("#we-believe-in-the-power-of-first-row-3");
const weBelieveInThePowerOfImgBanner = $(".we-believe-in-the-power-of-second-row-wrapper");
const beyondBankingVideoTitle = $(".beyond-banking-video-title-wrapper");
const beyondBankingVideo = $(".beyond-banking-video");
const detailsInTheCaseBelowText = $(".details-in-the-case-below-text");
const comePartnerUsTitleText1 = $("#first-come-partner-us-title-text");
const comePartnerUsTitleText2 = $("#second-come-partner-us-title-text");
const comePartnerUsContentFirstContent = $(".come-partner-us-content-first-page-1-row1-content");
const comePartnerUsContentSecondContent = $(".come-partner-us-content-first-page-1-row2-content");
const comePartnerUsContentThirdContent = $(".come-partner-us-content-second-page-1-row-content");
const comePartnerUsContentFourthContent = $(".come-partner-us-content-second-page-2-row-content");
const caseStudy1 = $(".case-study1-content");
const caseStudy2 = $(".case-study2-content");

//--z-index adjustment---
const beyondBankingFirstTextWrapper = $(".beyond-banking-first-text-wrapper");
const beyondBankingUpperArrow = $(".arrow-container-up");
const beyondBankingArrow = $(".arrow-container");
const beyondBankingVideoContentWrapper = $(".beyond-banking-video-content-wrapper");
const comePartnerUsContentWrapper = $(".come-partner-us-content-wrapper");
const comePartnerUsContentFirstWrapper = $(".come-partner-us-wrapper-first");
const comePartnerUsContentSecondWrapper = $(".come-partner-us-wrapper-second");
const caseStudiesContainerWrapper = $(".case-studies-container");


function scrollHolder() {
    const componentContainer = $(".component-container-beyond-banking");
    const componentContainerHeight = componentContainer.offsetHeight;
    const scroll = window.scrollY;
    const percentage = (scroll/ componentContainerHeight) * 100;
    const percentageOfPage = parseInt(percentage);
    const percentageOfPageEnd = parseInt((((28 * componentContainerHeight) + 80) / componentContainerHeight) * 100);
    console.log(percentageOfPage);
    //arrow----
    if(percentageOfPage === 0){
        beyondBankingUpperArrow.style.opacity = `0`;
    } else {
        beyondBankingUpperArrow.style.opacity = `1`;
    }
    console.log( 
        parseInt((((28 * componentContainerHeight) + 80) / componentContainerHeight) * 100)
    );
    console.log(componentContainerHeight)
    if(percentageOfPage === percentageOfPageEnd){
        beyondBankingArrow.style.opacity = `0`;
        console.log("sdf");
    } else {
        beyondBankingArrow.style.opacity = `1`;
    }
    //arrow----

    beyondBankingFirstText.style.transform = `translate3d(0,${-percentageOfPage * 5}px, 0)`;
    beyondBankingFirstText.style.opacity = `${ 1- (percentageOfPage * 0.02)}`;
    beyondBankingFirstTextWrapper.style.zIndex = '1';

    if(percentageOfPage >= 50 && percentageOfPage < 200) {
        weBelieveInThePowerOfFirstText.style.opacity = `${percentageOfPage * 0.005}`;
        weBelieveInThePowerOfWrapper.style.zIndex = '1';
    }
    else if(percentageOfPage >= 200 && percentageOfPage < 900){
        weBelieveInThePowerOfFirstText.style.opacity = `1`;
        weBelieveInThePowerOfWrapper.style.zIndex = '1';
    }
    else if(percentageOfPage > 900 && percentageOfPage < 950){
        weBelieveInThePowerOfFirstText.style.opacity = `${1-((percentageOfPage - 900) * 0.02)}`;
        weBelieveInThePowerOfWrapper.style.zIndex = '1';
    }
    else if (percentageOfPage < 50 || percentageOfPage > 950) {
        weBelieveInThePowerOfFirstText.style.opacity = `0`;
        weBelieveInThePowerOfWrapper.style.zIndex = '0';
    }

    if(percentage > 50 && percentage < 300){
        weBelieveInThePowerOfFirstPic.style.opacity = `${(percentageOfPage - 200) * 0.01}`;
        weBelieveInThePowerOfFirstPic.style.display = `inline-block`;
    }
    else if(percentage >= 300 && percentage < 400){
        weBelieveInThePowerOfFirstPic.style.opacity = `1`;
        weBelieveInThePowerOfFirstPic.style.display = `inline-block`;   
    }
    else if(percentage >= 400 && percentage < 450){
        weBelieveInThePowerOfFirstPic.style.opacity = `${1-((percentageOfPage - 400) * 0.02)}`;
        weBelieveInThePowerOfFirstPic.style.display = `inline-block`; 
    }
    else if (percentage <= 50 || percentage >= 450) {
        weBelieveInThePowerOfFirstPic.style.opacity = `0`;
        weBelieveInThePowerOfFirstPic.style.display = `none`;
    }

    if(percentage > 450 && percentage < 550){
        weBelieveInThePowerOfSecondPic.style.opacity = `${(percentageOfPage - 450) * 0.01}`;
        weBelieveInThePowerOfSecondPic.style.display = `inline-block`;
    }
    else if(percentage >= 550 && percentage < 650){
        weBelieveInThePowerOfSecondPic.style.opacity = `1`;
        weBelieveInThePowerOfSecondPic.style.display = `inline-block`;   
    }
    else if(percentage >= 650 && percentage < 700){
        weBelieveInThePowerOfSecondPic.style.opacity = `${1-((percentageOfPage - 650) * 0.02)}`;
        weBelieveInThePowerOfSecondPic.style.display = `inline-block`; 
    }
    else if (percentage <= 450 || percentage >= 700) {
        weBelieveInThePowerOfSecondPic.style.opacity = `0`;
        weBelieveInThePowerOfSecondPic.style.display = `none`;
    }

    if(percentage > 700 && percentage < 800){
        weBelieveInThePowerOfThirdPic.style.opacity = `${(percentageOfPage - 700) * 0.01}`;
        weBelieveInThePowerOfThirdPic.style.display = `inline-block`;
    }
    else if(percentage >= 800 && percentage < 900){
        weBelieveInThePowerOfThirdPic.style.opacity = `1`;
        weBelieveInThePowerOfThirdPic.style.display = `inline-block`;   
    }
    else if(percentage >= 900 && percentage < 950){
        weBelieveInThePowerOfThirdPic.style.opacity = `${1-((percentageOfPage - 900) * 0.02)}`;
        weBelieveInThePowerOfThirdPic.style.display = `inline-block`; 
    }
    else if (percentage <= 700 || percentage >= 950) {
        weBelieveInThePowerOfThirdPic.style.opacity = `0`;
        weBelieveInThePowerOfThirdPic.style.display = `none`;
    }

    if(percentage > 300 && percentage <=350){
        weBelieveInThePowerOfImgBanner.style.opacity = `${(percentageOfPage - 300) * 0.02}`;
    } 
    else if(percentage > 350 && percentage < 900){
        weBelieveInThePowerOfImgBanner.style.opacity = `1`;
    }
    else if(percentage >= 900 && percentage < 950) {
        weBelieveInThePowerOfImgBanner.style.opacity = `${1-((percentageOfPage - 900) * 0.02)}`;
    }
    else if(percentage <= 300 || percentage > 950) {
        weBelieveInThePowerOfImgBanner.style.opacity = `0`;
    }

    if(percentage > 950 && percentage <= 1000){
        beyondBankingVideoTitle.style.opacity = `${(percentageOfPage - 950) * 0.02}`;
        beyondBankingVideoTitle.style.zIndex = '1';
        beyondBankingVideoContentWrapper.style.zIndex = '1';
    } 
    else if(percentage > 1000 && percentage < 1200){
        beyondBankingVideoTitle.style.opacity = `1`;
        beyondBankingVideoContentWrapper.style.zIndex = '1';
    }
    else if(percentage >= 1200 && percentage < 1250) {
        beyondBankingVideoTitle.style.opacity = `${1-((percentageOfPage - 1200) * 0.02)}`;
        beyondBankingVideoContentWrapper.style.zIndex = '1';
    }
    else if(percentage <= 950 || percentage > 1250) {
        beyondBankingVideoTitle.style.opacity = `0`;
        beyondBankingVideoContentWrapper.style.zIndex = '0';
    }

    if(percentage > 1000 && percentage <= 1050){
        beyondBankingVideo.style.opacity = `${(percentageOfPage - 1000) * 0.02}`;
        beyondBankingVideo.style.zIndex = '1';
    } 
    else if(percentage > 1050 && percentage < 1200){
        beyondBankingVideo.style.opacity = `1`;
    }
    else if(percentage >= 1200 && percentage < 1250) {
        beyondBankingVideo.style.opacity = `${1-((percentageOfPage - 1200) * 0.02)}`;
    }
    else if(percentage <= 1000 || percentage > 1200) {
        beyondBankingVideo.style.opacity = `0`;
    }

    if(percentage > 1050 && percentage <= 1100){
        detailsInTheCaseBelowText.style.opacity = `${(percentageOfPage - 1050) * 0.02}`;
    } 
    else if(percentage > 1100 && percentage < 1200){
        detailsInTheCaseBelowText.style.opacity = `1`;
    }
    else if(percentage >= 1200 && percentage < 1250) {
        detailsInTheCaseBelowText.style.opacity = `${1-((percentageOfPage - 1200) * 0.02)}`;
    }
    else if(percentage <= 1050 || percentage > 1250) {
        detailsInTheCaseBelowText.style.opacity = `0`;
    }
    
    if(percentage > 1250 && percentage < 1300){
        comePartnerUsTitleText1.style.opacity = `${(percentageOfPage - 1250) * 0.02}`;
        comePartnerUsTitleText1.style.zIndex = `1`;
    }
    else if(percentage >= 1300 && percentage < 1900){
        comePartnerUsTitleText1.style.opacity = `1`;
        comePartnerUsTitleText1.style.zIndex = `1`;        
    } 
    else if (percentage < 1250 || percentage > 1900){
        comePartnerUsTitleText1.style.opacity = `0`;
        comePartnerUsTitleText1.style.zIndex = `0`;
    }

    if(percentageOfPage >= 1900 && percentageOfPage < 2400) {
        comePartnerUsTitleText2.style.opacity = `1`;
        comePartnerUsTitleText2.style.zIndex = `1`;
    }
    else if(percentageOfPage >= 2400 && percentageOfPage < 2500) {
        comePartnerUsTitleText2.style.opacity = `${1-((percentageOfPage - 2400) * 0.01)}`;
        comePartnerUsTitleText2.style.zIndex = `1`;        
    }
    else if(percentageOfPage < 1900 || percentageOfPage > 2500) {
        comePartnerUsTitleText2.style.opacity = `0`;
        comePartnerUsTitleText2.style.zIndex = `0`;
    }

    if(percentage > 1300 && percentage < 1900){
        comePartnerUsContentFirstWrapper.style.zIndex = `1`;
    } 
    else {
        comePartnerUsContentFirstWrapper.style.zIndex = `0`;
    }

    if(percentage > 1250 && percentage <= 1400){
        comePartnerUsContentFirstContent.style.opacity = `${(percentageOfPage - 1300) * 0.01}`;
        comePartnerUsContentFirstContent.style.display = `inline-block`;
    } 
    else if(percentage > 1400 && percentage < 1500){
        comePartnerUsContentFirstContent.style.opacity = `1`;
        comePartnerUsContentFirstContent.style.display = `inline-block`;
    }
    else if(percentage >= 1500 && percentage < 1600) {
        comePartnerUsContentFirstContent.style.opacity = `${1-((percentageOfPage - 1450) * 0.01)}`;
        comePartnerUsContentFirstContent.style.display = `inline-block`;
    }
    else if(percentage <= 1250 || percentage > 1600) {
        comePartnerUsContentFirstContent.style.opacity = `0`;
        comePartnerUsContentFirstContent.style.display = `none`;
    }
    
    if(percentage > 1600 && percentage <= 1700){
        comePartnerUsContentSecondContent.style.opacity = `${(percentageOfPage - 1600) * 0.01}`;
        comePartnerUsContentSecondContent.style.display = `inline-block`;
    } 
    else if(percentage > 1700 && percentage < 1800){
        comePartnerUsContentSecondContent.style.opacity = `1`;
        comePartnerUsContentSecondContent.style.display = `inline-block`;
    }
    else if(percentage >= 1800 && percentage < 1900) {
        comePartnerUsContentSecondContent.style.opacity = `${1-((percentageOfPage - 1800) * 0.01)}`;
        comePartnerUsContentSecondContent.style.display = `inline-block`;
    }
    else if(percentage <= 1600 || percentage > 1900) {
        comePartnerUsContentSecondContent.style.opacity = `0`;
        comePartnerUsContentSecondContent.style.display = `none`;
    }

    if(percentage > 1900 && percentage < 2400){
        comePartnerUsContentSecondWrapper.style.zIndex = `1`;
    } 
    else {
        comePartnerUsContentSecondWrapper.style.zIndex = `0`;
    }

    if(percentage > 1900 && percentage <= 2000){
        comePartnerUsContentThirdContent.style.opacity = `${(percentageOfPage - 1900) * 0.01}`;
        comePartnerUsContentThirdContent.style.display = `inline-block`;
        
    } 
    else if(percentage > 2000 && percentage < 2100){
        comePartnerUsContentThirdContent.style.opacity = `1`;
        comePartnerUsContentThirdContent.style.display = `inline-block`;
    }
    else if(percentage >= 2100 && percentage < 2200) {
        comePartnerUsContentThirdContent.style.opacity = `${1-((percentageOfPage - 2100) * 0.01)}`;
        comePartnerUsContentThirdContent.style.display = `inline-block`;
    }
    else if(percentage <= 1900 || percentage > 2200) {
        comePartnerUsContentThirdContent.style.opacity = `0`;
        comePartnerUsContentThirdContent.style.display = `none`;    
    }

    if(percentage > 2200 && percentage <= 2300){
        comePartnerUsContentFourthContent.style.opacity = `${(percentageOfPage - 2200) * 0.01}`;
        comePartnerUsContentFourthContent.style.display = `inline-block`;
    } 
    else if(percentage > 2300 && percentage < 2400){
        comePartnerUsContentFourthContent.style.opacity = `1`;
        comePartnerUsContentFourthContent.style.display = `inline-block`;
    }
    else if(percentage >= 2400 && percentage < 2500) {
        comePartnerUsContentFourthContent.style.opacity = `${1-((percentageOfPage - 2400) * 0.01)}`;
        comePartnerUsContentFourthContent.style.display = `inline-block`;
    }
    else if(percentage <= 2200 || percentage > 2500) {
        comePartnerUsContentFourthContent.style.opacity = `0`;
        comePartnerUsContentFourthContent.style.display = `none`;    
    }

    if(percentage > 2500 && percentage <= 2600){
        caseStudy1.style.opacity = `${(percentageOfPage - 2500) * 0.01}`;
        caseStudiesContainerWrapper.style.zIndex = `1`;
    } 
    else if(percentage > 2600 && percentage < 2810){
        caseStudy1.style.opacity = `1`;
        caseStudiesContainerWrapper.style.zIndex = `1`;
    }
    else if(percentage >= 2810 && percentage < 2900) {
        caseStudy1.style.opacity = `${1-((percentageOfPage - 2800) * 0.01)}`;
        caseStudiesContainerWrapper.style.zIndex = `1`;
    }
    else if(percentage <= 2500 || percentage > 2900) {
        caseStudy1.style.opacity = `0`;
        caseStudiesContainerWrapper.style.zIndex = `0`;
    }
    
    if(percentage > 2600 && percentage <= 2700){
        caseStudy2.style.opacity = `${(percentageOfPage - 2600) * 0.01}`;
    } 
    else if(percentage >= 2700 && percentage < 2800){
        caseStudy2.style.opacity = `1`;
    }
    else if(percentage >= 2800 && percentage < 2900) {
        caseStudy2.style.opacity = `${1-((percentageOfPage - 2800) * 0.01)}`;
    }
    else if(percentage <= 2600 || percentage > 2900) {
        caseStudy2.style.opacity = `0`;
    }
}
window.addEventListener("scroll", scrollHolder);

function clickMenuIcon (){
    if(!jQuery('.navbar-nav-wrapper').hasClass('menuIsClicked')) {
        jQuery('.navbar-nav-wrapper').addClass('menuIsClicked');
        jQuery('#navbar-menu-wrapper').addClass('navbar-container-inner');
    }else {
        jQuery('.navbar-nav-wrapper').removeClass('menuIsClicked');
        jQuery('#navbar-menu-wrapper').removeClass('navbar-container-inner');
    }
}

function clickOnCaseStudy() {
    const componentContainer = $(".component-container-beyond-banking");
    const componentContainerHeight = componentContainer.offsetHeight;
    window.scrollTo(0, (2700 * componentContainerHeight)/100);
}

function addDarkMode(){
    const nightMode = $('#nightMode');
    const dayMode = $('#dayMode');
    const darkModeSwitch = $('.circle-dark-mode-switch');

    if(sessionStorage["darkModeClicked"]){
        sessionStorage["darkMode"] = "on";
    }
    else {
        sessionStorage.removeItem("darkMode");
    }
    //sessionStorage.removeItem("darkModeClicked");
    console.log(sessionStorage["darkMode"]);
    console.log(sessionStorage["darkModeClicked"]);
    //add dark mode
    console.log("Dark Mode is on!");
    jQuery('.arrow').addClass("dark");
    jQuery('.component-container-beyond-banking').addClass("dark");
    jQuery('.navbar-container').addClass("dark");
    jQuery('.modal').addClass("dark");
    jQuery('.come-partner-us-link').addClass("dark");
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

    if(sessionStorage["darkModeClicked"]){
        sessionStorage["darkMode"] = "off";
    }
    else {
        sessionStorage.removeItem("darkMode");
    }
    //sessionStorage.removeItem("darkModeClicked");
    console.log(sessionStorage["darkMode"]);
    console.log(sessionStorage["darkModeClicked"]);
    //remove dark mode
    console.log("Dark Mode is off!");
    jQuery('.arrow').removeClass("dark");
    jQuery('.component-container-beyond-banking').removeClass("dark");
    jQuery('.navbar-container').removeClass("dark");
    jQuery('.modal').removeClass("dark");
    jQuery('.come-partner-us-link').removeClass("dark");
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

function ampmTo24(time) {
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
window.addEventListener("onload", getDarkOrDayMode(hour > 7 && hour < 19));

function darkModeOn(props) {
    sessionStorage["darkModeClicked"] = true;
    if(props.id === "nightMode"){
        addDarkMode();
    }else {       
        addLightMode();        
    }
}

function modalOpen() {
    if(!jQuery('.modal').hasClass("modal-open")) {
        jQuery('.modal').addClass("modal-open");
        console.log("open");
        beyondBankingUpperArrow.style.zIndex = `0`;
        beyondBankingArrow.style.zIndex = `0`;        
    } 
    else {
        jQuery('.modal').removeClass("modal-open");
        console.log("close");
        beyondBankingUpperArrow.style.zIndex = `2`;
        beyondBankingArrow.style.zIndex = `2`;
    }
}