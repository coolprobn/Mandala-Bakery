import axios from  'axios';
import CONFIG from '../config/config';

class ItemService{

  getItems(){
    let url = CONFIG.API_URL + 'items.json';
    return axios.get(url)
  }

  getCakes(){
    // id of cake category is 1
    let url = `${CONFIG.API_URL}categories/1/items.json`;
    return axios.get(url)
  }

  allCakes(){
    this.getCakes().then((response)=>{
      return response.data
    }).catch((e)=>{
      console.log(e)
    })
  }
}

export default itemService = new ItemService()
