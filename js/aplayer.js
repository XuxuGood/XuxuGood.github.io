// 播放/暂停
function aplayerToggle() {
    let ap = document.querySelector('meting-js').aplayer;
    if (ap != undefined) {
        ap.toggle();
    }
    // 切换播放/暂停按钮
    togglePlayPauseStyle()
}

// 上一曲
function aplayerBackward() {
    let ap = document.querySelector('meting-js').aplayer;
    if (ap != undefined) {
        ap.skipBack();
        ap.play();
    }
    // 切换为暂停按钮
    selectPauseStyle()
}

// 下一曲
function aplayerForward() {
    let ap = document.querySelector('meting-js').aplayer;
    if (ap != undefined) {
        ap.skipForward();
        ap.play();
    }
    // 切换为暂停按钮
    selectPauseStyle()
}

// 调节音量
function aplayerVolume(percent) {
    let ap = document.querySelector('meting-js').aplayer;
    if (ap != undefined) {
        ap.volume(percent);
    }
}

// 播放/暂停 按钮状态样式需要切换
function togglePlayPauseStyle() {
    if (document.getElementById('aplay').style.display != 'none') {
        document.getElementById("aplay").style.display = 'none';
        document.getElementById("apause").style.display = '';
    } else {
        document.getElementById("aplay").style.display = '';
        document.getElementById("apause").style.display = 'none';
    }
}

// 上一曲/下一曲 按钮皆为暂停状态样式
function selectPauseStyle() {
    if (document.getElementById('aplay').style.display != 'none') {
        document.getElementById("aplay").style.display = 'none';
        document.getElementById("apause").style.display = '';
    }
}
