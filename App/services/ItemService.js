import axios from  'axios'
import {API_URL} from '../config'

class ItemService{

  getItems(){
    let url = API_URL + 'items.json';
    return axios.get(url)
  }
}

export default itemService = new ItemService()
