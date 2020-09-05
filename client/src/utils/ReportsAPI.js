import axios from 'axios';

export default {
  loadSales: function () {
    return axios.get('/api/sales');
  },
  loadByLocation: function () {
    return axios.get('api/salesbylocation');
  },
};
