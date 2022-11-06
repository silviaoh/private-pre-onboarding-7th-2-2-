import axios from 'axios';

/**
 * interface
 * get(): Promise<adStatus[]>
 */

export class AdStatusService {
  get() {
    return axios({
      method: 'get',
      url: '/data/trend-data.json',
    });
  }
}
