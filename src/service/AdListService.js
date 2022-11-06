/**
 * interface
 * get() : Promise<adList[]>
 */

import axios from 'axios';

export class AdListService {
  get() {
    return axios({
      method: 'get',
      url: '/data/ad-list-data.json',
    });
  }
}
