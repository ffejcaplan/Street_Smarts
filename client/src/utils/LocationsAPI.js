import axios from 'axios';

export default {
  loadLocations: function () {
    return axios.get('/api/locations');
  },
  postLocation: function (location) {
    return axios.post('/api/locations', location);
  },
  putLocation: function (id) {
    return axios.put(`/api/locations/${id}`);
  },
};
