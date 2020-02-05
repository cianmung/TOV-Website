// set up text to print, each item in array is new line
var aText = new Array(
    "A Permanent Call",
    "For Open Innovation"
    );
    var iSpeed = 80; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
    
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
    var value = '';
    var destination = document.getElementById("firstHeader");
    
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
    
//------------------------------------------------------------

const $ = document.querySelector.bind(document);
const aboutUsTitle = $(".about-us-title");
const aboutUsContentVideo = $(".about-us-content-video");
const aboutUsParagraph = $(".about-us-paragraph");
const ar = $(".how-we-will-be-bank-of-future--circle-wrapper");
const row = $(".container-row-wrapper");
const row1 = $(".row1");
const row2 = $(".row2");
const row3 = $(".row3");
const meetMyTeamWrapper1 = $(".component-container-about-us-meet-the-team-wrapper1");
const meetMyTeamWrapper2 = $(".component-container-about-us-meet-the-team-wrapper2");
const meetMyTeam = $(".meet-the-team");
const meetMyTeamText = $(".meet-the-team-text-background");
const imageRow = $(".image-row-fixed");
const imageRow1 = $(".image-row1-fixed");
const awardContainerWrapper = $(".award-container-wrapper");
const contactFirstColumn = $(".contact-first-column");
const contactSecondColumn = $(".contact-second-column");
const contactThirdColumn = $(".contact-third-column");
const contactFourthColumn = $(".contact-fourth-column");
const upperArrow = $(".arrow-container-up");
const arrow = $(".arrow-container");
const contactUsWrapper = $(".div-fixed-contact");
var today = new Date().toLocaleTimeString();

