/*
  Exports action name and function for weather
*/

import axios from 'axios';
import {API} from '../config';


// Action name
export const GET_WEATHER_DATA="GET_WEATHER_DATA";


/**
 * Get Weather Data
 * @returns {{type: string, payload: Promise.<{text: string}>}}
 */
export function getWeatherData(){
    const config = {
        url: API.SERVER_API,
        method: 'GET'
    };
    const request = axios.request(config);
    return {
        type: GET_WEATHER_DATA,
        payload: request
    }

}
