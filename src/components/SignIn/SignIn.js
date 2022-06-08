import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
  I18nManager,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

import { useAuth } from "../../Router"

// Screen Styles
import styles from "./styles";
import { Colors } from "../../Themes";
//import { Images } from "../../../Themes/";

const SignIn = (props) => {
  const[mail, setMail] = useState("")
  const[password, setPassword] = useState("")


    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    const { signIn } = useAuth();

    // function onLogin() {
    //   axios.get(`https://api.emparator.com/api/login?username=${mail}&password=${password}&isMobile=${true}`)
    //   .then((response) => {
    //     console.log("response bu gelecek",response)
    //     if(response.data === "0"){
    //       Alert.alert("Emparator.com","Kullanıcı bilgilerini kontrol edip tekrar deneyiniz.")
    //     }
    //     else{
    //       const res = response.data.split("/")
    //       const accessLevel = res[0]  
    //       const userToken = res[1]

    //       AsyncStorage.setItem("@accesLevel", accessLevel)
    //       AsyncStorage.setItem("@userToken", userToken)
    //       AsyncStorage.setItem("@userName", mail)
    //       props.navigation.navigate("App")
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }

    return (
        <ImageBackground style={styles.imgContainer} resizeMode={"cover"} source={require("../../Images/bg20.png")}>
        <>
         <View style={styles.image}>
         <Image resizeMode="contain"  style={{width:"90%", height:200}} source={require("../../Images/newLogo5.png")}/>
         </View>

         <View style={styles.input}>
         <View>
            <TextInput
              style={styles.textInput}
              onChangeText={setMail}
              placeholder="E-posta Adresi"
              placeholderTextColor= {Colors.primary}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="email-address"
              color={Colors.primary}
            />

            <TextInput
              style={styles.textInput}
              onChangeText={setPassword}
              secureTextEntry={true}
              placeholder="Şifre"
              placeholderTextColor= {Colors.primary}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="default"
              color={Colors.primary}
            />
          </View>
       
          <View>
          <TouchableOpacity
            style={styles.buttonSignIn}
            onPress={() => signIn({mail, password})}
          >
            <Text style={styles.textWhite}>Giriş Yap</Text>
          </TouchableOpacity>
         </View>
          </View>
</>
        </ImageBackground>
    );
  }

  export default SignIn;

