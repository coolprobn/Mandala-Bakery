import axios from 'axios';
import CONFIG from '../config/config';
import RNSimData from 'react-native-sim-data'

class CartService {

  calculatePrice() {

  }

  calculateDeliveryCharge() {

  }

  placeOrder(cart, total) {
    let url = CONFIG.API_URL + 'orders.json';
    return axios.post(url, {
      phone: RNSimData.getTelephoneNumber(),
      cart: JSON.stringify(cart),
      total
    })
  }

}

export default cartService = new CartService();
