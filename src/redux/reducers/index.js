import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'
import DeviceLocations from './reducer_device_locations'

const rootReducer = combineReducers({
   books: BooksReducer,
   activeBook: ActiveBookReducer,
   deviceLocations: DeviceLocations
});

export default rootReducer;

