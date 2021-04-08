import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImageItem from '../components/ImageItem';
import {getImages} from '../redux/reducers/photos';

const ImagePage = ({navigation}) => {
  const dispatch = useDispatch();

  const [images, isLoading] = useSelector(state => [
    state.photos.images,
    state.photos.isLoading,
  ]);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const showImage = id => {
    navigation.navigate('Detail', {
      imageId: `${id}`,
    });
  };

  const loading = (
    <View style={styles.loadingView}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );

  return isLoading ? (
    loading
  ) : (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {images.map(item => (
            <ImageItem
              description={item.alt_description}
              author={item.user.name}
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
  loadingView: {
    alignItems: 'center',
    marginTop: 100,
  },
  loadingText: {
    fontSize: 25,
  },
});

export default ImagePage;
