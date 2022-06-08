import { StyleSheet, Dimensions } from 'react-native';
import {
    Fonts,
    Metrics,
    Colors
} from '../../Themes';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
      },
    
      header: {
        backgroundColor: 'white',
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        height: Platform.OS == 'android' ? 80 : 66,
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        // marginHorizontal:10
      },
    
      left: {
        flex: 0.5,
        // marginLeft:5,
        backgroundColor: 'transparent',
      },
    
      body: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'transparent',
      },
    
      right: {
        flex: 0.5,
      },
      title: {
        fontFamily: Fonts.type.base,
        fontSize: 18,
        color: Colors.primary,
      },
      apply: {
        fontFamily: Fonts.type.base,
        fontSize: 14,
        color: Colors.primary,
      },
    
      applySpecial :{
        fontSize: Fonts.moderateScale(16),
        textAlign: 'center',
        marginVertical: 10,
      },
    
      bigContainer: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        marginVertical: 10,
        marginHorizontal: 10,
      },
      container2: {
        flexGrow: 1,
        borderRadius: 10,
      },
      cardContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        height: Metrics.HEIGHT * 0.1,
        marginBottom: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
      },
      text: {
        fontSize: 18,
        color: Colors.primary,
        fontFamily: Fonts.type.base,
      },
      values: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      buttonContainer: {
        backgroundColor: Colors.primary,
        marginHorizontal: Metrics.WIDTH * 0.3,
        marginVertical: 10,
        padding: 8,
      },
      filterContainer: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').height * 0.05,
        borderColor: '#e5e6e7',
        borderBottomWidth: 2,
        marginVertical: 5,
        marginHorizontal: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      filterInput: {
        fontSize: Fonts.moderateScale(14),
        paddingVertical: 0,
        paddingRight: 5,
        fontFamily: Fonts.type.base,
        width: Dimensions.get('window').width * 0.4,
      },
      checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        paddingVertical: 10,
      },
      catText: {
        fontSize: 16,
        fontFamily: Fonts.type.base,
        marginLeft: 3,
      },
})

export default styles;