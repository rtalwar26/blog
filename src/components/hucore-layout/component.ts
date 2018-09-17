declare var hljs : any;

var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        
        hljs.initHighlightingOnLoad();
        // Instantiation
        
    }
}
export = comp;