// ==UserScript==
// @name         KissanimeHalalaiser
// @version      1.0
// @description  HideKissanimeAdds
// @author       Tasnim Ferdous
// @match        https://kissanime.ru/*
// @match        http://kissanime.ru/*
// @require      hidemethods.js
// @grant        GM_addStyle
// ==/UserScript==

var fast=0,clickhideonly=0,blockall=1,hideAddsOnAllPages=0; //set your chosen method to 1

/*
   Note :
   This script does not do anything to pop-ups,so if something like Hydrax/Nova server is your default than there's not much use.
   1.only blockall works on all pages of kissanime as default the rest works for the video-playback page only;
   2.the safest method is clickhideonly;
   3.fast is similar to clickhideonly but much faster and less safer but safer than blockall;

   hideAddsOnAllPages works the same way as blockall,the risk-level is the same,so why does it exist? well,the options there,you can use it or not.

   my suggestion would be:
   If your inernet speed is good(6/7Mbps+) at the time of using kissanime just use clickhideonly;
*/












(function(){

    if(blockall){
        hideframe();
    }
    else if(fast || clickhideonly){
        addhide();
    }

    if(hideAddsOnAllPages && !blockall){
        hideOnAllpages();
    }

})();
