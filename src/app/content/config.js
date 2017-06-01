import { App } from '../module';
import {ilContent} from './content';

config.$inject = ["$stateProvider"];
export function config(stateProvider) {
    stateProvider
    .state('app',{
        url:'/',
        component: 'ilContent'
    });
}

App.config(config);  