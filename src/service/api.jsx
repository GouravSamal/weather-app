import axios from "axios";

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='c1ffb8f2a1ca509f64c18610ecb9d87b';

export const getData=async (city,country)=>{

    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
}