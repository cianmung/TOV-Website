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

//------------------------------------------------------------------

const $ = document.querySelector.bind(document);
const componentContainer = $(".component-container-beyond-banking");
const componentContainerHeight = componentContainer.offsetHeight;
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
const comePartnerUsFirstPage2ndRow = $(".come-partner-us-content-first-page-1-row2-content");
const comePartnerUsSecondPage1stRow = $(".come-partner-us-content-second-page-1-row-content");
const comePartnerUsSecondPage2ndRow = $(".come-partner-us-content-second-page-2-row-content");

function scrollHolder() {
    const scroll = window.scrollY;
    const percentage = (scroll/ componentContainerHeight) * 100;
    const percentageOfPage = parseInt(percentage);
    console.log(percentageOfPage);

    beyondBankingFirstText.style.transform = `translate3d(0,${-percentageOfPage * 5}px, 0)`;
    beyondBankingFirstText.style.opacity = `${ 1- (percentageOfPage * 0.02)}`;

    if(percentageOfPage >= 50 && percentageOfPage < 200) {
        weBelieveInThePowerOfFirstText.style.opacity = `${percentageOfPage * 0.005}`;

    }
    else if(percentageOfPage >= 200 && percentageOfPage < 512){
        weBelieveInThePowerOfFirstText.style.opacity = `1`;
    }
    else if(percentageOfPage > 512 && percentageOfPage < 612){
        weBelieveInThePowerOfFirstText.style.opacity = `${1-((percentageOfPage - 512) * 0.01)}`;
    }
    else if (percentageOfPage < 50 || percentageOfPage > 612) {
        weBelieveInThePowerOfFirstText.style.opacity = `0`;
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
        console.log(`${(percentageOfPage - 612) * 0.02}`);
    }
    else if(percentageOfPage >= 662 && percentageOfPage < 812) {
        beyondBankingVideoTitle.style.opacity = `1`;
    }
    else if (percentageOfPage >= 812 && percentageOfPage < 912) {
        beyondBankingVideoTitle.style.opacity = `${1-((percentageOfPage - 812) * 0.01)}`;
    }
    else if(percentageOfPage < 612 || percentageOfPage >= 912) {
        beyondBankingVideoTitle.style.opacity = `0`;
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

    if(percentageOfPage >= 912 && percentageOfPage < 965){
        comePartnerUsTitleText.style.opacity = `${(percentageOfPage - 912) * 0.02}`;
    }
    else if(percentageOfPage >= 965 && percentageOfPage < 1712) {
        comePartnerUsTitleText.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1712 && percentageOfPage < 1812) {
        comePartnerUsTitleText.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
    }
    else if(percentageOfPage < 912 || percentageOfPage >= 1812) {
        comePartnerUsTitleText.style.opacity = `0`;
    }

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

    // Red-line Separator first line
    if(percentageOfPage >= 1038 && percentageOfPage < 1084){
        comePartnerUsSeparator.style.height = `${(percentageOfPage - 1038) * 4.7}px`;
    }
    else if (percentageOfPage >= 1084 && percentageOfPage < 1184) {
        comePartnerUsSeparator.style.height = `216px`;
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

    // Red-line Separator second line
    if(percentageOfPage >= 1118 && percentageOfPage < 1173){
        comePartnerUsSeparator.style.height = `${((percentageOfPage - 1118) * 4.7) + 216}px`;
    }
    else if (percentageOfPage >= 1173 && percentageOfPage < 1312) {
        comePartnerUsSeparator.style.height = `470px`;
        comePartnerUsSeparator.style.opacity = `1`;
    }
    else if(percentageOfPage >= 1312 && percentageOfPage < 1412) {
        comePartnerUsSeparator.style.opacity = `${1-((percentageOfPage - 1312) * 0.02)}`;
        comePartnerUsSeparator.style.height = `${470 - ((percentageOfPage - 1312) * 4.7)}px`;
    }
    else if(percentageOfPage < 1038 || percentageOfPage >= 1412) {
        comePartnerUsSeparator.style.height = `0`;
    }

    if(percentageOfPage >= 1173 && percentageOfPage < 1213){
        comePartnerUsFirstPage2ndRow.style.opacity = `${(percentageOfPage - 1173) * 0.025}`;
        console.log(`${(percentageOfPage - 1173) * 0.025}`);
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

    //Come Partner Us second page first row
    if (percentageOfPage > 1412 && percentageOfPage < 1451){
        comePartnerUsSecondPage1stRow.style.opacity = `${(percentageOfPage - 1412) * 0.025}`;
    }
    else if(percentageOfPage >= 1451 && percentageOfPage){
        comePartnerUsSecondPage1stRow.style.opacity = `1`;
    }
    else if(percentageOfPage > 1712){
        comePartnerUsSecondPage1stRow.style.opacity = `${1-((percentageOfPage - 1712) * 0.01)}`;
    }
    else if (percentageOfPage < 1412){
        comePartnerUsSecondPage1stRow.style.opacity = `0`;
    }

    // regional icon
    if(percentageOfPage > 1451 && percentageOfPage < 1484){
        iconRegional.style.opacity = `${(percentageOfPage - 1451) * 0.03}`;
        console.log(`${(percentageOfPage - 1451) * 0.03}`);
    }
    else if (percentageOfPage >= 1484) {
        iconRegional.style.opacity = `1`;
    }
    else if(percentageOfPage < 1451) {
        iconRegional.style.opacity = `0`;
    }

    //second page first line separator
    if(percentageOfPage > 1484 && percentageOfPage < 1530){
        comePartnerUsSeparator.style.opacity = `1`;
        comePartnerUsSeparator.style.height = `${(percentageOfPage - 1484) * 4.7}px`;
    }
    else if(percentageOfPage >= 1530) {
        comePartnerUsSeparator.style.height = `216px`;
    }

    // data icon
    if(percentageOfPage > 1530 && percentageOfPage < 1563) {
        iconData.style.opacity = `${(percentageOfPage - 1530) * 0.03}`;
        console.log(`${(percentageOfPage - 1530) * 0.03}`);
    }
    else if(percentageOfPage >= 1563){
        iconData.style.opacity = `1`;
    }
    else if(percentageOfPage < 1530) {
        iconData.style.opacity = `0`;
    }

    // second page second line separator
    if(percentageOfPage > 1563 && percentageOfPage < 1617) {
        comePartnerUsSeparator.style.height = `${((percentageOfPage - 1563) * 4.7) + 216}px`;
        console.log(`${((percentageOfPage - 1563) * 4.7) + 216}px`);
    }
    else if (percentageOfPage >= 1617) {
        comePartnerUsSeparator.style.height = `470px`;
    }

    // Come Partner Us second page second row
    if(percentageOfPage > 1617 && percentageOfPage < 1658) {
        comePartnerUsSecondPage2ndRow.style.opacity = `${(percentageOfPage - 1617) * 0.025}`;
    }
    else if(percentageOfPage > 1658) {
        comePartnerUsSecondPage2ndRow.style.opacity = `1`;
    }
    else if(percentageOfPage < 1617) {
        comePartnerUsSecondPage2ndRow.style.opacity = `0`;
    }

}

window.addEventListener("scroll", scrollHolder);