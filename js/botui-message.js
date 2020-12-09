$(function () {
    var botui = new BotUI("hello-xuxuy");
    botui.message.add({delay: 800, content: "Hi, there👋"}).then(function () {
        botui.message.add({delay: 1100, content: "这里是博主小屋✨ "}).then(function () {
            botui.message.add({delay: 1100, content: "一个积极向上的Boy~~"}).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{text: "然后呢？ 😃", value: "sure"}, {text: "少废话！ 🙄", value: "skip"}]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({delay: 600, content: "😘"}).then(function () {
            secondPart()
        })
    }, end = function () {
        botui.message.add({
            delay: 600,
            content: "告辞了您嘞！"
        })
    }, secondPart = function () {
        botui.message.add({delay: 1500, content: "现就职于百度"}).then(function () {
            botui.message.add({delay: 1500, content: "一枚标准90后程序猿"}).then(function () {
                botui.message.add({delay: 1200, content: "将敲代码看成一种快乐"}).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "拥有两年 Java 开发经验，熟练使用 Spring Boot 框架，了解 Redis 等缓存组件。对前后端分离模式，可视化开发深入理解，对 Vue 有丰富的开发经验，具备一定的框架设计能力。"
                    }).then(function () {
                        botui.message.add({delay: 1800, content: "喜欢健身、接触新事物、打游戏"}).then(function () {
                            botui.action.button({
                                delay: 1100,
                                action: [{text: "个人简介是什么呢？🤔", value: "what-info"}]
                            }).then(function () {
                                thirdPart()
                            })
                        })
                    })
                })
            })
        })
    }, thirdPart = function () {
        botui.message.add({delay: 1e3, content: "脚下的路如果不是你自己的选择，那旅程的终点在哪，也没人知道 ..."}).then(function () {
            botui.action.button({delay: 1500, action: [{text: "域名有什么含义吗？", value: "why-domain"}]}).then(function (a) {
                fourthPart()
            })
        })
    }, fourthPart = function () {
        botui.message.add({delay: 1e3, content: "emmmmm，当时喜欢玩联盟压缩（快乐风男），所以就以他的台词作为域名了，哈塞K"}).then(function () {
            botui.message.add({delay: 1600, content: "那么，相遇就是缘分，赏个赞吧 ^_^"})
        })
    }
})
