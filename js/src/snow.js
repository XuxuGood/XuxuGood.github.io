// build time:Tue Jan 07 2020 08:53:24 GMT+0000 (Coordinated Universal Time)
(function(n){n.fn.snow=function(o){var e=n('<div id="snowbox" />').css({position:"absolute","z-index":"-1",top:"-50px"}).html("&#10052;"),t=n(document).height(),i=n(document).width(),a={minSize:10,maxSize:20,newOn:1e3,flakeColor:"#AFDAEF"},o=n.extend({},a,o);var m=setInterval(function(){var a=Math.random()*i-100,m=.5+Math.random(),r=o.minSize+Math.random()*o.maxSize,d=t-200,c=a-500+Math.random()*500,f=t*10+Math.random()*5e3;e.clone().appendTo("body").css({left:a,opacity:m,"font-size":r,color:o.flakeColor}).animate({top:d,left:c,opacity:.2},f,"linear",function(){n(this).remove()})},o.newOn)}})(jQuery);$(function(){$.fn.snow({minSize:5,maxSize:50,newOn:300})});
//rebuild by neat 