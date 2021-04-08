import {imagesAPI} from '../../api/agent';

export const GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST';
export const GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS';
export const GET_IMAGE_FAILED = 'GET_IMAGE_FAILED';

const initialState = {
  image: {},
  isLoading: false,
  error: false,
};

const photos = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case GET_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        image: action.payload,
        error: false,
      };
    case GET_IMAGE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const setImageRequest = () => {
  return {
    type: GET_IMAGE_REQUEST,
  };
};

export const setImage = response => {
  return {
    type: GET_IMAGE_SUCCESS,
    payload: response.data.urls,
  };
};

export const getImage = id => {
  return async dispatch => {
    dispatch(setImageRequest());
    let data = await imagesAPI.getImage(id);
    dispatch(setImage(data));
  };
};

export default photos;
