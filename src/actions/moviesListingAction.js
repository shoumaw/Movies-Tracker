import {GET_MOVIES_LIST} from  '../constants/actionTypes'
import {data} from '../constants/dummyData'
import axios from 'axios'
export const getMoviesList = () => async dispatch => {
  //const res = await axios.get(//endpoint)
  if (data) {
    let moviesList = data.map((movie) => ({id : movie.id, category: movie.category, image: movie.image.uri ,title : movie.title, rating: movie.rating}))
    dispatch({type : GET_MOVIES_LIST, payload : moviesList})
  }
}
