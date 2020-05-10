import JsonP from 'jsonp'
import axios from 'axios'
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                // debugger;
                if (response.status === 0) {
                    resolve(response);
                } else {
                    reject(response.msg);
                }
            })
        })
    }
}