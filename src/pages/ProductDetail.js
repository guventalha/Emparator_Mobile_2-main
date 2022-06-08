import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Detail from '../components/ProductDetail/Detail';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../Router';
import {Alert} from 'react-native';

const ProductDetail = ({props, route}) => {
  const {signOut} = useAuth();
  // const [change, setChange] = useState(false)
  const itemId = route.params.itemId;
  const [followCount, setFollowCount] = useState();
  const [packageId, setPackageId] = useState();
  // const [userLogin, setUserLogin] = useState();
  
  // console.log('item id', itemId);

  function getUserInfo() {
    try{
      AsyncStorage.multiGet(['@userName', '@userToken']).then((response) => {
        axios
          .post('https://api.emparator.com/Mobile/UserInfos', {
            username: response[0][1],
            token: response[1][1],
          })
          .then((data) => {
            if (data.data === '') {
              return null
              // console.log("prdetail", data.data)
              // Alert.alert('emparator.com', 'Oturumunuzun süresi sona erdi. Lütfen giriş yaptıktan sonra tekrar deneyiniz.');
              // signOut();
              // setUserLogin(data);
            }else {
              // console.log('userInfo', data.data.data);
              setPackageId(data.data.data.UserPackage.PackageId);
              setFollowCount(data.data.data.User.FollowCount);
            }
          });
      });
    }catch(error){
      console.log(error)
    }

  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Detail
      data={props}
      itemId={itemId}
      followCount={followCount}
      packageId={packageId}
      //userLogin={userLogin}
    />
  );
};

export {ProductDetail};
