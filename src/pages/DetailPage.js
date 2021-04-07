import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const DetailPage = ({route}) => {
  const [photo, setPhoto] = useState({});
  const {imageId} = route.params;

  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/${imageId}/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0`,
      )
      .then(({data}) => {
        setPhoto(data);
      });
  }, [imageId]);

  return (
    <View>
      <Text>{photo.id}</Text>
      <Image style={styles.canvas} source={{uri: photo.urls.small}} />
    </View>
  );
};

const styles = StyleSheet.create({
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default DetailPage;
