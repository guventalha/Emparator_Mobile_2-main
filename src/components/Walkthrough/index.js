import React, { Component } from "react";
import {
  Text,
  View,
  StatusBar,
  Platform,
  ImageBackground,
  BackHandler,
} from "react-native";
import { Container, Button, Right, Header, Left, Body } from "native-base";
import Swiper from "react-native-swiper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Zocial from "react-native-vector-icons/Zocial";
import styles from "./styles";
import images from "../../Themes/Images";

export default class WalkthroughRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillMount() {
  //   var that = this;
  //   BackHandler.addEventListener("hardwareBackPress", function() {
  //     that.props.navigation.navigate("Walkthrough");
  //     return true;
  //   });
  // }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0.3)", true);
      StatusBar.setTranslucent(true);
    }
    // let bgImage = {
    //   uri:
    //     "https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_bg_wtnine.png"
    // };

    var data = [
      {
        id: 1,
        title: "Emparator.com ile",
        description:
          "Satış adedlerini görebilir, kar marjınızı hesaplayabilirsiniz.",
          uri: images.bg1
      },
      {
        id: 2,
        title: "Emparator.com ile",
        description:
          "Satılacak fırsat ürünlerini bulabilirsiniz.",
          uri: images.bg2
        },
      {
        id: 3,
        title: "Emparator.com ile",
        description:
          "Rakip ürünlerin takip ve analizini yapabilirsiniz.",
          uri: images.bg3
      },
      {
        id: 4,
        title: "Emparator.com ile",
        description:
          "Kelime hacimleri ve ürün kelime analizini yapabilirsiniz.",
          uri: images.bg4
      }
    ];

    return (
      <Container style={styles.container}>
        {/* <ImageBackground source={bgImage} style={styles.imgContainer}> */}
          <View style={styles.slidesec}>
            <Swiper
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={3}
              activeDot={<View style={styles.activeDot} />}
              dot={<View style={styles.dot} />}
            >
              {data.map((item, index) => {
                return (
                  <ImageBackground source={item.uri} style={{width:"100%", height:"100%"}} key={index} >
                  <View style={styles.slide} key={index}>
                    <Text style={styles.headertext}>{item.title}</Text>
                    <Text style={styles.desctext}>{item.description}</Text>
                  </View>
                  </ImageBackground>
                );
              })}
            </Swiper>
          </View>
        {/* </ImageBackground> */}

        <View style={styles.btnsec}>
          {/* <Text style={styles.signUptext}>Sign up to get started</Text> */}
          <View style={styles.fbEmailBtnBg}>
            <Button
              bordered
              rounded
              light
              style={styles.btnBg}
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              {/* <FontAwesome name="facebook" size={22} color="white" /> */}
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </Button>
            <Button
              bordered
              rounded
              light
              style={styles.btnBg}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              {/* <Zocial name="email" size={22} color="white" /> */}
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
