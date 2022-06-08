import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Alert
} from 'react-native';
import styles from './styles';
import {Metrics, Fonts, Colors} from '../../Themes';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Stars from 'react-native-stars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

let afra = 0
const SearchCard = (props) => {
  const [iconName, setIconName] = useState();
  const [totalFollow, setTotalFollow] = useState(0)
  const [change, setChange] = useState(false)

  const rowData = props.rowData;

  function addFollowing(id) {
    if (
      ((props.packageId === 2 && props.followCount >= 10) || (props.packageId === 2 && totalFollow === 10) ) ||
      (props.packageId === 3 && props.followCount >= 50) ||
      (props.packageId === 1 && props.followCount >= 1)
    ) {
      Alert.alert(
        'emparator.com',
        'Paketinize ait ürün takip limitini doldurdunuz.',
      );
    } else {
      console.log("girdi...")
      setChange(true)
      AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
        axios
          .post('https://api.emparator.com/Mobile/AddFollow', {
            username: response[0][1],
            token: response[1][1],
            productId: id
          })
          .then((res) => {
            if (res.data.data.ErrorMessage === 'Oturumunuz sona erdi.') {
              Alert.alert(
                'emparator.com',
                'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.',
              );
              signOut();
            } else {
              console.log("eklendi")
             if(res.data.data.TotalFollowCount === 10){
               afra += 1
               if(afra >= 2 ){
                Alert.alert(
                  'emparator.com',
                  'Paketinize ait ürün takip limitini doldurdunuz.',
                );
               }else{
                setIconName(!iconName)
                setChange(false)
               }
             }else{
              setIconName(!iconName)
              setChange(false)
              console.log("çıktı")
             }
            }
          });
        
      });
    }
  }


  function deleteItem(id) {
    console.log('ID NE YAKALIYOR', id);
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/DeleteFollow', {
          username: response[0][1],
          token: response[1][1],
          productId: id,
        })
        .then(result => {
          if(result.data == ""){
            Alert.alert("emparator.com", "Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.")
            signOut()
          }else{
            console.log('Silindi');
            setIconName(!iconName);
          }
        });
    });
  }

  React.useEffect(() => {
    setIconName(rowData.IsFollowing);
  }, []);



  return (
    <View style={styles.mainRenderView}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: Platform.OS === 'ios' ? 5 : 10,
        }}>
        <TouchableOpacity
          style={{flex: 2, marginRight: 8}}
          onPress={() => props.DetailPageRoute()}>
          <Image
            source={{uri: rowData.PhotoUrl}}
            resizeMode="contain"
            style={[styles.FoodImg]}
          />
          {/* <Image style={styles.logo} source={logo} /> */}
        </TouchableOpacity>
        <View style={{flex: 5}}>
          <TouchableOpacity
            style={{width: '90%'}}
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
                disabled={true}ß
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.MoneyText}>{rowData.Price} TL</Text>
            <TouchableOpacity
              onPress={() => {
                iconName ? deleteItem(rowData.Id) : addFollowing(rowData.Id);
                // setIconName(!iconName);
              }}
              disabled={change}
              style={[styles.follow]}>
              <Text style={styles.followText}>
                {iconName ? 'Takipten Çıkar' : 'Takip et'}
              </Text>
              <Icon
                name={iconName ? 'trash-alt' : 'plus-circle'}
                size={16}
                color={'#fff'}
              />
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

export default SearchCard;
