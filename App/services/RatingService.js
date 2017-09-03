import axios from  'axios';
import CONFIG from '../config/config';

class RatingService{
  /**
   *
   */
  rateItem(ratings, itemId){
    //todo get userid from localstorage
    let ratingData = {
      user_id: 1,
      item_id: itemId,
      ratings: ratings
    };

    let url = CONFIG.API_URL + 'ratings.json';
    return axios.post(url)
  }
}

export default ratingService = new RatingService();
