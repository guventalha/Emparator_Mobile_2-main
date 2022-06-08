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
  catContainer:{
    marginHorizontal: Metrics.WIDTH * 0.025,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  title : {
    display: 'flex',
    flexDirection: 'row',
    width: '50%', 
    justifyContent: 'space-between',
  },    
  catText: {
    fontWeight: 'bold',
    width: '70%',
    color: '#1e8a4b'
  },
  kwText : {
    fontWeight: 'bold',
    width: '70%',
    color: '#9b59b6'
  },
  keyword : {
    width: '70%',
    borderColor: 'red',
    borderWidth: 1,

  },
  innerContainer: {
    width: '90%',
    marginHorizontal: '5%',
    padding: 10,
  },

  innerTitle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  borderHorizontal: {
    backgroundColor: '#ebeced',
    width: '100%',
    height: 2,

  },


});
export default styles;