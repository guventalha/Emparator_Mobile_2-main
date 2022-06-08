import {StyleSheet, I18nManager} from 'react-native';
import {Fonts, Metrics, Colors} from '../../Themes';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.transparent,
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT,
    marginHorizontal:Metrics.marginHorizontal,
  },

  imgContainer: {
    width: Metrics.WIDTH,
    height: Metrics.HEIGHT * 0.73,
  },

  header: {
    backgroundColor: Colors.transparent,
    height: Metrics.HEIGHT * 0.1,
    borderBottomWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.05,
    elevation: 0,
    paddingLeft: Metrics.WIDTH * 0.05,
    paddingRight: Metrics.WIDTH * 0.05,
  },
  backArrow: {
    width: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  left: {
    flex: 0.5,
  },

  body: {
    flex: 3,
    alignSelf: 'center',
  },

  right: {
    flex: 0.5,
  },

  slidesec: {
    textAlign: "center",
    width:Metrics.WIDTH * 0.9,
    // marginHorizontal: Metrics.WIDTH * 0.05,
    // backgroundColor: 'rgba(0,0,0,0.6)',
    height: Metrics.HEIGHT * 0.85,
  },

  slide: {
    // backgroundColor: "rgba(0,0,0,0.4)",
    position:'absolute',
    bottom:Metrics.HEIGHT * 0.05,
    left:Metrics.WIDTH * 0.15,
    // marginBottom: Metrics.HEIGHT * 0.15 ,
    // marginHorizontal: Metrics.WIDTH *0.1,
    // height: Metrics.HEIGHT * 0.85,
    borderRadius:10,
    justifyContent: 'flex-end',
    // paddingBottom: Metrics.HEIGHT * 0.12,
  },

  btnsec: {
    height: Metrics.HEIGHT * 0.1,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    paddingTop: Metrics.HEIGHT * 0.05,
    textAlign: "center"
  },

  headertext: {
    fontFamily: Fonts.type.base,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(20),
    width: Metrics.WIDTH * 0.7,
    color: Colors.primary,
  },

  desctext: {
    fontFamily: Fonts.type.base,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(14),
    width: Metrics.WIDTH * 0.7,
    color: Colors.primary,
    marginTop: Metrics.HEIGHT * 0.01,
    marginBottom: Metrics.HEIGHT * 0.02,
  },

  dot: {
    backgroundColor: Colors.primary,
    width: Metrics.WIDTH * 0.02,
    height: Metrics.WIDTH * 0.02,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    // marginTop: Metrics.HEIGHT * 0.03,
  },

  activeDot: {
    backgroundColor: Colors.primary,
    width: Metrics.WIDTH * 0.025,
    height: Metrics.WIDTH * 0.025,
    borderRadius: Metrics.WIDTH * 0.01,
    marginLeft: Metrics.WIDTH * 0.005,
    marginRight: Metrics.WIDTH * 0.005,
    // marginBottom: Metrics.HEIGHT * 0.003,
    // marginTop: Metrics.HEIGHT * 0.03,
  },

  signUptext: {
    fontFamily: Fonts.type.base,
    backgroundColor: Colors.transparent,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Fonts.moderateScale(17),
    width: Metrics.WIDTH * 0.7,
    color: Colors.snow,
  },

  buttonText: {
    color: Colors.primary,
    fontSize: Fonts.moderateScale(16),
    fontFamily: Fonts.type.base,
    paddingLeft: I18nManager.isRTL ? 0 : Metrics.WIDTH * 0.025,
    paddingRight: I18nManager.isRTL ? Metrics.WIDTH * 0.025 : 0,
  },

  fbEmailBtnBg: {
    flexDirection: 'row',
    // marginTop: Metrics.HEIGHT * 0.05,
    width: Metrics.WIDTH * 0.88,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  btnBg: {
    width: Metrics.WIDTH * 0.41,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
