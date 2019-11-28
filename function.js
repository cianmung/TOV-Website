/** code by webdevtrick ( https://webdevtrick.com ) **/
const $ = document.querySelector.bind(document);
const sc = $(".about-tittle-1");
const r = $(".about-tittle-2");
const o = $(".about-tittle-video");
const ll = $(".about-tittle-paragraph");
const ar = $(".how-we-will-be-bank-of-future--circle-wrapper");
const row = $(".container-row-wrapper");
const row1 = $(".row1");
const row2 = $(".row2");
const row3 = $(".row3");
const meetMyTeam = $(".meet-the-team");
const meetMyTeamText = $(".meet-the-team-text-background");
const imageRow = $(".image-row-fixed");
const imageRow1 = $(".image-row1-fixed");
const imageRow2 = $(".image-row2-fixed");
const imageRow3 = $(".image-row3-fixed");
const imageRow4 = $(".image-row4-fixed");
const contactFirstColumn = $(".contact-first-column");
const contactSecondColumn = $(".contact-second-column");
const contactThirdColumn = $(".contact-third-column");
const contactFourthColumn = $(".contact-fourth-column");
const upperArrow = $(".arrow-container-up");
const componentContainer = $(".component-container-about-us");
const componentContainerHeight = componentContainer.offsetHeight;
var today = new Date();
var getTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hour = getTime.split(":")[0];

