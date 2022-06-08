import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fonts, Metrics } from "../../Themes";
import Icon from "react-native-vector-icons/FontAwesome5"
import KeywordSearchFilter from './KeywordSearchFilter';
import axios from 'axios';
import { KeywordCardCat } from '../KeywordCard';


export default function KeywordCategory(props) {
    let content;
    const { 
        userInfo,
        uName,
        uToken,
        navigation,
        route
    } = props;



    console.log('******', props);
    const [hb, setHb] = useState(true)
    const [tr, setTr] = useState(true)
    const [gg, setGg] = useState(true)
    const [n11, setN11] = useState(true)
    const [data, setData] = useState([])
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(false);
    const [marketPlace, setMarketPlace] = useState('1,2,3,4');
    const [searchCount, setSearchCount] = useState(null);

    const getCategoryKeyword = () => {
        setLoading(true)
        if(uToken !== '' && uName !== ''){
            console.log('------', keyword, marketPlace)
            axios
            .post('https://api.emparator.com/Mobile/KeywordSearch', {
              username: uName,
              token: uToken,
              keyword : keyword,
              selectedMarketplaces: marketPlace

            })
            .then((data) => {
                //console.log()
                console.log('ne geldi', data.data)
                //console.log(typeof data.data)
                //const searchData = JSON.parse(data.data.replace(/NaN/g, 0))
              if(data.data === ""){
                Alert.alert("emparator.com", "Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.")
                signOut()
              console.log('No data')
              }else if((typeof(data.data) !== "string") && data.data.Results.length === 0){
                if(data.data.ErrorMessage === "Arama ifadesi boş olmamalıdır."){
                    Alert.alert("Hata !", "Lütfen geçerli bir arama ifadesi girip tekrar deneyiniz.")
                }
                setData('no-data');
                setLoading(false);
              }else{
                console.log(typeof(data.data))
              
                if(typeof(data.data) === "string"){
                    console.log('string part')
                    const searchData = JSON.parse(data.data.replace(/NaN/g, 0))
                    setData([searchData])
                    setSearchCount(searchData.KeywordSearchCount)
                }else {
                    setData([data.data])
                    setSearchCount(data.data.KeywordSearchCount)
                }
                // console.log('search data', JSON.parse(searchData));
                // // console.log(typeof data.data)

                // typeof(data.data) === 'object' ? setData(data.data) : setData([JSON.parse(searchData)]);
              //   setSearch(data.data);
                setLoading(false);
                // getUserInfo()
              }
            })
            .catch(err => console.log(err));

        }

    }

    const setInput = (val) => {
        console.log('setInput', val)
        setKeyword(val)
    }

    const setSelectedMarket = (val) => {
        let value = marketPlace
        if(marketPlace.indexOf(val) !== -1) {
            const idx = marketPlace.indexOf(val)
            console.log()
            if(idx == marketPlace.length - 1) {
                value = value.replace(`,${val}` , "")
            }else {
                value = value.replace(`${val},` , "")
            }
            console.log('sliced', value)
            setMarketPlace(value)
        }
        else{
            value += `,${val}`
            console.log('added', value)
            setMarketPlace(value)
        }

    }

    // useEffect(() => {
    //     axios.get('https://api.emparator.com/api/login/check?username=gungorafra93@gmail.com&token=e58376de-154f-4129-9bdf-f05b99d31e20')
    //     .then(data => console.log('check', data))
    // })
 

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
    }else if (data.length > 0){
        if((userInfo.UserPackage.PackageId == 2 && searchCount > 10) ||
            (userInfo.UserPackage.PackageId == 1 && searchCount > 5)){
                content = (
                    <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                      backgroundColor: '#fff',
                      margin: 10,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Icon name={'exclamation-triangle'} size={50} color={'#ED5666'} />
                    <Text
                      style={{
                        fontFamily: Fonts.type.base,
                        fontSize: Fonts.moderateScale(18),
                        textAlign: 'center',
                      }}
                      onPress={() => navigation.navigate('Üyelik Paketleri')}>
                      {userInfo.UserPackage.PackageId == 2 ? '10' : '5'} ürün araştırma
                      hakkınızın tamamını kullanmış bulunmaktasınız.Daha fazla arama
                      yapabilmek için paketinizi yükseltebilirsiniz.Üyelik paketlerini
                      incelemek ve bir paket satın almak için
                      <Text
                        style={{
                          fontFamily: Fonts.type.base,
                          fontSize: Fonts.moderateScale(18),
                          textAlign: 'center',
                          color: '#325E84',
                          fontWeight:'bold'
                        }}>
                        {' '}
                        buraya
                      </Text>{' '}
                      tıklayınız{' '}
                    </Text>
                  </View>
                )
            }else {
                content = (
                   data[0].Results.map((itm, idx) => <KeywordCardCat data={itm} id={itm.Id} key={idx} />)
                )

            }
    }


    return (
        <>
            { data.length > 0 ? userInfo.UserPackage.PackageId == 3 ? null :
                (
                    <View style={styles.package}>
                        <Icon name="info-circle" size={22} color={'#fff'} />
                        {(userInfo.UserPackage.PackageId == 2 && (
                            <Text style={styles.packageText}>
                                10 kelime araştırma hakkınızdan {searchCount >= 10 ? 10 : searchCount} tanesini kullanmış bulunmaktasanız.
                            </Text>
                        )) ||
                            (userInfo.UserPackage.PackageId == 1 && (
                                <Text style={styles.packageText}>
                                    5 kelime araştırma hakkınızdan {searchCount >= 5 ? 5 : searchCount} tanesini kullanmış bulunmaktasanız.
                                </Text>
                            ))}
                    </View>
                ):
                    null
                }
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.checkBox}
                        onPress={() => { 
                            setHb(!hb)
                            setSelectedMarket("4") 
                        }}>
                        <Icon
                            name={hb ? 'check-square' : 'square'}
                            size={14}
                        />
                        <Text style={styles.catText}>HepsiBurada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.checkBox}
                        onPress={() => { 
                            setGg(!gg) 
                            setSelectedMarket("2") 
                        }}>
                        <Icon
                            name={gg ? 'check-square' : 'square'}
                            size={14}
                        />
                        <Text style={styles.catText}>GittiGidiyor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.checkBox}
                        onPress={() => { 
                            setTr(!tr) 
                            setSelectedMarket("3") 
                        }}>
                        <Icon
                            name={tr ? 'check-square' : 'square'}
                            size={14}
                        />
                        <Text style={styles.catText}>Trendyol</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.checkBox}
                        onPress={() => { 
                            setN11(!n11) 
                            setSelectedMarket("1") 
                        }}>
                        <Icon
                            name={n11 ? 'check-square' : 'square'}
                            size={14}
                        />
                        <Text style={styles.catText}>N11</Text>
                    </TouchableOpacity>
                </View>
                <KeywordSearchFilter
                    onClick={getCategoryKeyword}
                    title={'Kelime Arama..'}
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
    container: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 5,

    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',

        paddingVertical: 10,
    },
    catText: {
        fontSize: 14,
        fontFamily: Fonts.type.base,
        marginLeft: 3,
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
        padding: 3,
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
