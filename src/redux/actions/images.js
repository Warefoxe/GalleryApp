export const GET_IMAGE_REQUEST = 'image/GET_IMAGE_REQUEST';
export const GET_IMAGE_SUCCESS = 'image/GET_IMAGE_SUCCESS';
export const GET_IMAGE_FAILED = 'image/GET_IMAGE_FAILED';

export const setImages = response => {
  return {
    type: GET_IMAGE_REQUEST,
    payload: response.data,
  };
};