function transformLetters() {
  const scroll = window.scrollY;

  //const percentage = ((componentContainerHeight + scroll)/ componentContainerHeight) * 100;
  const percentageForAni = (scroll/ componentContainerHeight) * 100;

  // console.log({AmountScrolled: scroll});

  sc.style.transform = `translate3d(${-percentageForAni*10}px, 0, 0)`;
  sc.style.zIndex = `1`;

  r.style.transform = `translate3d(${-percentageForAni*8}px, 0, 0)`;
  r.style.zIndex = `1`;

  o.style.transform = `translate3d(${percentageForAni*8}px, 0, 0)`;
  o.style.zIndex = `1`;

  ll.style.transform = `translate3d(${-percentageForAni*7}px, 0, 0)`;
  ll.style.zIndex = `1`;

//if(parseInt(`${scroll}`) < 1360 && parseInt(`${scroll}`) > 0){
if( percentageForAni < 210 && percentageForAni > 0){

  //ar.style.opacity = `${(scroll - 366) * 0.001}`;
  ar.style.opacity = `${percentageForAni * 0.005}`;
  ar.style.zIndex = `0`;

  row.style.zIndex = `0`;
  //row1.style.transform = `translate3d(${(scroll - 1366) * (-1) }px, 0, 0)`;
  row1.style.transform = `translate3d(${10 * ((percentageForAni - 210) * (-1)) }px, 0, 0)`;
  row1.style.opacity = `${percentageForAni * 0.004}`;

  row2.style.transform = `translate3d(${10 * ((percentageForAni - 210) * (-1.5))}px, 0, 0)`;
  row2.style.opacity = `${percentageForAni * 0.004}`;

  row3.style.transform = `translate3d(${10 * ((percentageForAni - 210) * (-2))}px, 0, 0)`;
  row3.style.opacity = `${percentageForAni * 0.004}`;
 }

//else if(parseInt(`${scroll}`) >= 1360 && parseInt(`${scroll}`) <= 2014 ){
else if(percentageForAni >= 210 && percentageForAni <= 310 ){
  ar.style.opacity = `1`;
  ar.style.zIndex = `1`;

  row1.style.transform = `translate3d(0, 0, 0)`;
  row1.style.opacity= `1`;

  row2.style.transform = `translate3d(0, 0, 0)`;
  row2.style.opacity = `1`;

  row3.style.transform = `translate3d(0, 0, 0)`;
  row3.style.opacity = `1`;

  row.style.zIndex = `1`;

  }
//else if(parseInt(`${scroll}`) > 2014 && parseInt(`${scroll}`) < 2662) {
else if(percentageForAni > 310 && percentageForAni < 410) {
        //ar.style.transform = `translate3d(${(scroll - 1366)}px, 0, 0)`;
  ar.style.opacity = `${1-(percentageForAni * 0.002) }`;

  ar.style.zIndex = `0`;
  row.style.zIndex = `0`;
  //row1.style.transform = `translate3d(${(scroll - 2014) * (1.5) }px, 0, 0)`;
  row1.style.transform = `translate3d(${(percentageForAni - 288) * (5)}px, 0, 0)`;
  row1.style.opacity = `${1-(percentageForAni * 0.002)}`;

  //row2.style.transform = `translate3d(${(scroll - 2014) * (2) }px, 0, 0)`;
  row2.style.transform = `translate3d(${(percentageForAni - 288) * (8)}px, 0, 0)`;
  row2.style.opacity = `${1-(percentageForAni * 0.002)}`;

  //row3.style.transform = `translate3d(${(scroll - 2014) * (3) }px, 0, 0)`;
  row3.style.transform = `translate3d(${(percentageForAni - 288) * (10) }px, 0, 0)`;
  row3.style.opacity = `${1-(percentageForAni * 0.002)}`;
  row3.style.zIndex = `0`;
}
//else if(parseInt(`${scroll}`) > 2662 || parseInt(`${scroll}`) == 0){
else if(percentageForAni > 410 || percentageForAni == 0){
  ar.style.opacity = `0`;
  ar.style.zIndex = `0`;

  row.style.zIndex = `0`;
  row1.style.opacity = `0`;
  row2.style.opacity = `0`;
  row3.style.opacity = `0`;
}

//if (parseInt(`${scroll}`) > 2662 && parseInt(`${scroll}`) <=  3309 ) {
if (percentageForAni > 410 && percentageForAni <=  510 ) {
        meetMyTeamText.style.opacity = `${(percentageForAni - 357) * 0.006}`;
        meetMyTeam.style.zIndex = `0`;
}
//else if( parseInt(`${scroll}`) > 3309 && parseInt(`${scroll}`) < 12382 ) {
else if( percentageForAni > 510 && percentageForAni < 1910 ) {
        //meetMyTeamText.style.opacity = `${1-((scroll - 4600) * 0.001)}`;
        meetMyTeamText.style.transform = `translate3d( 0, 0, 0)`;
        meetMyTeamText.style.opacity = `1`;
        meetMyTeamText.style.zIndex = `2`;
        meetMyTeam.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) > 12382 && parseInt(`${scroll}`) < 13030){
else if (percentageForAni > 1910 && percentageForAni < 2010){
        //meetMyTeamText.style.opacity = `${1-((scroll - 12382) * 0.002)}`;
        meetMyTeamText.style.opacity = `${1-((percentageForAni - 1910) * 0.02)}`;
        meetMyTeamText.style.zIndex = `0`;
}
//else if ( parseInt(`${scroll}`) < 4600 || parseInt(`${scroll}`) > 13030) {
else if ( percentageForAni < 710 || percentageForAni > 2010) {
        meetMyTeamText.style.opacity=`0`;
        meetMyTeam.style.zIndex = `0`;
}

//if( parseInt(`${scroll}`) >= 3309 && parseInt(`${scroll}`) < 3957 ){
if( percentageForAni >= 510 && percentageForAni < 610 ){
        //imageRow.style.opacity = `${(scroll - 3257) * 0.002}`;
        imageRow.style.opacity = `${(percentageForAni - 503) * 0.01}`;
        imageRow.style.zIndex = `0`;
}
//else if ( parseInt(`${scroll}`) >= 3957 && parseInt(`${scroll}`) <= 4605) {
else if ( percentageForAni >= 610 && percentageForAni <= 710) {
        imageRow.style.transform = `translate3d(0, 0, 0)`;
        imageRow.style.opacity = `1`;
        imageRow.style.zIndex = `1`;
}
//else if (parseInt(`${scroll}`) > 4605 && parseInt(`${scroll}`) < 5254) {
else if (percentageForAni > 710 && percentageForAni < 810) {
        //imageRow.style.opacity = `${1-((scroll - 4605) * 0.002)}`;
        imageRow.style.opacity = `${1-((percentageForAni - 710) * 0.015)}`;
        imageRow.style.zIndex = `0`;
}
//else if( parseInt(`${scroll}`) < 3309 || parseInt(`${scroll}`) > 5254 ){
else if( percentageForAni < 510 || percentageForAni > 810 ){
        imageRow.style.opacity = `0`;
        imageRow.style.zIndex = `0`;
}

//if (parseInt(`${scroll}`) >= 5254 && parseInt(`${scroll}`) < 5902 ) {
if (percentageForAni >= 810 && percentageForAni < 910 ) {
    //imageRow1.style.transform = `translate3d(${scroll - 7847}px, 0, 0)`;
    imageRow1.style.opacity = `${(percentageForAni - 810) * 0.01}`;
    imageRow1.style.zIndex = `0`;
}
//else if(parseInt(`${scroll}`) >= 5902 && parseInt(`${scroll}`) <= 6550 ){
else if(percentageForAni >= 910 && percentageForAni <= 1010 ){
    imageRow1.style.transform = `translate3d(0, 0, 0)`;
    imageRow1.style.opacity = `1`;
    imageRow1.style.zIndex = `1`;
}
//else if(parseInt(`${scroll}`) > 6550 && parseInt(`${scroll}`) < 7200){
else if(percentageForAni > 1010 && percentageForAni < 1110){
    //imageRow1.style.opacity = `${1-((scroll - 6550) * 0.002)}`;
    imageRow1.style.opacity = `${1-((percentageForAni - 1010) * 0.013)}`;
    imageRow1.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) < 5254 || parseInt(`${scroll}`) > 7200) {
else if (parseInt(`${scroll}`) < 810 || parseInt(`${scroll}`) > 1110) {
    imageRow1.style.opacity = `0`;
    imageRow1.style.zIndex = `0`;
}

//if (parseInt(`${scroll}`) >= 7200 && parseInt(`${scroll}`) < 7845 ) {
if (percentageForAni >= 1110 && percentageForAni < 1210 ) {
    //imageRow2.style.opacity = `${(scroll - 7200) * 0.002}`;
    imageRow2.style.opacity = `${(percentageForAni - 1110) * 0.01}`;
    imageRow2.style.zIndex = `0`;
}
//else if(parseInt(`${scroll}`) >= 7845 && parseInt(`${scroll}`) <= 8492){
else if(percentageForAni >= 1210 && percentageForAni <= 1310){
    imageRow2.style.transform = `translate3d(0, 0, 0)`;
    imageRow2.style.opacity = `1`;
    imageRow2.style.zIndex = `1`;
}
//else if(parseInt(`${scroll}`) > 8492 && parseInt(`${scroll}`) < 9140){
else if(percentageForAni > 1310 && percentageForAni < 1410){
    //imageRow2.style.opacity = `${1-((scroll - 8492) * 0.002)}`;
    imageRow2.style.opacity = `${1-((percentageForAni - 1310) * 0.012)}`;
    imageRow2.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) < 7200 || parseInt(`${scroll}`) > 9140) {
else if (percentageForAni < 1110 || percentageForAni > 1410) {
    imageRow2.style.opacity = `0`;
    imageRow2.style.zIndex = `0`;
}

//if (parseInt(`${scroll}`) >= 9140 && parseInt(`${scroll}`) < 9790 ) {
if ( percentageForAni >= 1410 && percentageForAni < 1510 ) {
    //imageRow3.style.opacity = `${(scroll - 9140) * 0.002}`;
    imageRow3.style.opacity = `${(percentageForAni - 1410) * 0.01}`;
    imageRow3.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) >= 9790 && parseInt(`${scroll}`) <= 10436){
else if (percentageForAni >= 1510 && percentageForAni <= 1610){
    imageRow3.style.opacity = `1`;
    imageRow3.style.zIndex = `1`;
}
//else if (parseInt(`${scroll}`) > 10436 && parseInt(`${scroll}`) < 11086){
else if (percentageForAni > 1610 && percentageForAni < 1710){
    imageRow3.style.opacity = `${1-((percentageForAni - 1610) * 0.012)}`;
    imageRow3.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) < 9140 || parseInt(`${scroll}`) > 11086) {
else if (percentageForAni < 1410 || percentageForAni > 1710) {
    imageRow3.style.opacity = `0`;
    imageRow3.style.zIndex = `0`;
}

//if (parseInt(`${scroll}`) >= 11086 && parseInt(`${scroll}`) < 11734 ) {
if (percentageForAni >= 1710 && percentageForAni < 1810 ) {
    //imageRow4.style.opacity = `${(scroll - 11086) * 0.002}`;
    imageRow4.style.opacity = `${(percentageForAni - 1710) * 0.01}`;
    imageRow4.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) >= 11734 && parseInt(`${scroll}`) <= 12382){
else if (percentageForAni >= 1810 && percentageForAni <= 1910){
    imageRow4.style.opacity = `1`;
    imageRow4.style.zIndex = `1`;
}
//else if (parseInt(`${scroll}`) > 12382 && parseInt(`${scroll}`) < 13030){
else if (percentageForAni > 1910 && percentageForAni < 2010){
    //imageRow4.style.opacity = `${1-((scroll - 12382) * 0.002)}`;
    imageRow4.style.opacity = `${1-((percentageForAni - 1910) * 0.02)}`;
    imageRow4.style.zIndex = `0`;
}
//else if (parseInt(`${scroll}`) < 11086 || parseInt(`${scroll}`) > 13030) {
else if (percentageForAni < 1710 || percentageForAni > 2010) {
    imageRow4.style.opacity = `0`;
    imageRow4.style.zIndex = `0`;
}

//if( parseInt(`${scroll}`) > 13030 ) {
if( percentageForAni > 2010 ) {
    contactFirstColumn.style.zIndex = `4`;
    contactSecondColumn.style.zIndex = `3`;
    contactThirdColumn.style.zIndex = `2`;
    contactFourthColumn.style.zIndex = `1`;
    //contactFirstColumn.style.opacity = `${(scroll - 13030) * 0.009}`;
    contactFirstColumn.style.opacity = `1`;

    //if (parseInt(`${scroll - 13365}`)< 0) {
    if (parseInt(`${percentageForAni - 2062}`)< 0) {
        console.log(`${percentageForAni - 2062}`);
        //contactSecondColumn.style.transform = `translate3d(${(scroll - 13365)}px, 0, 0)`;
        contactSecondColumn.style.transform = `translate3d(${( 5 * (percentageForAni - 2062))}px, 0, 0)`;
        contactSecondColumn.style.opacity = `1`;
    }
    //else if (parseInt(`${scroll - 13365}`) == 0 || parseInt(`${scroll - 13365}`) > 0 ){
    else if (parseInt(`${percentageForAni - 2062}`) == 0 || parseInt(`${percentageForAni - 2062}`) > 0 ){
       contactSecondColumn.style.transform = `translate3d(0, 0, 0)`;
       contactSecondColumn.style.opacity = `1`;
    }

    //if (parseInt(`${scroll - 13680}`)< 0) {
    if (parseInt(`${percentageForAni - 2110}`)< 0) {
        contactThirdColumn.style.transform = `translate3d(${(5 * (percentageForAni - 2110))}px, 0, 0)`;
        contactThirdColumn.style.opacity = `1`;
    }
    //else if (parseInt(`${scroll - 13680}`) == 0 || parseInt(`${scroll - 13680}`) > 0 ){
    else if (parseInt(`${percentageForAni - 2110}`) == 0 || parseInt(`${percentageForAni - 2110}`) > 0 ){
       contactThirdColumn.style.transform = `translate3d(0, 0, 0)`;
       contactThirdColumn.style.opacity = `1`;
    }

    //if(parseInt(`${scroll - 14210}`)< 0){
    if(parseInt(`${percentageForAni - 2193}`)< 0){
        contactFourthColumn.style.transform = `translate3d(${(6 * (percentageForAni - 2193) )}px, 0, 0)`;
        contactFourthColumn.style.opacity = `1`;
    }
    //else if (parseInt(`${scroll - 14210}`) == 0 || parseInt(`${scroll - 14210}`) > 0 ) {
    else if (parseInt(`${percentageForAni - 2193}`) == 0 || parseInt(`${percentageForAni - 2193}`) > 0 ) {
        contactFourthColumn.style.transform = `translate3d(0, 0, 0)`;
        contactFourthColumn.style.opacity = `1`;
    }

    //contactSecondColumn.style.opacity = `${(scroll - 13030) * 0.003}`;
    //contactThirdColumn.style.opacity = `${(scroll - 13030) * 0.002}`;
    //contactFourthColumn.style.opacity = `${(scroll - 13030) * 0.001}`;

}
//else if (parseInt(`${scroll}`) < 13030) {
else if (parseInt(`${percentageForAni}`) < 2010) {
    contactFirstColumn.style.opacity = `0`;
    contactSecondColumn.style.opacity = `0`;
    contactThirdColumn.style.opacity = `0`;
    contactFourthColumn.style.opacity = `0`;
}

if(parseInt(`${percentageForAni}`) == 2310) {
    jQuery('.arrow-container').addClass("remove");

} else {
    jQuery('.arrow-container').removeClass("remove");
}

if(parseInt(`${percentageForAni}`) == 0) {
    jQuery('.arrow-container-up').addClass("remove");
    upperArrow.style.opacity = `0`;
} else {
    jQuery('.arrow-container-up').removeClass("remove");
    upperArrow.style.opacity = `0.5`;
}
}
window.addEventListener("scroll", transformLetters);

