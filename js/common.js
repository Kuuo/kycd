function get_day(target) {
    var ky = new Date(target)
    var now = new Date()
    var diffsec = (ky - now) / 1000
    var day = parseInt(diffsec / 24 / 3600)
    return day
}

function set_bgi(id, day) {
    var srcbase = "	https://wallpapers-1253476926.cos.ap-shanghai.myqcloud.com/"
    day = day % 100 % 88;
    var psrc = srcbase + data[day]
    $('#' + id).css('background-image', 'url(\'' + psrc + '\')')
}

function update_pos() {
    var wh = window.innerHeight
    var oh = $('.ct').height()
    var m = (wh - oh) / 2
    $('.ct').css('margin-top', m)
}

function set_year() {
    document.getElementById('year').innerHTML = new Date().getFullYear() + 1
}

// $(() => {
update_pos()
window.onresize = update_pos

set_year();

var day = get_day("2019-12-22")
$('#cdday').html(day)
set_bgi('bgi', day)
// })
