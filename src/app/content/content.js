import { App } from '../module';
import html from './content.html';
import {} from './contentctrl';
import {} from './menu';
import {} from './toolbar';
import {} from './body';
export const ilContent = {
  template: html,
  controller: 'contentCtrl'
}
App.component('ilContent', ilContent);