function scrollHolder() {
    const scroll = window.scrollY;
    const componentContainer = $(".component-container-about-us");
    const componentContainerHeight = componentContainer.offsetHeight;
    const percentageForAni = parseInt((scroll / componentContainerHeight) * 100);
    const percentageOfPageEnd = parseInt((((16 * componentContainerHeight) + 80) / componentContainerHeight) * 100);

    if(percentageForAni == percentageOfPageEnd){
        arrow.style.opacity = `0`;
    }
    else {
        arrow.style.opacity = `1`;
    }

    if (percentageForAni == 0) {
        upperArrow.style.opacity = `0`;
    } else {
        upperArrow.style.opacity = `1`;
    }

    if(percentageForAni > 150) {
        aboutUsTitle.style.display = 'none';
        aboutUsContentVideo.style.display = 'none';
        aboutUsParagraph.style.display = 'none';
    } else if (percentageForAni < 150) {
        aboutUsTitle.style.transform = `translate3d(${-percentageForAni * 5}px, 0, 0)`;
        aboutUsTitle.style.zIndex = `1`;
        aboutUsTitle.style.display = 'inline-block';
        aboutUsContentVideo.style.transform = `translate3d(${percentageForAni * 8}px, 0, 0)`;
        aboutUsContentVideo.style.zIndex = `1`;
        aboutUsContentVideo.style.display = 'inline-block';
        aboutUsParagraph.style.transform = `translate3d(${-percentageForAni * 7}px, 0, 0)`;
        aboutUsParagraph.style.zIndex = `1`;
        aboutUsParagraph.style.display = 'inline-block';
    }

    if (percentageForAni < 210 && percentageForAni > 0) {
        ar.style.opacity = `${(percentageForAni - 100) * 0.01}`;
        ar.style.zIndex = `0`;

        row.style.zIndex = `0`;
        row1.style.transform = `translate3d(${10 * ((percentageForAni - 210) * (-1))}px, 0, 0)`;
        row1.style.opacity = `${percentageForAni * 0.004}`;

        row2.style.transform = `translate3d(${10 * ((percentageForAni - 210) * (-1.5))}px, 0, 0)`;
        row2.style.opacity = `${percentageForAni * 0.004}`;

        row3.style.transform = `translate3d(${10 * ((percentageForAni - 210) * (-2))}px, 0, 0)`;
        row3.style.opacity = `${percentageForAni * 0.004}`;
    }
    else if (percentageForAni >= 210 && percentageForAni <= 310) {
        ar.style.opacity = `1`;
        ar.style.zIndex = `1`;

        row1.style.transform = `translate3d(0, 0, 0)`;
        row1.style.opacity = `1`;

        row2.style.transform = `translate3d(0, 0, 0)`;
        row2.style.opacity = `1`;

        row3.style.transform = `translate3d(0, 0, 0)`;
        row3.style.opacity = `1`;

        row.style.zIndex = `1`;

    }
    else if (percentageForAni > 310 && percentageForAni < 410) {
        ar.style.opacity = `${1 - (percentageForAni * 0.002)}`;
        ar.style.zIndex = `0`;
        row.style.zIndex = `0`;
        row1.style.transform = `translate3d(${(percentageForAni - 310) * (5)}px, 0, 0)`;
        row1.style.opacity = `${1 - (percentageForAni * 0.002)}`;
        row2.style.transform = `translate3d(${(percentageForAni - 310) * (8)}px, 0, 0)`;
        row2.style.opacity = `${1 - (percentageForAni * 0.002)}`;
        row3.style.transform = `translate3d(${(percentageForAni - 310) * (10)}px, 0, 0)`;
        row3.style.opacity = `${1 - (percentageForAni * 0.002)}`;
        row3.style.zIndex = `0`;
    }
    else if (percentageForAni > 410 || percentageForAni == 0) {
        ar.style.opacity = `0`;
        ar.style.zIndex = `0`;
        row.style.zIndex = `0`;
        row1.style.opacity = `0`;
        row2.style.opacity = `0`;
        row3.style.opacity = `0`;
    }

    if(percentageForAni > 410 && percentageForAni < 810){
        meetMyTeamWrapper1.style.zIndex = `1`;
    } 
    else {
        meetMyTeamWrapper1.style.zIndex = `0`;
    }

    if (percentageForAni > 410 && percentageForAni <= 510) {
        meetMyTeamText.style.opacity = `${(percentageForAni - 357) * 0.006}`;
        meetMyTeam.style.zIndex = `1`;
    }

    else if (percentageForAni > 510 && percentageForAni < 1010) {
        meetMyTeamText.style.transform = `translate3d( 0, 0, 0)`;
        meetMyTeamText.style.opacity = `1`;
        meetMyTeamText.style.zIndex = `2`;
        meetMyTeam.style.zIndex = `1`;
    }

    else if (percentageForAni > 1010 && percentageForAni < 1110) {
        meetMyTeamText.style.opacity = `${1 - ((percentageForAni - 1010) * 0.02)}`;
        meetMyTeamText.style.zIndex = `1`;
    }

    else if (percentageForAni < 710 || percentageForAni > 1110) {
        meetMyTeamText.style.opacity = `0`;
        meetMyTeam.style.zIndex = `0`;
    }


    if (percentageForAni >= 510 && percentageForAni < 610) {
        imageRow.style.opacity = `${(percentageForAni - 503) * 0.01}`;
        imageRow.style.zIndex = `0`;
    }

    else if (percentageForAni >= 610 && percentageForAni <= 710) {
        imageRow.style.transform = `translate3d(0, 0, 0)`;
        imageRow.style.opacity = `1`;
        imageRow.style.zIndex = `1`;
    }

    else if (percentageForAni > 710 && percentageForAni < 810) {
        imageRow.style.opacity = `${1 - ((percentageForAni - 710) * 0.015)}`;
        imageRow.style.zIndex = `0`;
    }

    else if (percentageForAni < 510 || percentageForAni > 810) {
        imageRow.style.opacity = `0`;
        imageRow.style.zIndex = `0`;
    }

    if(percentageForAni > 810 && percentageForAni < 1110){
        meetMyTeamWrapper2.style.zIndex = `1`;
    } 
    else {
        meetMyTeamWrapper2.style.zIndex = `0`;
    }

    if (percentageForAni >= 810 && percentageForAni < 910) {
        imageRow1.style.opacity = `${(percentageForAni - 810) * 0.01}`;
        imageRow1.style.zIndex = `0`;
    }

    else if (percentageForAni >= 910 && percentageForAni <= 1010) {
        imageRow1.style.transform = `translate3d(0, 0, 0)`;
        imageRow1.style.opacity = `1`;
        imageRow1.style.zIndex = `1`;
    }

    else if (percentageForAni > 1010 && percentageForAni < 1110) {
        imageRow1.style.opacity = `${1 - ((percentageForAni - 1010) * 0.02)}`;
        imageRow1.style.zIndex = `0`;
    }

    else if (parseInt(`${scroll}`) < 810 || parseInt(`${scroll}`) > 1110) {
        imageRow1.style.opacity = `0`;
        imageRow1.style.zIndex = `0`;
    }
    console.log(parseInt(percentageForAni));

    if(percentageForAni >= 1110 && percentageForAni <= 1210){
        awardContainerWrapper.style.zIndex = `1`;
        awardContainerWrapper.style.opacity = `${(percentageForAni - 1110) * 0.01}`;
    } 
    else if(percentageForAni > 1210 && percentageForAni <= 1300) {
        awardContainerWrapper.style.opacity = `1`;
        awardContainerWrapper.style.zIndex = `1`;
    } 
    else if (percentageForAni > 1300 && percentageForAni <= 1350) {
        awardContainerWrapper.style.opacity = `${1 - ((percentageForAni - 1300) * 0.02)}`;
        awardContainerWrapper.style.zIndex = `1`;
    } 
    else if (percentageForAni > 1350 || percentageForAni < 1110){
        awardContainerWrapper.style.opacity = `0`;
        awardContainerWrapper.style.zIndex = `0`;
    }

    if (percentageForAni > 1350) {
        contactFirstColumn.style.zIndex = `4`;
        contactSecondColumn.style.zIndex = `3`;
        contactThirdColumn.style.zIndex = `2`;
        contactFourthColumn.style.zIndex = `1`;
        contactUsWrapper.style.zIndex = `1`;
        contactFirstColumn.style.opacity = `1`;

        if (parseInt(`${percentageForAni - 1400}`) < 0) {
            contactSecondColumn.style.transform = `translate3d(${(5 * (percentageForAni - 1400))}px, 0, 0)`;
            contactSecondColumn.style.opacity = `1`;
        }
    
        else if (parseInt(`${percentageForAni - 1400}`) == 0 || parseInt(`${percentageForAni - 1400}`) > 0) {
            contactSecondColumn.style.transform = `translate3d(0, 0, 0)`;
            contactSecondColumn.style.opacity = `1`;
        }

        if (parseInt(`${percentageForAni - 1450}`) < 0) {
            contactThirdColumn.style.transform = `translate3d(${(5 * (percentageForAni - 1450))}px, 0, 0)`;
            contactThirdColumn.style.opacity = `1`;
        }
        
        else if (parseInt(`${percentageForAni - 1450}`) == 0 || parseInt(`${percentageForAni - 1450}`) > 0) {
            contactThirdColumn.style.transform = `translate3d(0, 0, 0)`;
            contactThirdColumn.style.opacity = `1`;
        }

        if (parseInt(`${percentageForAni - 1530}`) < 0) {
            contactFourthColumn.style.transform = `translate3d(${(8 * (percentageForAni - 1530))}px, 0, 0)`;
            contactFourthColumn.style.opacity = `1`;
        }

        else if (parseInt(`${percentageForAni - 1530}`) == 0 || parseInt(`${percentageForAni - 1530}`) > 0) {
            contactFourthColumn.style.transform = `translate3d(0, 0, 0)`;
            contactFourthColumn.style.opacity = `1`;
        }

    }
    else if (parseInt(`${percentageForAni}`) < 1350) {
        contactFirstColumn.style.opacity = `0`;
        contactSecondColumn.style.opacity = `0`;
        contactThirdColumn.style.opacity = `0`;
        contactFourthColumn.style.opacity = `0`;
        contactUsWrapper.style.zIndex = `0`;
    }
}
window.addEventListener("scroll", scrollHolder);


