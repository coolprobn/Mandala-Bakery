import axios from  'axios';
import CONFIG from '../config/config';

class ItemService{

  getItems(){
    let url = CONFIG.API_URL + 'items.json';
    return axios.get(url)
  }
}

export default itemService = new ItemService()
