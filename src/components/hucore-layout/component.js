"use strict";
var comp = {
    onCreate: function () {
        this.state = {};
    },
    onMount: function () {
        hljs.initHighlightingOnLoad();
        // Instantiation
    }
};
module.exports = comp;
