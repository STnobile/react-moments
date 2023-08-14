import axios from "axios";

axios.defaults.baseUrl = 'http://moments-01.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/from-data';
axios.defaults.withCredentials = true;