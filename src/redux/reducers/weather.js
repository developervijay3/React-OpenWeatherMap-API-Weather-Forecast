/**
  Weather Reducer
*/
import {
    GET_WEATHER_DATA
} from '../actions';
import InitialState from '../config/initial-state'

export default function(state = InitialState.weather, action) {
    let payload = action.payload

    switch (action.type) {
        case GET_WEATHER_DATA:
          if(!action.error){
              return payload.data;
          } else {
              return InitialState.weather
          }
          break;
    }
    return state;
}
