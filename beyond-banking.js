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


//-----------------------------------------------------------------------------

const $ = document.querySelector.bind(document);
const beyondBankingFirstText = $(".beyond-banking-first-text");
const weBelieveInThePowerOfFirstText = $(".we-believe-in-the-power-of-first-text");
const weBelieveInThePowerOfFirstRow1 = $("#we-believe-in-the-power-of-first-row-1");
const weBelieveInThePowerOfFirstRow1plus = $("#we-believe-in-the-power-of-first-row-1-plus");
const weBelieveInThePowerOfFirstRow2 = $("#we-believe-in-the-power-of-first-row-2");
const weBelieveInThePowerOfFirstRow2plus = $("#we-believe-in-the-power-of-first-row-2-plus");
const weBelieveInThePowerOfFirstRow3 = $("#we-believe-in-the-power-of-first-row-3");
const weBelieveInThePowerOfSecondRow = $(".we-believe-in-the-power-of-second-row-wrapper");
const beyondBankingVideoTitle = $(".beyond-banking-video-title-wrapper");
const beyondBankingVideo = $(".beyond-banking-video");
const detailsInTheCaseBelowText = $(".details-in-the-case-below-text");
const comePartnerUsTitleText = $(".come-partner-us-title-text");
const comePartnerUsFirstPage1stRow = $(".come-partner-us-content-first-page-1-row1-content");
const iconSandbox = $(".icon-sandbox");
const iconConnect = $(".icon-connect");
const iconRegional = $(".icon-regional");
const iconData = $(".icon-data");
const comePartnerUsSeparator = $(".come-partner-us-content-first-page-separator-red-line");
const comePartnerUsSecondSeparator = $(".come-partner-us-content-second-page-separator-red-line");
const comePartnerUsFirstPage2ndRow = $(".come-partner-us-content-first-page-1-row2-content");
const comePartnerUsSecondPage1stRow = $(".come-partner-us-content-second-page-1-row-content");
const comePartnerUsSecondPage2ndRow = $(".come-partner-us-content-second-page-2-row-content");
const caseStudy1Content = $(".case-study1-content");
const caseStudy2Content = $(".case-study2-content");



//----z-index--component
const beyondBankingFirstTextWrapper = $(".beyond-banking-first-text-wrapper");
const weBelieveInThePowerOfWrapper = $(".we-believe-in-the-power-of");
const beyondBankingVideoContentWrapper = $(".beyond-banking-video-content-wrapper");
const comePartnerUsContentWrapper = $(".come-partner-us-content-wrapper");
const caseStudiesContainerWrapper = $(".case-studies-container");
const beyondBankingUpperArrow = $(".arrow-container-up");
const beyondBankingArrow = $(".arrow-container");
const comePartnerUsWrapperFirst = $(".come-partner-us-wrapper-first");
const comePartnerUsWrapperSecond = $(".come-partner-us-wrapper-second");
const comePartnerUsFirstWrapper = $(".come-partner-us-wrapper1");
const comePartnerUsSecondWrapper = $(".come-partner-us-wrapper2");

//------

