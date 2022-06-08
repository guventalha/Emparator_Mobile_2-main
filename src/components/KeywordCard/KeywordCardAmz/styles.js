import {Platform, StyleSheet} from 'react-native';
import {Metrics, Fonts, Colors} from '../../../Themes/index';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex:1,
        width: Metrics.WIDTH * 0.95,
        marginHorizontal: Metrics.WIDTH * 0.025,
        marginVertical: Metrics.HEIGHT * 0.007,
        backgroundColor: '#fff',
        borderRadius: 3,
        borderColor: '#A9A9A9',
        borderWidth: 0.3,
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,
        // elevation: 11,
      },
      border : {
        borderColor: '#D3D3D3',
        borderWidth: 0.5,
        height: '90%', 
        marginVertical: '2%', 
      },
      keywordContainer: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flex:1,
         // borderColor: 'red',
        // borderWidth: 1,
        
      },
      orderNo: {
        backgroundColor: '#a15818',
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 5, 
        borderRadius: 5
      },
      keyword: {
        fontFamily: Fonts.type.base,
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#a15818'
      },
      contentContainer :{
        flex: 4,
        padding: 15,
           
      },
      asinContainer :{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        paddingVertical: 5,
        // justifyContent: 'space-around'
      },
      title: {
        width: '30%', 
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        letterSpacing: 0.8,
        color: '#e67e22'
       
      },
      asinText : {
        width: '40%', 
        textAlign: 'center',
        color : "#337ab7",
        fontFamily: Fonts.type.base,
        // fontWeight: '700'
      },
      rateText : {
        width: '30%', 
        textAlign: 'center',
        fontFamily: Fonts.type.base,
        letterSpacing: 0.8,
        color: 'black'
      }
      
})

export default styles;

