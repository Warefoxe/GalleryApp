import {imagesAPI} from '../../api/agent';

export const GET_IMAGES_REQUEST = 'GET_IMAGES_REQUEST';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const GET_IMAGES_FAILED = 'GET_IMAGES_FAILED';

const initialState = {
  images: [],
  isLoading: false,
  error: false,
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.payload,
        error: false,
      };
    case GET_IMAGES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const setImagesRequest = () => {
  return {
    type: GET_IMAGES_REQUEST,
  };
};

export const setImages = images => {
  return {
    type: GET_IMAGES_SUCCESS,
    payload: images,
  };
};

export const getImages = () => {
  return async dispatch => {
    dispatch(setImagesRequest());
    let data = await imagesAPI.getImages();
    dispatch(setImages(data));
  };
};

export default photos;