function addDarkMode() {
    const nightMode = $('#nightMode');
    const dayMode = $('#dayMode');
    const darkModeSwitch = $('.circle-dark-mode-switch');

    //add dark mode
    console.log("Dark Mode is on!");
    if (sessionStorage["darkModeClicked"]) {
        sessionStorage["darkMode"] = "on";
    }
    else {
        sessionStorage.removeItem("darkMode");
    }
    jQuery('.component-container-about-us').addClass("dark");
    jQuery('.navbar-container').addClass("dark");
    jQuery('.meet-the-team').addClass("dark");
    jQuery('.arrow').addClass("dark");
    jQuery('.row').addClass("dark");
    jQuery('.switch-mode').addClass("dark");
    jQuery('.about-us-content-video').addClass("dark");
    jQuery('.award-image-wrapper').addClass("dark");
    jQuery('.make-row').addClass("dark");
    jQuery('.body').addClass("dark");
    jQuery('.navbar-menu-icon').addClass("dark");
    dayMode.style.backgroundColor = `transparent`;
    nightMode.style.backgroundColor = `#fff`;
    darkModeSwitch.style.border = `1px solid #fff`;
    darkModeSwitch.style.borderRight = `none`;
    darkModeSwitch.style.backgroundColor = `#808080`;
}


