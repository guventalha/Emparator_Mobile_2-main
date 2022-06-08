import { Platform, StyleSheet, I18nManager } from "react-native";
import { Fonts, Metrics, Colors } from "../../Themes";

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,

  },
  image:{
    flex:0.75,
    justifyContent:"center",
    alignItems:"center"
  },
  input:{
    flex:1.25,
    alignItems:"center"
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 5,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: "center",
    width: Metrics.WIDTH * 0.84,
    fontSize: Fonts.moderateScale(14),
   fontFamily: Fonts.type.base,
  },

  buttonSignIn: {
    backgroundColor: "#179D82",
    borderRadius: 3,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: Metrics.WIDTH * 0.84,
    height: Metrics.HEIGHT * 0.06,
    marginTop:20
  },
  textWhite: {
    color: "#fff",
    fontSize: Fonts.moderateScale(14),
    fontFamily: Fonts.type.base,
  },
});

export default styles;
