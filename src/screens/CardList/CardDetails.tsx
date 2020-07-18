import React from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Text, Button} from '../../assets/components';
import {SharedElement} from 'react-navigation-shared-element';

const {width, height} = Dimensions.get('window');
const CardDetailsScreen = ({navigation, route}: any) => {
  const {item} = route.params;
  const buttonColor = item.status == 'Vacant' ? 'warning' : 'success';
  //   console.log('===========>' + typeof item.item.id);
  return (
    <View>
      <ScrollView style={{height: height}}>
        {/* <View style={styles.overlay}></View> */}
        <SharedElement id={item.id}>
          <Image style={styles.image} resizeMode="cover" source={item.img} />
        </SharedElement>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}>
          <Text>X</Text>
        </TouchableOpacity>

        <View style={styles.containerStyle}>
          <SharedElement id={`item.${item.id}.overlay`}>
            <View style={styles.box}></View>
          </SharedElement>
          <SharedElement
            id={`item.${item.id}.add`}
            style={styles.addressContainer}>
            <Text
              fontColor="white"
              size="l"
              fontFamily="medium"
              textStyle={styles.addressStyle}>
              {item.address}
            </Text>
          </SharedElement>
          <View style={styles.buttonContainerStyle}>
            <SharedElement id={`item.${item.id}.button`}>
              <Button
                buttonViewStyle={{width: 110, marginRight: 20, padding: 5}}
                buttonTextStyle={{
                  fontSize: 16,
                }}
                size="s"
                color={buttonColor}
                iconButton={true}
                title={item.status}
                shadow={false}></Button>
            </SharedElement>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardDetailsScreen;

const styles = StyleSheet.create({
  box: {
    width: width,
    height: width,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
  },
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
    zIndex: 3,
  },

  containerStyle: {
    position: 'absolute',
    // top: 20,
    alignSelf: 'center',
    width: width,
    height: width,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
  },

  addressContainer: {
    position: 'absolute',
    width: width / 2.8,
    margin: 20,
    bottom: 0,
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
});
