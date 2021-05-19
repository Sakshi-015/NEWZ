import axios from 'axios';
// import { API_URL } from '../constants';
// import {_dispatch, _axios, getSessionItem} from '../utilities';



export function getNews(address) {
  return axios({
      method: 'GET',
    //   params: payload,
     headers: {Upgrade: HTTPS/3.0,
      Connection: Upgrade},
      url: address,
  });
}

   

