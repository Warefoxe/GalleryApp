import {combineReducers} from 'redux';
import photos from './photos';
import photo from './photo';

let reducers = combineReducers({
  photos,
  photo,
});

export default reducers;
