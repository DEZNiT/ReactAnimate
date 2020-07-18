import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Text from './Text';
import Button from './Button';
// import Icons from './Icons';
import Badge from './Badge';
import {Color} from '../variables';
import {SharedElement} from 'react-navigation-shared-element';
// icons
// import People from '../../assets/images/people.svg';
// import PeopleCarry from '../../assets/images/peopleCarry.svg';

// device dimensions
const width = Math.round(Dimensions.get('window').width);
const addFn = () => {};

type CardProps = {
  id: string;
  address: string;
  status?: 'Rented' | 'Vacant';
  onClick?: string;
  img?: any;
  Component?: any;
};

const ImageCard = ({address, status, onClick, img, id}: CardProps) => {
  const buttonColor = status === 'Vacant' ? 'warning' : 'success';
  //   const Component = status === 'Vacant' ? PeopleCarry : People;

  return (
    <>
      <SharedElement id={id}>
        <Image style={styles.imageStyle} source={img}></Image>
      </SharedElement>

      <View style={styles.containerStyle}>
        <SharedElement id={`item.${id}.overlay`}>
          <View style={styles.box}></View>
        </SharedElement>
        <SharedElement id={`item.${id}.add`} style={styles.addressContainer}>
          <Text
            fontColor="white"
            size="l"
            fontFamily="medium"
            textStyle={styles.addressStyle}>
            {address}
          </Text>
        </SharedElement>
        <View style={styles.buttonContainerStyle}>
          <SharedElement id={`item.${id}.button`}>
            <Button
              buttonViewStyle={{width: 110, padding: 5}}
              buttonTextStyle={{
                fontSize: 16,
              }}
              size="s"
              color={buttonColor}
              title={status}
              shadow={false}></Button>
          </SharedElement>
        </View>
      </View>
    </>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: width * 0.85,
    height: 250,
    zIndex: 10,
    position: 'absolute',
    // alignSelf: 'center',

    top: 0,
    left: 0,
    borderRadius: 20,
  },
  imageStyle: {
    // resizeMode: 'cover',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    width: width * 0.85,
    height: 250,
    zIndex: 0,
  },

  containerStyle: {
    borderRadius: 20,
    position: 'absolute',
    // top: 20,
    alignSelf: 'center',
    width: width * 0.85,
    height: 250,
    zIndex: 10,
  },

  addressContainer: {
    width: width / 2.8,
    margin: 20,
  },
  addressStyle: {
    fontSize: 18,
  },

  buttonContainerStyle: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 20,
    position: 'absolute',
    // top: 20,
    alignSelf: 'center',
    width: width * 0.85,
    height: 250,
    zIndex: 1,
  },
});
