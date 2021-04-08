import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const ImageItem = ({image, id, author, description, showImage}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        showImage(id);
      }}>
      <View key={id} style={styles.imgContainer}>
        <Image style={styles.img} source={{uri: image}} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionItem}>Автор: {author}</Text>
          <Text style={styles.descriptionItem}>Опис: {description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
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

export default ImageItem;
