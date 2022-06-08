import React from 'react';
import {Platform} from 'react-native';
import {
  View,
  Text,
  Flatlist,
  Animated,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, Fonts} from '../../Themes';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Popular2 = (props) => {
  // const DATA = props.data
  // console.log("DATA ne acaba ?", DATA)
  return (
    <TouchableOpacity style={styles.container} onPress={props.onDetail}>
      <Image
        source={{uri: props.data.PhotoUrl}}
        resizeMod="center"
        style={{width: "100%", height: 100}}
      />
      <View>
        <Text style={styles.title}>{props.data.Category}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.description}>{props.data.Name}</Text>
        </View>
      </View>
      {/* <View style={styles.price}>
        <Text style={styles.priceText}>{props.data.Price}₺</Text>
      </View> */}
      <View style={styles.iconContainer}>
        <View
          style={{
            flexDirection: 'row',
            marginRight: 5,
            alignItems: 'center',
            flex: 1,
          }}>
          <Icon
            name="tags"
            size={16}
            color={'#E74C3C'}
            style={{marginRight: 2}}
          />
          <Text style={{color: '#E74C3C'}}>{props.data.EstimatedSale}</Text>
        </View>
        {/* <View style={{flexDirection: "row", alignItems:'center', flex:1}}>
        <Icon name="wallet" size={16} style={{marginRight:2}} color={"#f8ac59"}  />
        <Text style={{color: "#f8ac59"}} >{props.data.EstimatedRevenue}</Text>
      </View> */}
        <View style={styles.price}>
          <Text style={styles.priceText}>{props.data.Price}₺</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Popular2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.4,
    height: width * 0.6,
    marginRight: 20,
    borderRadius: 10,
    // marginTop: Platform.OS === 'android' ? 5 : 5,
    padding: 10,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  title: {
    color: '#676a6c',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.moderateScale(8),
  },
  description: {
    fontSize: Fonts.moderateScale(10),
    color: '#676a6c',
    flexWrap: 'wrap',
    fontFamily: Fonts.type.base,
  },
  price: {
    // position: 'absolute',
    // top: 5,
    // right: 5,
  },
  priceText: {
    color: Colors.primary,
    fontFamily: Fonts.type.base,
    fontSize: 16,
    fontWeight: '700',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 5,
    left: 5
    // marginHorizontal: 3,
  },
});
