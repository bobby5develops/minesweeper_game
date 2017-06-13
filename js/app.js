//define module && global namespace
(function () {
    'use strict';

    function init (game){
        this.model = new app.Model();
        this.controller = new app.Controller();

    }

    var mineSweeper = new init('minesweeper');



    window.onload = function (load) {
        setTimeout(function () {
            //initialize app
            mineSweeper();
        }, 600);
    }

})();

