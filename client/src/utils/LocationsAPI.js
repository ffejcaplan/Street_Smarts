import axios from 'axios';

export default {
  loadLocations: function () {
    return axios.get('/api/locations');
  },
};