function scrollHolder() {
    const componentContainer = $(".component-container-beyond-banking");
    const componentContainerHeight = componentContainer.offsetHeight;
    const comePartnerUsSeparatorContainer = $(".come-partner-us-content-first-page-1-row").offsetHeight;
    const scroll = window.scrollY;
    const percentage = (scroll/ componentContainerHeight) * 100;
    const percentageOfPage = parseInt(percentage);
    
    console.log(percentageOfPage);

    //arrow----
    if(percentageOfPage === 0){
        beyondBankingUpperArrow.style.opacity = `0`;
    } else {
        beyondBankingUpperArrow.style.opacity = `1`;
    }
    if(percentageOfPage === 2112){
        beyondBankingArrow.style.opacity = `0`;
    } else {
        beyondBankingArrow.style.opacity = `1`;
    }
    //arrow----
    if(percentageOfPage > 60){
        beyondBankingFirstText.style.diplay= 'none';
    } else if(percentageOfPage < 60){
        beyondBankingFirstText.style.transform = `translate3d(0,${-percentageOfPage * 5}px, 0)`;
        beyondBankingFirstText.style.opacity = `${ 1- (percentageOfPage * 0.02)}`;
        beyondBankingFirstTextWrapper.style.zIndex = '1';
        beyondBankingFirstText.style.diplay= 'inline-block';
    }

    if(percentageOfPage >= 50 && percentageOfPage < 200) {
        weBelieveInThePowerOfFirstText.style.opacity = `${percentageOfPage * 0.005}`;
        weBelieveInThePowerOfWrapper.style.zIndex = '1';
    }
    else if(percentageOfPage >= 200 && percentageOfPage < 512){
        weBelieveInThePowerOfFirstText.style.opacity = `1`;
        weBelieveInThePowerOfWrapper.style.zIndex = '1';
    }
    else if(percentageOfPage > 512 && percentageOfPage < 612){
        weBelieveInThePowerOfFirstText.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
        weBelieveInThePowerOfWrapper.style.zIndex = '1';
    }
    else if (percentageOfPage < 50 || percentageOfPage > 612) {
        weBelieveInThePowerOfFirstText.style.opacity = `0`;
        weBelieveInThePowerOfWrapper.style.zIndex = '0';
    }

    if(percentageOfPage >= 200 && percentageOfPage < 240){
        weBelieveInThePowerOfFirstRow1.style.opacity = `${(percentageOfPage - 200) * 0.05}`;
        if(percentageOfPage >= 230 && percentageOfPage < 240) {
            weBelieveInThePowerOfFirstRow1plus.style.opacity = `${(percentageOfPage - 230) * 0.1}`
        }
    }
    else if (percentageOfPage >= 240 && percentageOfPage < 512){
        weBelieveInThePowerOfFirstRow1.style.opacity = `1`;
        weBelieveInThePowerOfFirstRow1plus.style.opacity = `1`;
    }
    else if(percentageOfPage > 512 && percentageOfPage < 612){
        weBelieveInThePowerOfFirstRow1.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
        weBelieveInThePowerOfFirstRow1plus.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
    }
    else if (percentageOfPage < 200 || percentageOfPage > 612){
        weBelieveInThePowerOfFirstRow1.style.opacity = `0`;
        weBelieveInThePowerOfFirstRow1plus.style.opacity = `0`;
    }

    if(percentageOfPage >= 240 && percentageOfPage < 280){
        weBelieveInThePowerOfFirstRow2.style.opacity = `${(percentageOfPage - 240) * 0.05}`;
        if(percentageOfPage >= 270 && percentageOfPage < 280) {
            weBelieveInThePowerOfFirstRow2plus.style.opacity = `${(percentageOfPage - 270) * 0.1}`;
        }
    }
    else if (percentageOfPage >= 280 && percentageOfPage < 512){
        weBelieveInThePowerOfFirstRow2.style.opacity = `1`;
        weBelieveInThePowerOfFirstRow2plus.style.opacity = `1`;
    }
    else if(percentageOfPage > 512 && percentageOfPage < 612){
        weBelieveInThePowerOfFirstRow2.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
        weBelieveInThePowerOfFirstRow2plus.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
    }
    else if (percentageOfPage < 240 || percentageOfPage > 612){
        weBelieveInThePowerOfFirstRow2.style.opacity = `0`;
        weBelieveInThePowerOfFirstRow2plus.style.opacity = `0`;
    }

    if(percentageOfPage >= 280 && percentageOfPage < 320){
        weBelieveInThePowerOfFirstRow3.style.opacity = `${(percentageOfPage - 280) * 0.05}`;
    }
    else if (percentageOfPage >= 320 && percentageOfPage < 512){
        weBelieveInThePowerOfFirstRow3.style.opacity = `1`;
    }
    else if(percentageOfPage > 512 && percentageOfPage < 612){
        weBelieveInThePowerOfFirstRow3.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
    }
    else if(percentageOfPage < 280 || percentageOfPage > 612){
        weBelieveInThePowerOfFirstRow3.style.opacity = `0`;
    }

    if(percentageOfPage >= 320 && percentageOfPage < 350){
        weBelieveInThePowerOfSecondRow.style.opacity = `${(percentageOfPage - 320) * 0.05}`;
    }
    else if(percentageOfPage >= 350 && percentageOfPage < 512){
        weBelieveInThePowerOfSecondRow.style.opacity = `1`;
    }
    else if(percentageOfPage > 512 && percentageOfPage < 612){
        weBelieveInThePowerOfSecondRow.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
    }
    else if(percentageOfPage < 320 || percentageOfPage > 612) {
        weBelieveInThePowerOfSecondRow.style.opacity = `0`;
    }

    if(percentageOfPage >= 612 && percentageOfPage < 662) {
        beyondBankingVideoTitle.style.opacity = `${(percentageOfPage - 612) * 0.02}`;
        beyondBankingVideoContentWrapper.style.zIndex = '1';
    }
    else if(percentageOfPage >= 662 && percentageOfPage < 812) {
        beyondBankingVideoTitle.style.opacity = `1`;
        beyondBankingVideoContentWrapper.style.zIndex = '1';
    }
    else if (percentageOfPage >= 812 && percentageOfPage < 912) {
        beyondBankingVideoTitle.style.opacity = `${1-((percentageOfPage - 812) * 0.01)}`;
        beyondBankingVideoContentWrapper.style.zIndex = '1';
    }
    else if(percentageOfPage < 612 || percentageOfPage >= 912) {
        beyondBankingVideoTitle.style.opacity = `0`;
        beyondBankingVideoContentWrapper.style.zIndex = '0';
    }

    if(percentageOfPage >= 662 && percentageOfPage < 712){
        beyondBankingVideo.style.opacity = `${(percentageOfPage - 662) * 0.02}`;
    }
    else if(percentageOfPage >= 712 && percentageOfPage < 812){
        beyondBankingVideo.style.opacity = `1`;
    }
    else if (percentageOfPage >= 812 && percentageOfPage < 912) {
        beyondBankingVideo.style.opacity = `${1-((percentageOfPage - 812) * 0.01)}`;
    }
    else if(percentageOfPage < 662 || percentageOfPage >= 912){
        beyondBankingVideo.style.opacity = `0`;
    }

    if(percentageOfPage >= 712 && percentageOfPage < 762){
        detailsInTheCaseBelowText.style.opacity = `${(percentageOfPage - 712) * 0.02}`;
    }
    else if(percentageOfPage >= 762 && percentageOfPage < 812){
        detailsInTheCaseBelowText.style.opacity = `1`;
    }
    else if (percentageOfPage >= 812 && percentageOfPage < 912) {
        detailsInTheCaseBelowText.style.opacity = `${1-((percentageOfPage - 812) * 0.01)}`;
    }
    else if(percentageOfPage < 712 || percentageOfPage >= 912){
        detailsInTheCaseBelowText.style.opacity = `0`;
    }

    if(percentageOfPage > 912 && percentageOfPage < 1412){
        comePartnerUsWrapperFirst.style.zIndex = `1`;
    } 
    else {
        comePartnerUsWrapperFirst.style.zIndex = `0`;
    }

    //Come Partner Us Text
    if(percentageOfPage >= 912 && percentageOfPage < 965){
        comePartnerUsTitleText.style.opacity = `${(percentageOfPage - 912) * 0.02}`;
        comePartnerUsTitleText.style.zIndex = `2`;

    }
    else if(percentageOfPage >= 965 && percentageOfPage < 1712) {
        comePartnerUsTitleText.style.opacity = `1`;
        comePartnerUsTitleText.style.zIndex = `2`;
    }
    else if(percentageOfPage >= 1712 && percentageOfPage < 1812) {
        comePartnerUsTitleText.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
        comePartnerUsTitleText.style.zIndex = `2`;
    }
    else if(percentageOfPage < 912 || percentageOfPage >= 1812) {
        comePartnerUsTitleText.style.opacity = `0`;
        comePartnerUsTitleText.style.zIndex = `0`;
    }

    //Come Partner Us first page
    if(percentageOfPage >= 965 && percentageOfPage < 1005){
        comePartnerUsFirstPage1stRow.style.opacity = `${(percentageOfPage - 965) * 0.025}`;
    }
    else if (percentageOfPage >= 1005 && percentageOfPage < 1312) {
        comePartnerUsFirstPage1stRow.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1312 && percentageOfPage < 1412) {
        comePartnerUsFirstPage1stRow.style.opacity = `${1-((percentageOfPage - 1312) * 0.01)}`;        
    }
    else if(percentageOfPage < 965 || percentageOfPage >= 1412){
        comePartnerUsFirstPage1stRow.style.opacity = `0`;        
    }

    if(percentageOfPage >= 1005 && percentageOfPage < 1038){
        iconSandbox.style.opacity = `${(percentageOfPage - 1005) * 0.03}`;
    }
    else if(percentageOfPage >= 1038 && percentageOfPage < 1312) {
        iconSandbox.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1312 && percentageOfPage < 1412) {
        iconSandbox.style.opacity = `${1-((percentageOfPage - 1312) * 0.01)}`;
    }
    else if(percentageOfPage < 1005 || percentageOfPage >= 1412) {
        iconSandbox.style.opacity = `0`;
    }

    // Red-line Separator first line first page
    if(percentageOfPage >= 1038 && percentageOfPage < 1084){
        comePartnerUsSeparator.style.height = `${(percentageOfPage - 1038) * (comePartnerUsSeparatorContainer / 100)}px`;        
    }
    else if (percentageOfPage >= 1084 && percentageOfPage < 1184) {
        comePartnerUsSeparator.style.height = `${comePartnerUsSeparatorContainer / 2}px`;
    }

    if(percentageOfPage > 1084 && percentageOfPage < 1118) {
        iconConnect.style.opacity = `${(percentageOfPage - 1084) * 0.03}`;
    }
    else if (percentageOfPage >= 1118 && percentageOfPage < 1312) {
        iconConnect.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1312 && percentageOfPage < 1412) {
        iconConnect.style.opacity = `${1-((percentageOfPage - 1312) * 0.01)}`;
    }
    else if (percentageOfPage < 1084 || percentageOfPage >= 1412) {
        iconConnect.style.opacity = `0`;
    }

    // Red-line Separator second line first page
    if(percentageOfPage >= 1118 && percentageOfPage < 1173){
        comePartnerUsSeparator.style.height = `${((percentageOfPage - 1118) * (comePartnerUsSeparatorContainer / 110)) + (comePartnerUsSeparatorContainer / 2)}px`;
        
    }
    else if (percentageOfPage >= 1173 && percentageOfPage < 1312) {
        comePartnerUsSeparator.style.height = `${comePartnerUsSeparatorContainer}px`;
        comePartnerUsSeparator.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1312 && percentageOfPage < 1412) {
        comePartnerUsSeparator.style.opacity = `${1-((percentageOfPage - 1312) * 0.02)}`;
        comePartnerUsSeparator.style.height = `${comePartnerUsSeparatorContainer - ((percentageOfPage - 1312) * (comePartnerUsSeparatorContainer / 100))}px`;
    }
    else if(percentageOfPage < 1038 || percentageOfPage >= 1412) {
        comePartnerUsSeparator.style.height = `0`;
    }

    if(percentageOfPage >= 1173 && percentageOfPage < 1213){
        comePartnerUsFirstPage2ndRow.style.opacity = `${(percentageOfPage - 1173) * 0.025}`;
    }
    else if(percentageOfPage >= 1213 && percentageOfPage < 1312) {
        comePartnerUsFirstPage2ndRow.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1312 && percentageOfPage < 1412) {
        comePartnerUsFirstPage2ndRow.style.opacity = `${1-((percentageOfPage - 1312) * 0.01)}`;
    }
    else if(percentageOfPage < 1173 || percentageOfPage >= 1412) {
        comePartnerUsFirstPage2ndRow.style.opacity = `0`;
    }

    if(percentageOfPage > 1412 && percentageOfPage < 1812){
        comePartnerUsWrapperSecond.style.zIndex = `1`;
    } 
    else {
        comePartnerUsWrapperSecond.style.zIndex = `0`;
    }
    //Come Partner Us second page first row
    if (percentageOfPage > 1412 && percentageOfPage < 1451){
        comePartnerUsSecondPage1stRow.style.opacity = `${(percentageOfPage - 1412) * 0.025}`;
    }
    else if(percentageOfPage >= 1451 && percentageOfPage < 1712){
        comePartnerUsSecondPage1stRow.style.opacity = `1`;
    }
    else if(percentageOfPage > 1712 && percentageOfPage < 1812){
        comePartnerUsSecondPage1stRow.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
    }
    else if (percentageOfPage < 1412 || percentageOfPage >= 1812){
        comePartnerUsSecondPage1stRow.style.opacity = `0`;
    }

    // regional icon
    if(percentageOfPage > 1451 && percentageOfPage < 1484){
        iconRegional.style.opacity = `${(percentageOfPage - 1451) * 0.03}`;
    }
    else if (percentageOfPage >= 1484 && percentageOfPage < 1712) {
        iconRegional.style.opacity = `1`;
    }
    else if(percentageOfPage > 1712 && percentageOfPage < 1812){
        iconRegional.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
    }
    else if(percentageOfPage < 1451 || percentageOfPage >= 1812) {
        iconRegional.style.opacity = `0`;
    }

    
    //second page first line separator second page
    if(percentageOfPage > 1484 && percentageOfPage < 1530){
        comePartnerUsSecondSeparator.style.opacity = `1`;
        comePartnerUsSecondSeparator.style.height = `${(percentageOfPage - 1484) * (comePartnerUsSeparatorContainer / 100)}px`;
    }
    else if(percentageOfPage >= 1530 && percentageOfPage < 1630) {
        comePartnerUsSecondSeparator.style.height = `${comePartnerUsSeparatorContainer / 2}px`;
        comePartnerUsSecondSeparator.style.zIndex = `-1`;
    }
    else if(percentageOfPage >= 1712 && percentageOfPage < 1812) {
        comePartnerUsSecondSeparator.style.opacity = `${1-((percentageOfPage - 1712) * 0.02)}`;
        comePartnerUsSecondSeparator.style.height = `${comePartnerUsSeparatorContainer - ((percentageOfPage - 1712) * (comePartnerUsSeparatorContainer / 100))}px`;
        comePartnerUsSecondSeparator.style.zIndex = `-1`;
    }
    else if(percentageOfPage > 1812 || percentageOfPage < 1484) {
        comePartnerUsSecondSeparator.style.opacity = `0`;
        comePartnerUsSecondSeparator.style.zIndex = `0`;
    }
     

    // data icon
    if(percentageOfPage > 1530 && percentageOfPage < 1563) {
        iconData.style.opacity = `${(percentageOfPage - 1530) * 0.03}`;
    }
    else if(percentageOfPage >= 1563 && percentageOfPage < 1712){
        iconData.style.opacity = `1`;
    }
    else if(percentageOfPage > 1712 && percentageOfPage < 1812){
        iconData.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
    }
    else if(percentageOfPage < 1530 || percentageOfPage >= 1812) {
        iconData.style.opacity = `0`;
    }

    
    // second page second line separator second page
    if(percentageOfPage > 1563 && percentageOfPage < 1617) {
        comePartnerUsSecondSeparator.style.height = `${((percentageOfPage - 1563) * (comePartnerUsSeparatorContainer / 110)) + (comePartnerUsSeparatorContainer / 2)}px`;
    }
    else if (percentageOfPage >= 1617) {
        comePartnerUsSecondSeparator.style.height = `${comePartnerUsSeparatorContainer}px`;
    }
    

    // Come Partner Us second page second row
    if(percentageOfPage > 1617 && percentageOfPage < 1658) {
        comePartnerUsSecondPage2ndRow.style.opacity = `${(percentageOfPage - 1617) * 0.025}`;
    }
    else if(percentageOfPage > 1658 && percentageOfPage < 1712) {
        comePartnerUsSecondPage2ndRow.style.opacity = `1`;
    }
    else if(percentageOfPage > 1712 && percentageOfPage < 1812){
        comePartnerUsSecondPage2ndRow.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
    }
    else if(percentageOfPage < 1617 || percentageOfPage >= 1812) {
        comePartnerUsSecondPage2ndRow.style.opacity = `0`;
    }

    if(percentageOfPage > 1812 && percentageOfPage < 1912) {
        caseStudy1Content.style.opacity = `${(percentageOfPage - 1812) * 0.01}`;
        caseStudiesContainerWrapper.style.zIndex = `1`;
        caseStudy2Content.style.zIndex = '-1';
    }
    else if(percentageOfPage > 1912 && percentageOfPage < 2112){
        caseStudy1Content.style.opacity = `1`;
        caseStudiesContainerWrapper.style.zIndex = `1`;
        caseStudy2Content.style.zIndex = '1';
    }
    else if(percentageOfPage > 2112 && percentageOfPage <2212){
        caseStudy1Content.style.opacity = `${1-((percentageOfPage - 2112) * 0.01)}`;
        caseStudiesContainerWrapper.style.zIndex = `1`;
    }
    else if(percentageOfPage < 1812 || percentageOfPage >= 2212){
        caseStudy1Content.style.opacity = `0`;
        caseStudiesContainerWrapper.style.zIndex = `0`;
    }

    if(percentageOfPage > 1912 && percentageOfPage < 2012) {
        caseStudy2Content.style.opacity = `${(percentageOfPage - 1912) * 0.01}`;
    }
    else if(percentageOfPage > 2012 && percentageOfPage < 2112){
        caseStudy2Content.style.opacity = `1`;
    }
    else if(percentageOfPage > 2112 && percentageOfPage <2212){
        caseStudy2Content.style.opacity = `${1-((percentageOfPage - 2112) * 0.01)}`;
    }
    else if(percentageOfPage < 1912 || percentageOfPage >= 2212){
        caseStudy2Content.style.opacity = `0`;
    }
}
window.addEventListener("scroll", scrollHolder);

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
    jQuery('.body').addClass("dark");    
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
    jQuery('.body').removeClass("dark");    
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
window.addEventListener("onload", getDarkOrDayMode(hour > 7 && hour < 19));

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

function clickOnCaseStudy() {
    const componentContainer = $(".component-container-beyond-banking");
    const componentContainerHeight = componentContainer.offsetHeight;
    window.scrollTo(0, (2112 * componentContainerHeight)/100);
}

