import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, View, Text, Dimensions, StyleSheet, Linking} from 'react-native';
import {Colors, Fonts, Metrics} from '../Themes/index';
import PackageCard from '../components/PackageDetailCard/PackageCard';
import Purchases from 'react-native-purchases';
import axios from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY } from '../constants';


const PackageDetailFull = () => {
  const [pckg, setPckg] = useState();
  const [pckgStandart, setPckgStandart] = useState('');
  const [pckgFull, setPckgFull] = useState('');

  const getId = async() => {
    id = await AsyncStorage.getItem("@userId")
    Purchases.setup(API_KEY, id);
    // console.log("id", id)
    // setUserId(id)
  }

  const getUserInfo = async() => {
    try {
      const purchaserInfo = await Purchases.getPurchaserInfo();
      // access latest purchaserInfo
      console.log("purchaserInfo", purchaserInfo)
    } catch (e) {
     // Error fetching purchaser info
    }
  }

  const getPackages = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      if (offerings.current !== undefined) {
        const packages = offerings.current.availablePackages
        console.log(packages)
        // Display packages for sale
        console.log('1', offerings);
        console.log("offerings.current", offerings.current);
        setPckg(offerings.current.availablePackages);
        setPckg(offerings.current.availablePackages);
        setPckgStandart(packages[4].product.price_string);
        setPckgFull(packages[7].product.price_string)
        
      } else if(offerings.current === undefined || offerings.all === {}){
        Alert.alert("emparator.com", "Şu anda satın alım işlemi gerçekleştiremiyoruz.Lütfen daha sonra tekrar deneyiniz.")
      }
    } catch (e) {
      console.log(e);
    }
  };

  // console.log("paketler",pckg)
  const startPurchase = async (offer) => { 
    console.log("offer ne ?", offer)

    try {
      const {purchaserInfo, productIdentifier} = await Purchases.purchasePackage(offer);
      const res = await Purchases.purchasePackage(offer)

      // console.log("res", res)
      // console.log("respond ne ?", purchaserInfo)
      // console.log("identifier", productIdentifier)
      
      if (typeof purchaserInfo.entitlements.active.full !== 'undefined') {

        console.log("satın alma başarılı")
        // Unlock that great "pro" content
      }
    } catch (e) {
      if (!e.userCancelled) {
        console.log("BAŞARISIZ")
        // Alert.alert("emparator.com", "Bu kullanıcıya ait aktif üyelik bulunmaktadır.")
        // showError(e);
      }
      console.log("Error", e)
      Alert.alert("emparator.com", "Beklenmedik bir hata oluştu.Lütfen daha sonra tekrar deneyiniz.")
    }
  };

  useEffect(() => {
    getPackages();
    // getUserInfo()
    getId()
  }, []);

  return (
    <ScrollView>
    <ImageBackground
      source={require('../Images/bg20.png')}
      style={{width: '100%', height: '100%'}}
    >
      <View style={styles.cardBox}>
      <PackageCard
        title={'Aylık Abonelik'}
        price={pckgStandart}
        color={Colors.blue}
        onClick={() => pckg === undefined ? Alert.alert("emparator.com", "Lütfen daha sonra tekrar deneyiniz.") : startPurchase(pckg[4])}
      />
      <PackageCard
        title={'Yıllık Abonelik'}
        price={pckgFull}
        color={Colors.ourRed}
        onClick={() => pckg === undefined ? Alert.alert("emparator.com", "Lütfen daha sonra tekrar deneyiniz.") : startPurchase(pckg[7])}
      />
      </View>
                  
    <View style={styles.policyBox}>
      <Text onPress={() => Linking.openURL("https://emparator.com/Home/PrivacyPolicy")} style={styles.text}>Gizlilik Politikası</Text>
      <Text style={styles.column}>|</Text>
      <Text onPress={() => Linking.openURL("https://emparator.com/Home/SalesAgreement")} style={styles.text}>Kullanım Koşulları</Text>
    </View>
  </ImageBackground>
  </ScrollView>
  );
};

export {PackageDetailFull};

const styles = StyleSheet.create({
  cardBox: {
    height: Metrics.HEIGHT * 0.75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-around',
    // borderColor: 'red',
    // borderWidth: 2,
  }, 
  policyBox: {
    flexDirection: "row", 
    justifyContent: "center", 
    height: Metrics.HEIGHT * 0.05, 
    alignItems: 'center',
    marginBottom: 20
},
  text: {
    color: Colors.blacktxt,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.moderateScale(12),
    marginHorizontal: 5,
  },
  column: {
    color: Colors.blacktxt,
    fontFamily: Fonts.type.base,
    fontSize: Fonts.moderateScale(16),
    alignItems: "center",
    justifyContent: "center"
  }
})
