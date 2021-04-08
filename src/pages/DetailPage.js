import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getImage} from '../redux/reducers/photo';

const DetailPage = ({route}) => {
  const {imageId} = route.params;

  const dispatch = useDispatch();

  const [image, isLoading] = useSelector(state => [
    state.photo.image,
    state.photo.isLoading,
  ]);

  useEffect(() => {
    dispatch(getImage(imageId));
  }, [dispatch, imageId]);

  const loading = (
    <View style={styles.loadingView}>
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );

  return isLoading ? (
    loading
  ) : (
    <View>
      <Image style={styles.img} source={{uri: image.full}} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  loadingView: {
    alignItems: 'center',
    marginTop: 100,
  },
  loadingText: {
    fontSize: 25,
  },
});

export default DetailPage;
