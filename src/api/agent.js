import axios from 'axios';

export const imagesAPI = {
  getImages() {
    return axios
      .get(
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
      )
      .then(response => {
        return response.data;
      });
  },
  getImage(imageId) {
    return axios.get(
      `https://api.unsplash.com/photos/${imageId}/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
    );
  },
};
