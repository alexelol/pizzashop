import { App } from './module';
import {URL} from './url';
export const resolveUrl = function (URL) {
    return {
        resolve: function (path) {
            return `${URL}/${path}`;
        }
    };
}
resolveUrl.$inject['URL'];
App.factory('resolveUrl', resolveUrl);