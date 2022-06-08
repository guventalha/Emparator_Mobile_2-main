import {Platform, StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../../Themes';

const styles = StyleSheet.create({
  container: {
    width: Metrics.WIDTH * 0.95,
    marginHorizontal: Metrics.WIDTH * 0.025,
    marginVertical: Metrics.HEIGHT * 0.008,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5,
    // position:"absolute",
    // left:10,
    // top: 10,
    // backgroundColor: "white",
    // borderRadius:20
  },

  open : {
    width : '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    width : '80%',
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-around'
  },

  catText: {
    color: '#1e8a4b'
  },

  text:{
    // borderColor: 'gray',
    // borderWidth: 1,
    color: '#676a6c',
    fontFamily: Fonts.type.base,
  },

  order : {
    borderColor: 'red',
    borderWidth: 1,
    color: '#e74c3c',
  }, 

  textKw : {
    fontFamily: Fonts.type.base,
    color: 'black',
    fontWeight : 'bold'
  },
  borderHorizontal: {
    backgroundColor: '#ebeced',
    width: Metrics.WIDTH * 0.9,
    height: 2,
    marginHorizontal: Metrics.WIDTH * 0.025,
  },
  catContainer:{
    marginHorizontal: Metrics.WIDTH * 0.025,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  keywordContainer: {
    // borderColor : 'blue',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Metrics.WIDTH * 0.025,
    marginVertical: Metrics.WIDTH * 0.025
  },

  // datatContainer: {
  //   borderColor : 'gray',
  //   borderWidth: 1,
  // },

  rateContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: Metrics.WIDTH * 0.025,
      marginVertical : Metrics.WIDTH * 0.01
  }
});
export default styles;
