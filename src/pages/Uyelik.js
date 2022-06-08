import axios from 'axios';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, Fonts} from '../Themes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImageBackground} from 'react-native';
import {useAuth} from '../Router';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

export default function Uyelik() {
  const [userData, setUserData] = React.useState({
    UserPackage: {},
    Package: {},
    User: {},
  });

  const {signOut} = useAuth();

  const getUserData = () => {
    AsyncStorage.getItem('@userName').then((response) => {
      // console.log("userName",response)
      AsyncStorage.getItem('@userToken').then((token) => {
        axios
          .post('https://api.emparator.com/Mobile/UserInfos', {
            username: response,
            token: token,
          })
          .then((res) => {
            if (res.data === '') {
              Alert.alert(
                'emparator.com',
                'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.',
              );
              signOut();
            }else{
              setUserData(res.data.data);
              // console.log('SEN NESİN', res.data.data);
            }
          });
      });
    });
  };

  React.useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
     
        <ImageBackground
          source={require('../Images/bg20.png')}
          style={{width: '100%', height: '100%'}}>
             { Object.keys(userData.User).length === 0 ? 
        <View style={{flex: 2, justifyContent: 'center', marginTop: 10}}>
          <ActivityIndicator size="small" color={Colors.primary} />
        </View>
       : 
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.bigText}>Üyelik Durumu</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.secondaryText}>Kayıtlı E-posta Adresi</Text>
              <View style={styles.iconContainer}>
                <Icon name="envelope" size={18} style={styles.icon} />
                <Text style={styles.lastText}>{userData.User.Username}</Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.secondaryText}>Üyelik Paketi Türü</Text>
              <View style={styles.iconContainer}>
                <Icon name="box-open" size={18} style={styles.icon} />
                <View>
                  <Text style={styles.lastText}>{userData.Package.Name}</Text>
                  <Text style={styles.lastText}>
                    {userData.Package.Description}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.secondaryText}>Paket Başlangıç Tarihi</Text>
              <View style={styles.iconContainer}>
                <Icon name="calendar-alt" size={18} style={styles.icon} />
                <Text style={styles.lastText}>
                  {userData.UserPackage.StartDate}
                </Text>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.secondaryText}>Paket Bitiş Tarihi</Text>
              <View style={styles.iconContainer}>
                <Icon name="calendar-alt" size={18} style={styles.icon} />
                <Text style={styles.lastText}>
                  {userData.UserPackage.EndDate}
                </Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text style={styles.secondaryText}>Kalan Süre</Text>
              <View style={styles.iconContainer}>
                <Icon name="hourglass-half" size={18} style={styles.icon} />
                <Text style={styles.lastText}>{userData.RemainDays} gün</Text>
              </View>
            </View>
      
          </View>}
        </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.9,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.05,
    padding: 15,
  },
  bigText: {
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.base,
    letterSpacing: 1.5,
  },
  titleContainer: {
    borderBottomColor: 'rgb(26,179,148)',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  secondaryText: {
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.base,
  },
  infoContainer: {
    borderBottomColor: 'rgb(26,179,148)',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  icon: {
    color: Colors.primary,
  },
  lastText: {
    marginLeft: 8,
    fontSize: Fonts.moderateScale(12),
    fontFamily: Fonts.type.base,
  },
});
