// build time:Mon Feb 03 2020 09:24:18 GMT+0000 (Coordinated Universal Time)
const live2d_path="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";$("<link>").attr({href:live2d_path+"waifu.css",rel:"stylesheet"}).appendTo("head");$.ajax({url:live2d_path+"live2d.min.js",dataType:"script",cache:true});$.ajax({url:live2d_path+"waifu-tips.js",dataType:"script",cache:true});$(window).on("load",function(){initWidget(live2d_path+"waifu-tips.json","https://live2d.fghrsh.net/api")});
//rebuild by neat 