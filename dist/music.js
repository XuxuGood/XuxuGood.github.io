const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  lrcType: 0,
  audio: [
    {

      name: "可乐",
      artist: '赵紫骅',
      url: 'https://music.163.com/song/media/outer/url?id=1340200924.mp3',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570966378367&di=60f58c729a4ccb2b4f1ffc9beb037506&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fupload%2F20170714%2F5f31daed5bbf49caa3e4b8067f0b800f_th.jpg',
      //lrc: '',
    },
    // {
    //   name: '第三极',
    //   artist: '许巍',
    //   url: 'http://www.ytmp3.cn/down/31601.mp3',
    //   cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    // },
    {
      name: '我的新衣',
      artist: 'VaVa毛衍七/Ty./王倩倩',
      url: 'https://music.163.com/song/media/outer/url?id=509753804.mp3',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570967152839&di=213c9d209fcf02f09d337341a10503b6&imgtype=0&src=http%3A%2F%2Flastfm-img2.akamaized.net%2Fi%2Fu%2F300x300%2F42c2efe5acfc2ce734a2a274726358f4.jpg',
    },
    {
      name: '这一生关于你的风景',
      artist: '枯木逢春',
      url: 'https://music.163.com/song/media/outer/url?id=1356350562.mp3',
      cover: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570967320544&di=8d8c8ab1291338c013b120db1eb6b5aa&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Ff603918fa0ec08fa3139e00153ee3d6d55fbda5f.jpg',
    }
    // ,
    // {
    //   name: 'My Love',
    //   artist: 'Westlife',
    //   url: 'http://www.ytmp3.cn/down/50091.mp3',
    //   cover: 'https://s2.ax1x.com/2019/08/08/e7M5VK.png',
    // }
  ]
});
