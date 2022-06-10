import React, {Component} from 'react';
import App from './app.routes';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNBootSplash from 'react-native-bootsplash';
import Purchases from 'react-native-purchases';
import SignUp from './components/SignUp/SignUp';
import SignRoutes from './sign.routes';
import {Alert, BackHandler} from 'react-native';
import axios from 'axios';
import {fcmService} from './FCMService';
import WalkthroughRecipe from './components/Walkthrough/index';
import {API_KEY} from './constants';

export const UseContext = React.createContext();
const Stack = createStackNavigator();

export default function Router({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            isLogged: true,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            userToken: null,
            isLogged: false,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            isLogged: false,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      isLogged: false,
    },
  );

  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);

    function onRegister(token) {
      // console.log("onRegister:", token)
    }

    function onNotification(notify) {
      console.log('onNotification:', notify);
      const options = {
        soundName: 'default',
        playSound: true,
      };
    }

    function onOpenNotification(notify) {
      alert('Bildirim:', notify.body);
    }

    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('@userToken');
      } catch (e) {
        // Restoring token failed
      }

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();

    return () => {
      fcmService.unRegister();
    };
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async ({mail, password}) => {
        let userToken, res, accessLevel;
        const response = await axios.get(
          `https://api.emparator.com/api/login?username=${mail}&password=${password}&isMobile=${true}`,
        );
        console.log('res', response);
        if (response.data === '0') {
          Alert.alert(
            'Emparator.com',
            'Kullanıcı bilgilerini kontrol edip tekrar deneyiniz.',
          );
        } else {
          res = response.data.split('/');
          // userId=res[0]
          accessLevel = res[0];
          userToken = res[1];
          userId = res[2];

          console.log('id', userId);

          AsyncStorage.setItem('@userId', userId);
          AsyncStorage.setItem('@accesLevel', accessLevel);
          AsyncStorage.setItem('@userToken', userToken);
          AsyncStorage.setItem('@userName', mail);
          Purchases.setup('UdAEEEQPmsNMgnWupBNDQFivBdvNNODf', userId);
        }

        dispatch({type: 'SIGN_IN', token: userToken});
      },
      signOut: async () => {
        await AsyncStorage.removeItem('@userToken');
        await AsyncStorage.removeItem('@userId');
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async ({email, password, passwordConfirm}) => {
        if (password != passwordConfirm) {
          Alert.alert(
            'emparator.com',
            'Şifre ve şifre tekrarı aynı olmalıdır.',
          );
        } else {
          const response = await axios.post(
            'https://api.emparator.com/Mobile/Register',
            {
              Email: email,
              Password: password,
              ConfirmPassword: passwordConfirm,
            },
          );
          console.log('SIGNUP', response);
          if (response.data === 'Kayıt başarılı') {
            Alert.alert(
              'emparator.com',
              'Kayıt işleminiz başarıyla gerçekleşmiştir. E-postanıza gelen maili onayladıktan sonra giriş yapabilirsiniz.',
            );
          } else if (
            response.data ===
            'Bu e-posta adresi sistemimizde kayıtlıdır. Lütfen giriş sayfasından sisteme giriş yapınız veya farklı bir e-posta adresi ile kayıt olunuz.'
          ) {
            Alert.alert(
              'emparator.com',
              'Bu e-posta adresi sistemimizde kayıtlıdır. Lütfen giriş sayfasından sisteme giriş yapınız veya farklı bir e-posta adresi ile kayıt olunuz.',
            );
          } else if (response.data === 'Lütfen tüm alanları doldurunuz!') {
            Alert.alert('emparator.com', 'Lütfen tüm alanları doldurunuz!');
          }
        }
        dispatch({type: 'SIGN_UP', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <UseContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {state.userToken == null ? (
            <>
              <Stack.Screen name="Walkthrough" component={WalkthroughRecipe} />
              <Stack.Screen name="SignIn" component={SignRoutes} />
              <Stack.Screen name="SignUp" component={SignUp} />
              {/* <Stack.Screen name="Settings" component={Settings}/> */}
            </>
          ) : (
            <Stack.Screen name="App" component={App} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UseContext.Provider>
  );
}

export const useAuth = () => React.useContext(UseContext);

// const value1 =  AsyncStorage.getItem('@firstOpen');

// console.log(value1.then(x=>{
//   if(x==null){
//     console.log("1")
//     AsyncStorage.setItem('@firstOpen', "0");
//      this.setState({isFirstUsage:true})
//   } else{
//     console.log("2")
//      this.setState({isFirstUsage:false})
//   }
// }).then(()=>{
//   RNBootSplash.hide({fade:true})
// }))

// AsyncStorage.removeItem('IsLoginFirst')
// console.log(AsyncStorage.getItem('IsLoginFirst'))
// }
