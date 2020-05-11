// ==UserScript==
// @name         KissanimeHalalaiser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  HideKissanimeAdds
// @author       Tasnim Ferdous
// @match        https://kissanime.ru/*
// @match        http://kissanime.ru/*
// @run-at       document-start
// @require      hidemethods.js
// @grant        remove
// ==/UserScript==

var fast=0,clickhideonly=0,blockall=1; //set your chosen method to 1

/*
   Note :
   1.only blockall works on all pages of kissanime the rest works for the video-playback page only;
   2.The safest method is clickhideonly;
   3.fast is similar to clickhideonly but much faster and less safer but safer than blockall;

   suggestion:
   If your inernet speed is good(6/7Mbps+) at the time of using kissanime just use clickhideonly;
*/

(function(){
    if(blockall){
        hideframe();
    }
    else {
        addhide();
    }
})();

