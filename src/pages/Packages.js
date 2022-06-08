import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useAuth } from '../Router';

import {Fonts} from '../Themes';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const Packages = (props) => {
  const [free, setFree] = React.useState(false);
  const [std, setStd] = React.useState(false);
  const [full, setFull] = React.useState(true);
  const [userName, setUserName] = React.useState()
  const [userToken, setUserToken] = React.useState()

  const { signOut } = useAuth()

  function getUserInfo() {
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/UserInfos', {
          username: response[0][1],
          token: response[1][1],
        })
        .then((data) => {
          if (data.data === '') {
            Alert.alert('emparator.com', 'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.');
            signOut();
            // setUserLogin(data);
          }
          // console.log('Başarılı');
        });
    });
  }

  useEffect(() => {
    AsyncStorage.getItem("@userName").then(res => {
      setUserName(res)
      AsyncStorage.getItem("@userToken").then(res => {
        setUserToken(res)
      })
    })
    getUserInfo()    
  },[])


  function onFullPress() {
    return null;
  }

  return (
    <ImageBackground source={require("../Images/bg20.png")} style={{width: "100%", height: "100%"}} >
    <ScrollView>

      <View style={styles.bigContainer}>
        <TouchableOpacity onPress={() => setFree(!free)}>
          <View style={(styles.containerFree)}>
            <View>
              <Text style={[styles.textMain, {color: '#f8ac59'}]}>
                Ücretsiz Üyelik
              </Text>
              <Text style={[styles.textSecondary, {color: '#f8ac59'}]}>
                Limitli Kullanım
              </Text>
            </View>
            <Icon name="chevron-down" size={22} style={{color: '#f8ac59'}} />
          </View>
          {free ? (
            <View style={[styles.contentMain, {borderColor: '#f8ac59', borderWidth:1 }]}>
              <View>
                <View style={styles.title}>
                  <Text style={{fontFamily: Fonts.type.base, color:"black", letterSpacing: 2}}>
                    Chrome Eklentisi
                  </Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kar Komisyon Hesaplama:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Detaylı Liste:</Text>
                  <Text style={styles.text2}>Limitli Gösterim</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Satış Tahmini:</Text>
                  <Text style={styles.text2}>Limitli Gösterim</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Liste Skoru:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                {/* <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Arbitraj Kontrolü:</Text>
                  <Text style={styles.text2}>Limitli Gösterim</Text>
                </View> */}
              </View>
              <View>
                <View style={[styles.title, {marginTop: 10}]}>
                  <Text style={{fontFamily: Fonts.type.base, color:"black", letterSpacing: 2}}>
                    Web sitesi + Mobil Uygulama
                  </Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Araştırma:</Text>
                  <Text style={styles.text2}>Toplam 5 araştırma</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kelime Araştırma/Kategori Bazlı:</Text>
                  <Text style={styles.text2}>Toplam 5 araştırma</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kelime Araştırma/Sıralama Bazlı:</Text>
                  <Text style={styles.text2}>Toplam 5 araştırma</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Takibi:</Text>
                  <Text style={styles.text2}>Toplam 1 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Stok Takibi:</Text>
                  <Text style={styles.text2}>Toplam 1 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Yorum Takibi:</Text>
                  <Text style={styles.text2}>Toplam 1 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Fiyat Takibi:</Text>
                  <Text style={styles.text2}>Toplam 1 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Index Kontrolü:</Text>
                  <Text style={styles.text2}>Toplam 1 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Sıralama Bulucu:</Text>
                  <Text style={styles.text2}>Toplam 1 ürün</Text>
                </View>
              </View>
            </View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setStd(!std)}>
          <View style={styles.containerStd}>
            <View>
              <Text style={[styles.textMain, {color: '#31708f'}]}>
                Standart Paket
              </Text>
              <Text style={[styles.textSecondary, {color: '#31708f'}]}>
                Chrome Eklentisi
              </Text>
            </View>
            <Icon name="chevron-down" size={22} style={{color: '#31708f'}} />
          </View>
          {std ? (
            <View style={[styles.contentMain, {borderColor: '#31708f', borderWidth: 1}]}>
              <View>
                <View style={styles.title}>
                  <Text style={{fontFamily: Fonts.type.base, color:"black", letterSpacing: 2}}>
                    Chrome Eklentisi
                  </Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kar Komisyon Hesaplama:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Detaylı Liste:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Satış Tahmini:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Liste Skoru:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                {/* <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Arbitraj Kontrolü:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View> */}
              </View>
              <View>
                <View style={[styles.title, {marginTop: 10}]}>
                  <Text style={{fontFamily: Fonts.type.base, color:"black", letterSpacing: 2}}>
                    Web sitesi + Mobil Uygulama
                  </Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Araştırma:</Text>
                  <Text style={styles.text2}>Toplam 10 araştırma</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kelime Araştırma/Kategori Bazlı:</Text>
                  <Text style={styles.text2}>Toplam 10 araştırma</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kelime Araştırma/Sıralama Bazlı:</Text>
                  <Text style={styles.text2}>Toplam 10 araştırma</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Takibi:</Text>
                  <Text style={styles.text2}>Toplam 5 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Stok Takibi:</Text>
                  <Text style={styles.text2}>Toplam 5 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Yorum Takibi:</Text>
                  <Text style={styles.text2}>Toplam 5 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Fiyat Takibi:</Text>
                  <Text style={styles.text2}>Toplam 5 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Index Kontrolü:</Text>
                  <Text style={styles.text2}>Toplam 5 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Sıralama Bulucu:</Text>
                  <Text style={styles.text2}>Toplam 5 ürün</Text>
                </View>
              </View>
              <TouchableOpacity onPress={()=>{props.navigation.navigate("Standart Paket")}} style={[styles.iconContainer, {backgroundColor :'#31708f',}]}>
                  <Icon name={"shopping-cart"} style={styles.icon} />
                  <Text style={styles.iconText}>Satın Al</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setFull(!full)}>
          <View style={styles.containerFull}>
            <View>
              <Text style={[styles.textMain, {color: '#3c763d'}]}>
                Full Paket
              </Text>
              <Text style={[styles.textSecondary, {color: '#3c763d'}]}>
                Chrome Eklentisi + Web Uygulaması
              </Text>
            </View>
            <Icon name="chevron-down" size={22} style={{color: '#3c763d'}} />
          </View>          
          {full ? (
            <View style={[styles.contentMain,{borderColor: '#3c763d', borderWidth:1}]}>
              <View>
                <View style={styles.title}>
                  <Text style={{fontFamily: Fonts.type.base, color:"black", letterSpacing: 2}}>
                    Chrome Eklentisi
                  </Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kar Komisyon Hesaplama:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Detaylı Liste:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Satış Tahmini:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Liste Skoru:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
              </View>
              <View>
                <View style={[styles.title, {marginTop: 10}]}>
                  <Text style={{fontFamily: Fonts.type.base, color:"black", letterSpacing: 2}}>
                    Web sitesi + Mobil Uygulama
                  </Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Araştırma:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kelime Araştırma/Kategori Bazlı:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Kelime Araştırma/Sıralama Bazlı:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Ürün Takibi:</Text>
                  <Text style={styles.text2}>Toplam 50 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Stok Takibi:</Text>
                  <Text style={styles.text2}>Toplam 50 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Yorum Takibi:</Text>
                  <Text style={styles.text2}>Toplam 50 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Rakip Fiyat Takibi:</Text>
                  <Text style={styles.text2}>Toplam 50 ürün</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Index Kontrolü:</Text>
                  <Text style={styles.text2}>✔</Text>
                </View>
                <View style={styles.contentTitleFree}>
                  <Text style={styles.text1}>Sıralama Bulucu:</Text>
                  <Text style={styles.text2}>Toplam 50 ürün</Text>
                </View>
              </View>
              <TouchableOpacity  onPress={()=>{props.navigation.navigate("Full Paket")}} style={[styles.iconContainer, {backgroundColor :'#3c763d',}]}>
                  <Icon name={"shopping-cart"} style={styles.icon} />
                  <Text style={styles.iconText} >Satın Al</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </TouchableOpacity>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

export {Packages};

const styles = StyleSheet.create({
  bigContainer: {
    backgroundColor: 'white',
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    marginVertical: 5,
    paddingVertical: 10,
  },
  textFirst:{
    fontFamily:Fonts.type.base,
    textAlign: "center",
    marginVertical: 5
  },
  containerFree: {
    backgroundColor: '#fcf8e3',
    width: width * 0.85,
    marginHorizontal: width * 0.05,
    marginVertical: 10,
    borderColor: '#f8ac59',
    borderWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  containerStd: {
    backgroundColor: '#d9edf7',
    width: width * 0.85,
    marginHorizontal: width * 0.05,
    marginVertical: 10,
    borderColor: '#31708f',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  containerFull: {
    backgroundColor: '#dff0d8',
    width: width * 0.85,
    marginHorizontal: width * 0.05,
    marginVertical: 10,
    borderColor: '#3c763d',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  main: {

  },
  textMain: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.base,
    letterSpacing: 2,
  },
  textSecondary: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.moderateScale(14),
  },
  purchase: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
  icon: {
    color: 'white',
    marginRight: 5,
  },
  iconText: {
    fontFamily: Fonts.type.base,
    fontSize: Fonts.moderateScale(14),
    color: 'white',
    fontWeight: 'bold',
  },
  title: {
    borderBottomColor: "#e7eaec",
    borderBottomWidth: 2,
    paddingVertical: 3,
  },
  contentTitleFree: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 8,
    borderBottomColor: "#e7eaec",
    borderBottomWidth: 1,
    paddingVertical: 3,
  },
  contentMain: {
    padding: 8,
    width:width * 0.85,
    marginHorizontal: width * 0.05,
  },
  text1: {
    flex: 2,
    fontFamily: Fonts.type.base,
    color: "black"
  },
  text2: {
    fontFamily: Fonts.type.base,
    flex: 1,
    textAlign: 'center',
    color: "black"
  },
});
