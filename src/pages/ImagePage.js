import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImageItem from '../components/ImageItem';

const ImagePage = ({navigation}) => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
      )
      .then(({data}) => {
        setPhotos(data);
      });
  }, []);
  const showImage = id => {
    navigation.navigate('Detail', {
      imageId: `${id}`,
    });
    // this.props.navigation.navigate('Image', {
    //   imageId: `${id}`,
    // });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {photos.map(item => (
            <ImageItem
              image={item.urls.small}
              id={item.id}
              key={item.id}
              showImage={showImage}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imgContainer: {
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 200,
  },
  item: {
    fontSize: 18,
  },
  descriptionContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.6,
    padding: 5,
  },
  descriptionItem: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
});

export default ImagePage;
