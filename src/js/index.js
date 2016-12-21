/**
 * Created by awu on 2016-12-21.
 */
$(function () {
    var container = $('.container');
    var list = $('<ul class="list"></ul>');
    var page = $('.page');
    var clockEl = $('.clock');
    var colorArray = ['aqua', 'bisque', 'darkgoldenrod', 'chocolate' , 'darkorchid' , 'darkseagreen' , 'dodgerblue'];

    function generateRainbow(array) {
        list.html('');
        for (var i = 0; i < array.length; i++) {
            list.append('<li class="rb-item" style="background-color: ' + array[i] + ';height: ' + (100 / array.length) + '%;"></li>');
        }
    }

    if (container){
        generateRainbow(colorArray);
        list.appendTo(container);

    }
    var clock;

    var date = new Date();

    clock = clockEl.FlipClock(date, {
        clockFace: 'TwentyFourHourClock'
    });

    clockEl.draggable();

});