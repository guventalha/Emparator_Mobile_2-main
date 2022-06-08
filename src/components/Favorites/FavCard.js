import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Easing,
  Platform,
} from 'react-native';
import {Container, Right, Header, Left, Title, Body, Button} from 'native-base';
import styles from './styles';
import {Metrics, Fonts, Colors} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Stars from 'react-native-stars';
import images from '../../Themes/Images';

const FavCard = (props) => {
  const [logo, setLogo] = React.useState();
  const [change, setChange] = useState(false);
  const rowData = props.rowData;

  function getLogo() {
    if (rowData.Url.indexOf('n11') != -1) {
      return setLogo(images.n11);
    } else if (rowData.Url.indexOf('gittigidiyor') != -1) {
      return setLogo(images.gg);
    } else if (rowData.Url.indexOf('trendyol') != -1) {
      return setLogo(images.tr);
    } else {
      return setLogo(images.hb);
    }
  }

  React.useEffect(() => {
    getLogo();
  }, []);

  return (
    <View style={styles.mainRenderView}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: Platform.OS === 'ios' ? 5 : 10,
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => props.DetailPageRoute()}>
          <Image
            source={{uri: rowData.PhotoUrl}}
            resizeMode="contain"
            style={[styles.FoodImg]}
          />
          <Image style={styles.logo} source={logo} />
        </TouchableOpacity>
        <View style={{flex: 2, marginLeft: 5}}>
          <TouchableOpacity
            style={{width: '80%'}}
            onPress={props.DetailPageRoute}>
            <Text style={styles.FoodName}>{rowData.Name}</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center', marginVertical: 5}}>
              <Stars
                half={true}
                default={rowData.Rating}
                //update={(val)=>{this.setState({stars: val})}}
                spacing={4}
                starSize={16}
                count={5}
                fullStar={require('../../Images/star.png')}
                emptyStar={require('../../Images/star-unfilled.png')}
                halfStar={require('../../Images/rating.png')}
                disabled={true}
              />
            </View>

            {/* <Text style={styles.reviewText}>238 reviews</Text> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            <Text style={styles.MoneyText}>{rowData.Price} ₺</Text>
            <TouchableOpacity
              onPress={() => props.onDelete(rowData.Id)}
              style={styles.follow}
              disabled={props.change}
              >
              <Text style={styles.followText}>Takipten Çıkar</Text>
              <Icon name={'trash-alt'} size={16} color={'#fff'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.borderHorizontal} />
      <View style={styles.estimatedValue}>
        <View style={styles.saleText}>
          <Icon name="tags" size={16} color={'#fff'} style={{marginRight: 8}} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontFamily: Fonts.type.base}}>
              Günlük Satış
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.type.base,
                letterSpacing: 1.5,
                fontWeight: '700',
              }}>
              {' '}
              {rowData.SaleEstimation}{' '}
            </Text>
          </View>
        </View>
        <View style={styles.saleText}>
          <Icon
            name="wallet"
            size={16}
            color={'#fff'}
            style={{marginRight: 8}}
          />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontFamily: Fonts.type.base}}>
              Aylık Ciro
            </Text>
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.type.base,
                fontWeight: '700',
                letterSpacing: 1.5,
              }}>
              {' '}
              {Math.round(rowData.RevenueEstimation)}₺
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FavCard;
