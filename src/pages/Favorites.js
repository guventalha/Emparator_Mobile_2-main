import React, {useEffect, useState, use} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  StatusBar,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container, Header, Left, Body, Right} from 'native-base';
import FavCard from '../components/Favorites/FavCard';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {ImageBackground} from 'react-native';
import {Colors, Fonts} from '../Themes';
import FollowCount from '../components/FollowCount';

import {useAuth} from '../Router';
import { Alert } from 'react-native';

const Favorites = ({navigation}) => {
  const isFocused = useIsFocused();
  const {signOut} = useAuth();

  const [rowData, setRowData] = useState({});
  const [loading, setLoading] = React.useState(true);

  const [username, setUsername] = useState();
  const [change, setChange] = useState(false);
  const [follow, setFollow] = useState(false);

  const [userInfo, setUserInfo] = React.useState({UserPackage: {}});
  const [followCount, setFollowCount] = React.useState();

  function getRowData() {
    // console.log('getRowData çalıştı');
    // setLoading(true);
    AsyncStorage.getItem('@userName').then((res) => {
      // console.log(res);
      setUsername(res);
      AsyncStorage.getItem('@userToken').then((token) => {
        // console.log(token);
        axios
          .post('https://api.emparator.com/Mobile/UserFollow', {
            username: res,
            token: token,
          })
          .then((veri) => {
            // console.log(veri)
            if (veri.data === "" ) {
              Alert.alert("emparator.com", "Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.")
              signOut();
            } else {
              // console.log('veriler', veri);
              setRowData(veri.data.data.Products);
              // setLng(veri.data.data.Products.length())
              setLoading(false);
              getUserInfo()
            }
          });
      });
    });
  }

  function getUserInfo() {
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/UserInfos', {
          username: response[0][1],
          token: response[1][1],
        })
        .then((data) => {
          // console.log('userInfo', data.data);
          setUserInfo(data.data.data);
          setFollowCount(data.data.data.User.FollowCount);
        });
    });
    if (userInfo.UserPackage.PackageId === 3) {
      setFollow(50);
    } else if (userInfo.UserPackage.PackageId === 2) {
      setFollow(10);
    } else {
      setFollow(1);
    }
  }

  function deleteItem(id) {
    // console.log('ID NE YAKALIYOR', id);
    setChange(true)
    AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
      axios
        .post('https://api.emparator.com/Mobile/DeleteFollow', {
          username: response[0][1],
          token: response[1][1],
          productId: id,
        })
        .then(result => {
          if(result === ""){
            Alert.alert("emparator.com", "Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.")
            signOut()
          }else{
            // console.log('Silindi');
            setChange(false);
          }
        });
    });
  }

  useEffect(() => {
    getRowData();
    // getUserInfo();
  }, [change, isFocused]);

  // console.log("USERINFO", userInfo)

  function getFavCards({item}) {
    // console.log("PROPS",props)
    return (
      <View>
        <FavCard
          rowData={item}
          DetailPageRoute={() => {
            navigation.navigate('Ürün Detayı', {itemId: item.Id});
          }}
          onDelete={deleteItem}
          change={change}
        />
      </View>
    );
  }

  return (
    // <ImageBackground resizeMode="contain" source={require("../Images/bg1.jpg")} style={{width: "100%", height: "100%"}}>
    <ImageBackground
      source={require('../Images/bg20.png')}
      style={styles.container}>
      <StatusBar hidden />
      {/* <Text style={{
        fontFamily: Fonts.type.base,
        color: "#ED9E47",
        marginLeft: "5%",
        marginTop: 8
      }}>Takip Edilen Ürün</Text>
      <FollowCount
        step={followCount}
        steps={follow}
        height={8}
      />  */}
      <ScrollView>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <ActivityIndicator size="small" color={Colors.primary} />
          </View>
        ) : (
          <View>
            <FlatList
              keyExtractor={(item) => String(item.Id)}
              data={rowData}
              renderItem={getFavCards}
              enableEmptySections
              pageSize={4}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
    height: Platform.OS == 'android' ? 80 : 66,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  left: {
    flex: 0.5,
    backgroundColor: 'transparent',
  },
  body: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  right: {
    flex: 0.5,
  },
});
