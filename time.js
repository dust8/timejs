(function() {
    var Time = Time || {};

    Time.getTime = function(){
        var d = new Date();
        return d.getTime()
    };

    Time.fromNow = function(time){
        // time必须是毫秒
        var curTime, diff;

        curTime = Time.getTime();
        diff = curTime - time;

        if (0 > diff){
            return '出错了';
        }else if (1000 * 60 > diff) {
            return "刚刚";
        } else if (1000 * 60 <= diff && 1000 * 60 * 60 > diff) {
            return parseInt(diff / (1000 * 60)) + "分钟前";
        } else if (1000 * 60 * 60 <= diff && 1000 * 60 * 60 * 24 > diff) {
            return parseInt(diff / (1000 * 60 * 60)) + "小时前";
        } else if (1000 * 60 * 60 * 24 <= diff && 1000 * 60 * 60 * 24 * 30 > diff) {
            return parseInt(diff / (1000 * 60 * 60 * 24)) + "天前";
        } else if (1000 * 60 * 60 * 24 * 30 <= diff && 1000 * 60 * 60 * 24 * 30 * 12 > diff) {
            return parseInt(diff / (1000 * 60 * 60 * 24 * 30)) + "月前";
        } else {
            return parseInt(diff / (1000 * 60 * 60 * 24 * 30 * 12)) + "年前";
        }

    };
    
    // 注册命名空间到window对象上
    window["Time"] = Time;
})();