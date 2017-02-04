import request from 'superagent';
import config from '../../config';

function ajax(options) {
  const defaults = {
        url: null,
        type: 'post',
        data: {},
        'Content-Type': 'application/json'
    };
    let promise;

    options = Object.assign({}, defaults, options);

    //server render first screen
    //domain is required for node http request
    const isNode = typeof window === 'undefined';
    if (isNode) {
      options.url = config.Local.domain + options.url;
    }

    promise = request[options.type](options.url).withCredentials();
    Object.keys(options).forEach(key => {
        if (!key.match(/url|type|data/)) {
            promise.set(key, options[key]);
        }
    });

    return new Promise((resolve, reject) => {
        promise.send(options.data).then(res => {
            resolve(res.body);
        }).catch(err => {
            reject(err);
        })
    });
}

const get = url => {
  return ajax({
    url,
    type: 'get'
  });
}

const post = (url, data) => {
  return ajax({
    url,
    data,
    type: 'post'
  });
}

export default {
  ajax,
  get,
  post
}
