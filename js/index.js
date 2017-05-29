//倒计时
countDown();
function countDown() {
    var oDay = $id('time-d').getElementsByTagName('span')[0];
    var oHour = $id('time-h').getElementsByTagName('span')[0];
    var oMinute = $id('time-m').getElementsByTagName('span')[0];
    var oSecond = $id('time-s').getElementsByTagName('span')[0];
    update();
    setInterval(update, 1000);
    function update() {
        var futureTime = new Date(2017, 6, 23, 0, 0, 0).getTime(); //未来事件
        var nowTime = new Date().getTime(); //当前时间
        var iRemain = (futureTime - nowTime) / 1000;
        //console.log(iRemain,oDay.innerHTML);
        //倒计时的计算
        var iDay = parseInt(iRemain / 86400);
        iRemain %= 86400;
        var iHour = parseInt(iRemain / 3600);
        iRemain %= 3600;
        var iMin = parseInt(iRemain / 60);
        iRemain %= 60;
        var iSec = parseInt(iRemain);
        //html
        oDay.innerHTML = fillZero(iDay, 2);
        oHour.innerHTML = fillZero(iHour, 2);
        oMinute.innerHTML = fillZero(iMin, 2);
        oSecond.innerHTML = fillZero(iSec, 2);
    }

    //补0
    function fillZero(num, digit) {
        var str = '' + num;

        while (str.length < digit) {
            str = '0' + str;
        }

        return str;
    }
}

function $id(id) {
    return document.getElementById(id);
}
