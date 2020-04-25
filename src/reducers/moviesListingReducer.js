import {GET_MOVIES_LIST} from "../constants/actionTypes"
const initialState = {
  moviesList: []
}
export default function (state = initialState, action){
  switch (action.type){
    case GET_MOVIES_LIST:
      return{
        ...state, moviesList: action.payload
      }
    default:
      return state
  }
}