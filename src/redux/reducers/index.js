import {combineReducers} from 'redux'
import weather from './weather';

/**
 * Combine all the reducers
 * @param thirdPartyReducers
 * @returns {Reducer<S>}
 */
const createRootReducer = function(thirdPartyReducers){
    return combineReducers({
        ...thirdPartyReducers,
        weather
    })
}
export default createRootReducer
