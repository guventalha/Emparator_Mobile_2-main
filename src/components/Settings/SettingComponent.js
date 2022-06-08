import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Linking } from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  ScrollView,
  StyleSheet,
  Image, 
  Webview,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../../Themes';
import {Toggle} from '../Toggle';

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const SettingComponent = () => {
  const [isToggleOpen, setIsToggleOpen] = React.useState(false);
  const [contact, setContact ] = React.useState(false)

  function openWhatsapp(){
      Linking.openURL("https://api.whatsapp.com/send/?phone=905427360222&text=Merhaba,%20Emparator.com%20ile%20ilgili%20bir%20sorum%20var.")
  }

  function openTelegram(){
      Linking.openURL("https://t.me/emparatorsaticilari")
  }

  function logOut(props){
        AsyncStorage.removeItem("@userToken")
        props.navigation.navigate("OnBoarding")
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            {borderBottomColor: 'rgb(26,179,148)', borderBottomWidth: 0.5},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user-circle" size={24} style={styles.icon} />
            <Text style={styles.text}>Üyelik Durumu</Text>
          </View>
          <Icon name="chevron-right" size={22} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="box-open" size={22} style={styles.icon} />
            <Text style={styles.text}>Üyelik Paketleri</Text>
          </View>
          <Icon name="chevron-right" size={22} style={styles.icon} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => purchase() } style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="shopping-bag" size={22} style={styles.icon} />
            <Text style={styles.text}>Satın Al</Text>
          </View>
          <Icon name="chevron-right" size={22} style={styles.icon} />
        </TouchableOpacity> */}
      </View>

      <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="bell" color={Colors.primary} size={22} style={styles.icon} />
                <Text style={styles.text}>Bildirimler</Text>
            </View>
            <Toggle
            openReminder={() => setIsToggleOpen(!isToggleOpen)}
            value={isToggleOpen}
            />
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => setContact(!contact)}
        style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="phone" color={Colors.primary} size={22} style={styles.icon} />
                <Text style={styles.text}>İletişim</Text>
            </View>
            {/* <Icon name="chevron-down" size={22} style={styles.icon}/> */}
        </TouchableOpacity>

            <View>
            <View style={[styles.wp, {borderBottomColor: 'rgb(26,179,148)', borderBottomWidth: 0.5}]}>
                <View>
                    <View style={{flexDirection: "row", alignItems: 'center', }}>
                    <Icon name="whatsapp" size={24} style={[styles.icon, {color:"#01E675"}]} />
                    <Text style={{fontFamily: 'Quicksand-Medium',}}>Whatsapp İletişim Hattı</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Quicksand-Medium',padding: 5}}>0542 736 0222</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => openWhatsapp()}style={{backgroundColor:"#01E675", borderRadius:10}}>
                    <Icon name="external-link-alt" size={22} style={[styles.icon,{margin: 10, color:"white"}]}/>
                </TouchableOpacity>
            </View> 
            <View style={styles.wp}>
                <View>
                    <View style={{flexDirection: "row", alignItems: 'center', }}>
                    <Icon name="telegram" size={24} style={[styles.icon, {color: "#28A8E9"}]} />
                    <Text style={{fontFamily: 'Quicksand-Medium',}}>Telegram Grubu</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily: 'Quicksand-Medium',padding: 5}}>emparatorsatıcıları</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => openTelegram()}style={{backgroundColor:"#28A8E9", borderRadius:10}}>
                    <Icon name="external-link-alt" size={22} style={[styles.icon,{margin: 10, color:"white"}]}/>
                </TouchableOpacity>
            </View> 
            </View>

      </View>
      <TouchableOpacity onPress={() => logOut()}>
        <Text style={styles.out}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SettingComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    marginVertical: height * 0.01,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
    color: Colors.primary,
    width: 30,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    fontFamily: 'Quicksand-Medium',
  },
  wp: {
    flexDirection: "row",
    alignItems: 'center', 
    justifyContent: "space-between", 
    padding: 15,
  },
  out: {
    textAlign: 'center', 
    color: "red",
    fontSize: 16
  }
});
