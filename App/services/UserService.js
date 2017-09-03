import axios from  'axios';
import CONFIG from '../config/config';

class UserService{

  signUp(data){
    let url = CONFIG.API_URL + 'auth';
    return axios.post(url)
  }

  login(data){
    let url = CONFIG.API_URL + 'auth/sign_in';
    return axios.post(url)
  }
}

export default userService = new UserService();
