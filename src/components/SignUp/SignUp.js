import React, { Component, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Platform,
  StatusBar,
  BackHandler,
  I18nManager
} from "react-native";
import axios from "axios"
import styles from "./styles";

//import { Images } from "../../../Themes/";
import { useAuth } from "../../Router"
import { Colors } from "../../Themes";

const SignUp = (props) => {
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const[passwordConfirm, setPasswordConfirm] = useState("")

    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("transparent", true);
      StatusBar.setTranslucent(true);
    }

    const { signUp } = useAuth();
    // function onRegister() {
    //   axios.post("https://emparator.com/Mobile/Register",{
    //     Email : email,
    //     Password : password,
    //     ConfirmPassword:passwordConfirm
    //   })
    //   .then((response) => {
    //     console.log("response bu gelecek",response)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }

    // const imageUri =
    //   "https://antiqueruby.aliansoftware.net//Images/signin/ssevenbgsseven.png";

      return (
        <ImageBackground style={styles.imgContainer} resizeMode={"cover"} source={require("../../Images/bg20.png")}>
        
         <View style={styles.image}>
         <Image style={{width:"85%", height:"50%"}} source={require("../../Images/newLogo5.png")}/>
         </View>

         <View style={styles.input}>
         <View>
            <TextInput
              style={styles.textInput}
              placeholder="E-posta Adresi"
              placeholderTextColor={Colors.primary}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="email-address"
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Şifre"
              placeholderTextColor={Colors.primary}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="default"
              onChangeText={setPassword}
              color={Colors.primary}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Şifre Tekrar"
              placeholderTextColor={Colors.primary}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              textAlign={I18nManager.isRTL ? "right" : "left"}
              keyboardType="default"
              onChangeText={setPasswordConfirm}
              color={Colors.primary}
            />
          </View>
       
          <View>
        <TouchableOpacity 
        style={[styles.buttonSignIn]}
        onPress={() => signUp({email, password, passwordConfirm})}>
            <Text style={styles.textWhite}>Kayıt Ol</Text>
          </TouchableOpacity>
        <TouchableOpacity 
        style={[styles.buttonSignIn]}
        onPress={() => props.navigation.navigate("SignIn")}>
            <Text style={styles.textWhite}>Giriş Yap</Text>
          </TouchableOpacity>
         </View>
          </View>

        </ImageBackground>
    );
  }

  export default SignUp;
