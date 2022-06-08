import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import KeywordSearchFilter from './KeywordSearchFilter'
import { Fonts, Metrics } from '../../Themes'
import  Icon  from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import KeywordCardOrder from '../KeywordCard/KeywordCardOrder/KeywordCardOrder'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function KeywordOrder(props) {
  let content;
  const {userInfo, uName, uToken, navigation} = props;
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchCount, setSearchCount] = useState();

  const getOrderKeyword = () => {
    setLoading(true)
    if(uToken !== '' && uName !== ''){
      console.log('------', keyword, typeof keyword)
      axios
      .post('https://api.emparator.com/Mobile/KeywordSearch2', {
        username: uName,
        token: uToken,
        productURL : keyword

      })
      .then((data) => {
          console.log('ne geldi', data.data)
          if(data.data.Results.length === 0) {
            if(data.data.ErrorMessage === 'Arama ifadesi boş olmamalıdır.'){
              Alert.alert("Hata !", "Lütfen geçerli bir ürün linki girip tekrar deneyiniz.")
            }
            else {
              setData('no-data');
              setLoading(false);
            }
          }
          else if(data.data.Results.length > 0) {
            setData(data.data.Results);
            setSearchCount(data.data.KeywordSearchCount)
            setLoading(false);
          }
      })
      .catch(err => console.log(err));

  }
  }

  const setInput = (val) => {
    console.log('setInput', val)
    setKeyword(val)
}

  if(data === 'no-data'){
    content =  (
      <View style={styles.noData}>
        <Icon
          name={'exclamation-triangle'}
          size={35}
          color={'#ED5666'}
        />
        <Text
          style={styles.noDataText}>
          Aradığınız kriterlere ait ürün bulunamadı.
        </Text>
      </View>
   )
  }else {
    content = (
      data.map((itm, idx) => <KeywordCardOrder data={itm} id={itm.Id} key={idx}/>)
    )
  }

  return (
    <>
        {userInfo.UserPackage.PackageId == 3 ? null :
                (
                    <View style={styles.package}>
                        <Icon name="info-circle" size={22} color={'#fff'} />
                        {(userInfo.UserPackage.PackageId == 2 && (
                            <Text style={styles.packageText}>
                                10 kelime araştırma hakkınızdan 0 tanesini kullanmış bulunmaktasanız.
                            </Text>
                        )) ||
                            (userInfo.UserPackage.PackageId == 1 && (
                                <Text style={styles.packageText}>
                                    5 kelime araştırma hakkınızdan 0 tanesini kullanmış bulunmaktasanız.
                                </Text>
                            ))}
                    </View>
                )}
    <View style={styles.mainContainer}>
      <KeywordSearchFilter
        onClick={getOrderKeyword}
        title={'Ürün Linki..'}
        setInput={setInput}
      />
    </View>
    { 
             loading ? 
             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator size="small" color={Colors.primary} />
                </View>
                :
             content
            
            }
    </>
  )
}

const styles = StyleSheet.create({
    mainContainer :{
        width: Metrics.WIDTH * 0.95,
        marginHorizontal: Metrics.WIDTH * 0.025,
        marginVertical: Metrics.HEIGHT * 0.015,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    package: {
      backgroundColor: 'rgba(255,0,0,0.6)',
      marginVertical: 5,
      marginHorizontal: 10,
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    packageText: {
      color: '#fff',
      fontFamily: Fonts.type.base,
      fontSize: 15,
      marginLeft: 8,
      width: '95%'
    },
    noData : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      backgroundColor: '#fff',
      margin: 10,
      padding: 10,
      borderRadius: 3,
  },
  noDataText : {
    fontFamily: Fonts.type.base,
            fontSize: Fonts.moderateScale(16),
            textAlign: 'center',
  }
}) 