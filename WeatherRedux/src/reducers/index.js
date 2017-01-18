import { combineReducers } from 'redux';
import WeatherReducer from './Weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