function getDarkOrDayMode(input) {
    var button = document.getElementById("dark-mode-switch");
    if(input === true){
        button.src = './images/night.jpg';
        jQuery('#dark-mode-toggle').attr("checked","checked");
        jQuery('#dark-mode-switch').addClass('active');
        //add dark mode
        console.log("Dark Mode is on!");
        jQuery('.component-container-about-us').addClass("dark");
        jQuery('.navbar-container').addClass("dark");
        jQuery('.meet-the-team').addClass("dark");
        jQuery('.arrow').addClass("dark");
        jQuery('.row').addClass("dark");
        jQuery('.switch-mode').addClass("dark");
        jQuery('.about-tittle-video').addClass("dark");
        jQuery('.award-image-wrapper').addClass("dark");
        jQuery('.make-row').addClass("dark");
    }
    else {
        button.src = './images/day.jpg';
        jQuery('#dark-mode-switch').removeClass('active');
        //remove dark mode
        console.log("Dark mode is off!");
        jQuery('.component-container-about-us').removeClass("dark");
        jQuery('.navbar-container').removeClass("dark");
        jQuery('.meet-the-team').removeClass("dark");
        jQuery('.arrow').removeClass("dark");
        jQuery('.row').removeClass("dark");
        jQuery('.switch-mode').removeClass("dark");
        jQuery('.about-tittle-video').removeClass("dark");
        jQuery('.award-image-wrapper').removeClass("dark");
        jQuery('.make-row').removeClass("dark");
    }
}

