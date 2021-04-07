import {imagesAPI} from '../../api/agent';
import setImages from '../actions/images';

export const GET_IMAGE_REQUEST = 'image/GET_IMAGE_REQUEST';
export const GET_IMAGE_SUCCESS = 'image/GET_IMAGE_SUCCESS';
export const GET_IMAGE_FAILED = 'image/GET_IMAGE_FAILED';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_REQUEST:
      return {
        ...state,
        items: action.payload,
      };
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_IMAGE_FAILED:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export const getImages = () => {
  return dispatch => {
    imagesAPI.getImages().then(response => {
      dispatch(setImages(response));
    });
  };
};

export default images;
