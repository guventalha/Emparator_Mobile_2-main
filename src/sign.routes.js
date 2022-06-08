import React, { useEffect, useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignUp/SignUp'
import App from "../src/app.routes"
import { StatusBar } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack =createStackNavigator()

const SignRoutes = () => {
  const[isLogged, setIsLogged] = useState(false)

  StatusBar.setBarStyle("light-content", true);
  if (Platform.OS === "android") {
    StatusBar.setBackgroundColor("transparent", true);
    StatusBar.setTranslucent(true);
  }

  useEffect(() =>{
    AsyncStorage.getItem("@userToken")
    .then((userData) =>{
      console.log("radio check", userData)
      if(userData){
        setIsLogged(true)
      }
    })
  })


    return(
      <Stack.Navigator
        initialRouteName={!isLogged ? "SignIn" : "App"}
      >
          <Stack.Screen 
            name="SignIn" 
            component={SignIn}
            options={{
              HeaderBackButton:true, 
              headerShown:false, title:null, 
              headerTransparent:true, 
              color:'white',
            }}/>
          <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            HeaderBackButton:true, 
            headerShown:true, title:"Giriş Yap", 
            headerTransparent:true, 
            headerTintColor:'white',
            headerTitleAlign:"left"
          }}
          />  
          <Stack.Screen 
          name="App" 
          component={App}
          options={{
          headerShown:false
          }}/>
      </Stack.Navigator>
    )
}

export default SignRoutes ;