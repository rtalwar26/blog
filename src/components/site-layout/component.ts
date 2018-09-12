import {MDCTopAppBar} from '@material/top-app-bar/dist/mdc.topAppBar';

var comp = {
    onCreate: function () {
        this.state = {
        };
    },
    onMount: function () {
        

        // Instantiation
        const topAppBarElement = document.querySelector('.mdc-top-app-bar');
        const topAppBar = new MDCTopAppBar(topAppBarElement);
    }
}
export = comp;