/**
 * Created by awu on 2016-12-21.
 */
$(function () {
    var container = $('.container');
    var list = $('<ul class="list"></ul>');
    var page = $('.page');
    var clockWrap = $('.clock-wrap');
    var clockEl = $('.clock');
    var offDuty = $('.off-duty');
    var colorArray = ['aqua', 'bisque', 'darkgoldenrod', 'chocolate', 'darkorchid', 'darkseagreen', 'dodgerblue'];
    var onDutyTime = '09:00:00';
    var offDutyTime = '18:00:00';

    function generateRainbow(array) {
        list.html('');
        for (var i = 0; i < array.length; i++) {
            list.append('<li class="rb-item" style="background-color: ' + array[i] + ';height: ' + (100 / array.length) + '%;"></li>');
        }
    }

    if (container) {
        generateRainbow(colorArray);
        list.appendTo(container);

    }
    var clock;

    var date = new Date();

    clock = clockEl.FlipClock(date, {
        clockFace: 'TwentyFourHourClock',
        callbacks: {
            interval: function () {
                var timeObj = this.factory.getTime();
                var time = timeObj.time;

                var date = new Date(time);
                var dailyTimeStr = getDailyTimeStr(date);
                if (!time) {
                    return;
                }
                if (dailyTimeStr >= offDutyTime && dailyTimeStr <= '23:59:59' ||
                    dailyTimeStr >= '00:00:00' && dailyTimeStr < onDutyTime) {
                    clockEl.hide();
                    offDuty.show();
                } else if (dailyTimeStr < offDutyTime && dailyTimeStr >= onDutyTime) {
                    clockEl.show();
                    offDuty.hide();
                }
            }
        }
    });

    function formatTimeStr(timeInt) {
        return timeInt < 10 ? '0' + timeInt : timeInt;
    }

    function getDailyTimeStr(date) {
        var hour = formatTimeStr(date.getHours());
        var minute = formatTimeStr(date.getMinutes());
        var second = formatTimeStr(date.getSeconds());

        return hour + ':' + minute + ':' + second;
    }

    clockWrap.draggable();

});