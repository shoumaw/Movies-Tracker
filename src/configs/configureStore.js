import {createStore , combineReducers, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import moviesListReducer from "../reducers/moviesListingReducer"

const rootReducer = combineReducers(
  {moviesListReducer}
)
const configureStore = () => {
  return createStore(rootReducer,{},applyMiddleware(reduxThunk))
}
export default configureStore;
