import axios from 'axios';

export default {
  loadSales: function () {
    return axios.get('/api/sales');
  },
  getLocations: function () {
    return axios.get('api/locations');
  },
};
