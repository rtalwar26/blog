"use strict";
const mdc_topAppBar_1 = require("@material/top-app-bar/dist/mdc.topAppBar");
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        // Instantiation
        const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new mdc_topAppBar_1.MDCTopAppBar(topAppBarElement);
    }
};
module.exports = comp;
