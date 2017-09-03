import axios from  'axios'

const API_URL = "http://192.168.2.52:3000/";
class ItemService{

  getItems(){
    let url = API_URL + 'items.json';
    return axios.get(url)
  }
}

export default itemService = new ItemService()
