import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Text} from '../../assets/components';
import {SharedElement} from 'react-navigation-shared-element';
const {width, height} = Dimensions.get('window');
const CardDetailsScreen = ({navigation, route}: any) => {
  const {data} = route.params;

  //   console.log('===========>' + typeof data.data.id);
  return (
    <View>
      <View style={styles.overlay}></View>
      <SharedElement id={data.id}>
        <Image style={styles.image} resizeMode="cover" source={data.img} />
      </SharedElement>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.goBack()}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width,
    height: width,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  image: {
    width,
    height: width,
    zIndex: 0,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
    shadowOpacity: 0.2,
    elevation: 6,
    shadowRadius: 6.5,
    shadowOffset: {width: 1, height: 2},
    zIndex: 2,
  },
});
