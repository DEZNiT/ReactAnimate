import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Color} from '../../assets/variables';
import {Button, TextField, ImageCard, Text} from '../../assets/components';
const width = Math.round(Dimensions.get('window').width);

type ListDataType = {
  id: 'string';
  address: string;
  status: 'Rented' | 'Vacant';
};
//  data
const data = [
  {
    id: '1',
    address: '12 The Drive, Richmond, SW1 7HE',
    img: require('../../assets/images/im1.jpg'),
    status: 'Rented',
  },
  {
    id: '2',
    address: '104 Terrace Grove,  Richmond, SW1 2LU',
    img: require('../../assets/images/test.png'),
    status: 'Vacant',
  },
  {
    id: '3',
    address: '298 Leyton Green, Richmond, SW1 2LU',
    img: require('../../assets/images/test.png'),
    status: 'Rented',
  },
];

const CardListScreen = ({navigation}: any) => {
  // rendered list content

  //   const renderItem = ({item}: any) => {
  //     // console.log(item);
  //     return (
  //       <View style={styles.cardBox}>
  //         <TouchableOpacity
  //           onPress={() => {
  //             navigation.navigate('details', {item});
  //           }}>
  //           <Text> {item.img}</Text>

  //           <ImageCard
  //             id={item.id}
  //             img={item.img}
  //             address={item.address}
  //             status={item.status}></ImageCard>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   };
  const ListContent = () => {
    console.log(data);
    return (
      <View style={[styles.listContainer]}>
        {/* <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        /> */}
        {data.map((data) => (
          <View key={data.id} style={styles.cardBox}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('details', {data});
              }}>
              <ImageCard
                id={data.id}
                img={data.img}
                address={data.address}></ImageCard>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };
  // list content end
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ListContent></ListContent>
      </View>
    </View>
  );
};

export default CardListScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: `${Color.danger}`,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: `${Color.warning}`,
  },
  listContainer: {
    marginTop: 100,
  },
  cardBox: {marginBottom: 20},
  map: {
    flex: 1,
  },
});