window.onload = function() {
      getDarkOrDayMode(hour < 7 && hour >= 19);
      console.log(hour < 7 && hour >= 19);
}

function darkModeOn() {
    var button = document.getElementById("dark-mode-switch");

    if(!jQuery('.switch-mode').hasClass("dark")){
        button.src = './images/night.jpg';
        //add dark mode
        console.log("Dark Mode is on!");
        jQuery('.component-container-about-us').addClass("dark");
        jQuery('.navbar-container').addClass("dark");
        jQuery('.meet-the-team').addClass("dark");
        jQuery('.arrow').addClass("dark");
        jQuery('.row').addClass("dark");
        jQuery('.switch-mode').addClass("dark");
        jQuery('.about-tittle-video').addClass("dark");
        jQuery('.award-image-wrapper').addClass("dark");
        jQuery('.make-row').addClass("dark");
    }else {
        button.src = './images/day.jpg';
        //remove dark mode
        console.log("Dark mode is off!");
        jQuery('.component-container-about-us').removeClass("dark");
        jQuery('.navbar-container').removeClass("dark");
        jQuery('.meet-the-team').removeClass("dark");
        jQuery('.arrow').removeClass("dark");
        jQuery('.row').removeClass("dark");
        jQuery('.switch-mode').removeClass("dark");
        jQuery('.about-tittle-video').removeClass("dark");
        jQuery('.award-image-wrapper').removeClass("dark");
        jQuery('.make-row').removeClass("dark");
    }



}