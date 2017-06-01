import { App } from '../module';
import {ilApp} from './app';

config.$inject = ["$stateProvider"];
export function config(stateProvider) {
    stateProvider
    .state('app',{
        url:'/',
        component: 'ilApp'
    });
}

App.config(config);  