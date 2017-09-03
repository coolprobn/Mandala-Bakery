import axios from  'axios';
import CONFIG from '../config/config';

class RatingService{
  /**
   *
   */
  rateItem(rating, itemId){
    //todo get userid from localstorage
    let ratingData = {
      user_id: 1,
      item_id: itemId,
      value: rating
    };

    let url = CONFIG.API_URL + 'ratings.json';
    return axios.post(url, ratingData)
  }
}

export default ratingService = new RatingService();
