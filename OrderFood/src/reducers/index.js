import { combineReducers } from 'redux'
import OrderReducer from './OrderReducer'

// cho de noi dong reducer lai

export default combineReducers({
    orders: OrderReducer,
})