import axios from 'axios';

const API_KEY = '15f7cc691277d88f645c55d6aee69b48';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// nên đặt một biế theo type vì như vậy mới giữa đc tính nhất quán(consistent) giữa reducer và action
// và các chổ khác
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); 
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}