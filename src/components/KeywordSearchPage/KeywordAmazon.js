import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Colors, Fonts, Metrics } from '../../Themes'
import KeywordSearchFilter from './KeywordSearchFilter'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import {KeywordCardAmz} from '../KeywordCard/index'
import AnimatedSearchBar from '../SerchBar/Searchbar'
import Searchbar from '../SerchBar/Searchbar'
import Icon  from 'react-native-vector-icons/FontAwesome5'
import { useAuth } from '../../Router'

export default function KeywordAmazon(props) {
  let content;
  const {
    uName,
    uToken,
    userInfo,
    navigation
  } = props
  const { signOut } = useAuth()
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(props.loading);
  const [searchCount, setSearchCount] = useState(null);



  const getAmazonKeyword = async () => {
    console.log('Keyword: ', keyword)
    setLoading(true)
    console.log('getAmazonKeyword')
    if (uName !== '' && uToken !== '') {
      // console.log('------',typeof(userToken), typeof(userName))
      axios
        .post('https://api.emparator.com/Mobile/GetAmazonKeywords', {
          username: uName,
          token: uToken,
          keyword: keyword,
        })
        .then((data) => {
          //setLoading(false)
          if (data.data === "") {
            Alert.alert("emparator.com", "Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.")
            signOut()
            console.log('No data')
          }
          else if(data.data.length === 0) {
            setData('no-data')
          }
          else {
            console.log('search data', data.data);
            setLoading(false)
            setData(data.data)
            //   setRowData(data.data.data);
            //   setSearch(data.data);
            //   setLoading(false);
            // getUserInfo()
          }
        })
        .catch(err => console.log(err));

    }
  }

  const renderAmazonKeyword = ({item}) => {
    // console.log('item', item)
    return(
      <>
        {
          loading ? (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator size="small" color={Colors.primary} />
            </View>
          ):
          (
            <KeywordCardAmz data={item} />
          )
        }
      </>
    )
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
  }else{
  
    content = (
      <FlatList
        keyExtractor={(item) => String(item.Id)}
        data={[data]}
        renderItem={renderAmazonKeyword}
      />
    )
  
}


  return (
    <View style={styles.topContainer}>
      <View style={styles.mainContainer}>
        <KeywordSearchFilter
          onClick={getAmazonKeyword}
          title={'Amazon Keyword...'}
          setInput={setInput}
        />
        
      </View>
      {/* <Searchbar /> */}
      {content}
     </View>
  )
}




const styles = StyleSheet.create({
  topContainer: {
    
  },
  mainContainer: {
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

  dataContainer: {
    marginHorizontal: Metrics.WIDTH * 0.025,
    height: Metrics.HEIGHT,
    borderColor: 'red',
    borderWidth: 1,
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