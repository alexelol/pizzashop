import { App } from '../module';
import {ilContent} from './content';

contentCtrl.$inject = ['$mdSidenav']
function contentCtrl(mdSidenav) {
    this.mdSidenav = mdSidenav;
    this.isSideNavClosed = function () {
        return !(this.mdSidenav("sidenav").isOpen() || this.mdSidenav("sidenav").isLockedOpen());
    }
    this.openSideNav = function () {
        this.mdSidenav("sidenav").toggle();
    }
    this.closeSideNav = function () {
        this.mdSidenav("sidenav").close();
    }
}
App.controller('contentCtrl', contentCtrl);