function addLightMode() {
    const nightMode = $('#nightMode');
    const dayMode = $('#dayMode');
    const darkModeSwitch = $('.circle-dark-mode-switch');

    //remove dark mode
    console.log("Dark Mode is off!");
    if (sessionStorage["darkModeClicked"]) {
        sessionStorage["darkMode"] = "off";
    }
    else {
        sessionStorage.removeItem("darkMode");
    }
    jQuery('.component-container-about-us').removeClass("dark");
    jQuery('.navbar-container').removeClass("dark");
    jQuery('.meet-the-team').removeClass("dark");
    jQuery('.arrow').removeClass("dark");
    jQuery('.row').removeClass("dark");
    jQuery('.switch-mode').removeClass("dark");
    jQuery('.about-us-content-video').removeClass("dark");
    jQuery('.award-image-wrapper').removeClass("dark");
    jQuery('.make-row').removeClass("dark");
    jQuery('.navbar-menu-icon').removeClass("dark");
    jQuery('.body').removeClass("dark");    
    dayMode.style.backgroundColor = `#000`;
    nightMode.style.backgroundColor = `transparent`;
    darkModeSwitch.style.border = `1px solid #000`;
    darkModeSwitch.style.borderRight = `none`;
    darkModeSwitch.style.backgroundColor = `#C5C5C5`;
}

function getDarkOrDayMode(input) {
    if (input === false) {
        if (sessionStorage["darkMode"] === "on" && sessionStorage["darkModeClicked"]) {
            addDarkMode();
        } else if (sessionStorage["darkMode"] === "off" && sessionStorage["darkModeClicked"]) {
            addLightMode();
        } else {
            addDarkMode();
        }
    }
    else if (input === true) {
        if (sessionStorage["darkMode"] === "on" && sessionStorage["darkModeClicked"]) {
            addDarkMode();
        } else if (sessionStorage["darkMode"] === "off" && sessionStorage["darkModeClicked"]) {
            addLightMode();
        } else {
            addLightMode();
        }
    }
}


function ampmTo24(time) {
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var AP = time.match(/\s(.*)$/);
    if (!AP) AP = time.slice(-2);
    else AP = AP[1];
    if (AP == "PM" && hours < 12) hours = hours + 12;
    if (AP == "AM" && hours == 12) hours = hours - 12;
    var Hours24 = hours.toString();
    var Minutes24 = minutes.toString();
    if (hours < 10) Hours24 = "0" + Hours24;
    if (minutes < 10) Minutes24 = "0" + Minutes24;

    return Hours24 + ":" + Minutes24
}

var today = new Date().toLocaleTimeString();
var today1 = ampmTo24(today);
var hour = today1.split(":")[0];
var day = hour > 7 && hour < 19;
window.addEventListener("onload", getDarkOrDayMode(day));

function darkModeOn(props) {
    sessionStorage["darkModeClicked"] = true;
    if (props.id === "nightMode") {
        addDarkMode();
    } else {
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