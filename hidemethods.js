function addhide(){

    function clickHide(){
        var x=document.getElementsByClassName("divCloseBut");
        for(var i=0;i<x.length;i++){
            var y=x[i].getElementsByTagName("a");
            for(var j=0;j<y.length;j++){
                y[j].onclick();
            }
        }
    }

    function cleanclutter(){
        for(var i="1";i<=20;i++){
            if(document.getElementById("adsIfrme"+i)){
                document.getElementById("adsIfrme"+i).remove();
            }
        }
    }

    function cleanadframe(){
        for(var i=0;i<500;i+=100){
            setTimeout(function(){cleanclutter();},i);
        }
    };

    if(!clickhideonly) cleanadframe();

    window.addEventListener('load', function() {
        'use strict';
        if(document.getElementsByClassName("glx-close")){
            document.getElementsByClassName("glx-close")[0].click();
        }
        for(var i=0;i<=5000;i+=500){
            setTimeout(function() {
                clickHide();
            }, i);
        }

    }, false);
}

function hideframe(){
    (function() {
        'use strict';
        var url = location.href;
        var server = url.split("&s=");

        if(server.length==1 || server[1].startsWith('beta') || server[1].startsWith('def')){
            addcssinHead('iframe{display:none !important;}');
        } else {
            return addhide();
            alert("Chose beta server if possible in case video doesn't work");
        }

        window.addEventListener(
            'load',function(){
                document.getElementsByClassName("glx-close")[0].click();
            }
        )
    })();

    function addcssinHead(elm){
        var x=document.getElementsByTagName("head")[0];
        x.innerHTML+=`<style>${elm}</style>`;
    }
}
