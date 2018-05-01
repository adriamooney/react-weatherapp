import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log('action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
    //use concat rather than push, to avoid mutating state directly
    //make a new array, put action.payload.data, insert state inside it too
      return [action.payload.data, ...state];  // [city, city, city]
  }

  return state;
}
