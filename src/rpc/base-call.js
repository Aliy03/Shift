import host from '@/modules/enums/rpc'
import axios from "axios";

let domain;

if ( process.env.NODE_ENV === 'development' ) {
  domain = host.DEV
}

const instance = axios.create({
  baseURL: domain,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

class BaseCall {
  constructor() {
    this.axios = instance
  }

  _call(pathname, options, method = 'GET'){
    const self = this;

    switch (method) {
      case 'GET':
        return this.axios.get(pathname)
          .then(response => self.getResponse(response))
    }
  }

  getResponse(response) {
    return response.data
  }
}

export default BaseCall;
