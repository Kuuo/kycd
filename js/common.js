function get_day(target) {
    var ky = new Date(target)
    var now = new Date()
    var diffsec = (ky - now) / 1000
    var day = parseInt(diffsec / 24 / 3600)
    return day
}

function set_bgi(id, day) {
    var srcbase = "http://pem26iqr1.bkt.clouddn.com/"
    var psrc = srcbase + data[day]
    $('#' + id).css('background-image', 'url(\'' + psrc + '\')')
}

function update_pos() {
    var wh = window.innerHeight
    var oh = $('.ct').height()
    var m = (wh - oh) / 2
    $('.ct').css('margin-top', m)
}

$(() => {
    update_pos()
    window.onresize = () => {
        update_pos()
    }

    var day = get_day("2018-12-23")
    $('#cdday').html(day)
    set_bgi('bgi', day)
})