// ==UserScript==
// @name         自动弹框 Jaeger
// @namespace    https://github.com/jae-jae
// @version      0.1
// @description  自动弹框，QQ:734708094
// @author       You
// @match        http*://*/*
// @require      https://cdn.bootcss.com/jquery/2.2.4/jquery.min.js
// @require      https://raw.githubusercontent.com/jeresig/jquery.hotkeys/master/jquery.hotkeys.js
// @grant        none
// ==/UserScript==

(function() {
    var urls = [
        'https://www.baidu.com/',
        'http://www.qq.com/'
    ];

    function in_array(search,array)
    {
        for(var i in array){
            if(array[i]==search){
                return true;
            }
        }
        return false;
    }

    if(in_array(location.href,urls)){
      alert(1);
    }

    $(document).bind('keydown', 'ctrl+a', function(){
        urls.map(function(url){
           window.open(url);
        });
    });

})();