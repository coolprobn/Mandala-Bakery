import axios from  'axios';
import CONFIG from '../config/config';

class UserService{

  signUp(data){
    let url = CONFIG.API_URL + 'customers.json';
    return axios.post(url, data);
  }

  login(data){
    let url = CONFIG.API_URL + 'customers/login.json';
    return axios.post(url, data);
  }
}

export default userService = new UserService();
