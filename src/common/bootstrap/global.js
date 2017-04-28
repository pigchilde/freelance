/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * global times
 * 时间格式化
 * @param d
 * @returns {string}
 */
global.times = function(d, sec) {
    var time;
    var date = new Date(d);
    var y = date.getFullYear();
    var M = date.getMonth() + 1;
    M = M < 10 ? "0" + M : M;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    var m = date.getMinutes();
    m = m < 10 ? "0" + m : m;
    var s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    if (sec) {
        time = y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
    } else {
        time = y + "-" + M + "-" + d + " " + h + ":" + m;
    }

    return time;
}