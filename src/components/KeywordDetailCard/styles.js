import {Platform, StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../Themes';


const styles = StyleSheet.create({
    mainContainer :{
        width: Metrics.WIDTH * 0.95,
        marginHorizontal: Metrics.WIDTH * 0.025,
        marginVertical: Metrics.HEIGHT * 0.015,
        backgroundColor: "#fff",
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
    borderHorizontal: {
        backgroundColor: '#ebeced',
        width: Metrics.WIDTH * 0.9,
        height: 2,
        marginHorizontal: Metrics.WIDTH * 0.025,
      },
      logo: {
        width: 30,
        height: 30,
        // position:"absolute",
        // left:10,
        // top: 10,
        // backgroundColor: "white",
        // borderRadius:20
      },
      cat :{
        marginVertical: 5,
        marginHorizontal: Metrics.WIDTH * 0.025,
        fontFamily: Fonts.type.base,

      },
      title: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: Metrics.WIDTH * 0.025,
        fontFamily: Fonts.type.base,        
      },
      text:{
        
      },
      number :{
        color: 'red',
        fontWeight: '600'
        
      },

      keywordContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: Metrics.WIDTH * 0.025,
        marginVertical: Metrics.WIDTH * 0.025
      },
    
      datatContainer: {
        marginVertical: Metrics.WIDTH * 0.03
      },
    
      rateContainer: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: Metrics.WIDTH * 0.025,
          marginVertical : Metrics.WIDTH * 0.01
      }


})

export default styles; 