import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'
import DeviceListReducer from './reducer_device_list'
import DeviceLocationsReducer from './reducer_device_locations'


const rootReducer = combineReducers({
   books: BooksReducer,
   activeBook: ActiveBookReducer,
   deviceList: DeviceListReducer,
   deviceLocations: DeviceLocationsReducer
});

export default rootReducer;

