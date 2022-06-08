import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Image, 
  Webview,
  Linking, 
  BackHandler,
  Alert,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fonts } from '../Themes/index';
import Toggle from '../components/Toggle';
import axios from 'axios';
import RNRestart from 'react-native-restart';

import { useAuth } from "../Router"

const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('screen');

const Settings = (props) => {
  const [isToggleOpen, setIsToggleOpen] = React.useState(false);
  const [contact, setContact ] = React.useState(false)

  function openWhatsapp(){
      Linking.openURL("https://api.whatsapp.com/send/?phone=905467360222&text=Merhaba,%20Emparator.com%20ile%20ilgili%20bir%20sorum%20var.")
  }

  function openTelegram(){
      Linking.openURL("https://t.me/Emparator_Official_Channel")
  }

  // function logOut(){
  //      AsyncStorage.removeItem("@userToken")
  //         RNRestart.Restart();
  // }

  const { signOut } = useAuth();
  
  return (
    <ImageBackground  source={require("../Images/bg20.png")} style={{width: "100%", height: "100%"}} >
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.buttonContainer,{borderBottomColor: 'rgb(26,179,148)', borderBottomWidth: 0.5}]}
          onPress={() => {
            props.navigation.navigate("Üyelik Durumu")}}
          >
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user-circle" size={18} style={styles.icon} />
            <Text style={styles.text}>Üyelik Durumu</Text>
          </View>
          <Icon name="chevron-right" size={18} style={styles.icon} />
        </TouchableOpacity> 
        <TouchableOpacity 
        onPress={() => props.navigation.navigate("Üyelik Paketleri")}
        style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="box-open" size={18} style={styles.icon} />
            <Text style={styles.text}>Üyelik Paketleri</Text>
          </View>
          <Icon name="chevron-right" size={18} style={styles.icon} />
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => purchase() } style={styles.buttonContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="shopping-bag" size={18} style={styles.icon} />
            <Text style={styles.text}>Satın Al</Text>
          </View>
          <Icon name="chevron-right" size={18} style={styles.icon} />
        </TouchableOpacity> */}
      </View>

      {/* <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="bell" color={Colors.primary} size={18} style={styles.icon} />
                <Text style={styles.text}>Bildirimler</Text>
            </View>
            <Toggle
            openReminder={() => setIsToggleOpen(!isToggleOpen)}
            value={isToggleOpen}
            />
        </View>
      </View> */}
      <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => setContact(!contact)}
        style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="phone" color={Colors.primary} size={18} style={styles.icon} />
                <Text style={styles.text}>İletişim</Text>
            </View>
            {/* <Icon name="chevron-down" size={18} style={styles.icon}/> */}
        </TouchableOpacity>

            <View>
            <View style={[styles.wp, {borderBottomColor: 'rgb(26,179,148)', borderBottomWidth: 0.5}]}>
                <View>
                    <View style={{flexDirection: "row", alignItems: 'center', }}>
                    <Icon name="whatsapp" size={20} style={[styles.icon, {color:"#01E675"}]} />
                    <Text style={{fontFamily: Fonts.type.base,}}>Whatsapp İletişim Hattı</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily: Fonts.type.base,padding: 5}}>0546 736 0222</Text>
                    </View>
                </View>
                <TouchableOpacity 
                onPress={() => openWhatsapp()}
                // style={{backgroundColor:"#01E675", borderRadius:10}}
                >
                    <Icon name="external-link-alt" size={16} style={[styles.icon,{margin: 10, color:"#01E675"}]}/>
                </TouchableOpacity>
            </View> 
            <View style={styles.wp}>
                <View>
                    <View style={{flexDirection: "row", alignItems: 'center', }}>
                    <Icon name="telegram" size={20} style={[styles.icon, {color: "#28A8E9"}]} />
                    <Text style={{fontFamily: Fonts.type.base,}}>Telegram Grubu</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily: Fonts.type.base,padding: 5}}>Emparator Channel</Text>
                    </View>
                </View>
                <TouchableOpacity 
                onPress={() => openTelegram()}
                // style={{backgroundColor:"#28A8E9", borderRadius:10}}
                >
                    <Icon name="external-link-alt" size={16} style={[styles.icon,{margin: 10, color:"#28A8E9"}]}/>
                </TouchableOpacity>
            </View> 
            </View>
      </View>
            <View style={styles.container}>
        <TouchableOpacity onPress={()=>signOut()}  style={styles.buttonContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="sign-out-alt" color={Colors.primary} size={18} style={styles.icon} />
                <Text style={styles.text}>Çıkış Yap</Text>
            </View>
            {/* <Toggle
            openReminder={() => setIsToggleOpen(!isToggleOpen)}
            value={isToggleOpen}
            /> */}
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={() => logOut()}>
        <Text style={styles.out}>Çıkış Yap</Text>
      </TouchableOpacity> */}
    </ScrollView>
    </ImageBackground>
  );
};

export { Settings };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.95,
    marginHorizontal: width * 0.025,
    marginVertical: height * 0.01,
    padding: 8,
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
    textAlign: "center"
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.type.base,
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
    fontSize: 14,
    fontFamily: Fonts.type.base,
  }
});
