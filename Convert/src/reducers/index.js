import { combineReducers } from 'redux'
import convertNumberReducer from './convertNumberReducer'
import ChoiceUnitReducer from './ChoiceUnitReducer'
export default combineReducers({
    data: convertNumberReducer,
    choice: ChoiceUnitReducer
})