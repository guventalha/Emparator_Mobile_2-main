import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import KeywordDetailCard from '../components/KeywordDetailCard/KeywordDetailCard';
import {Metrics, Fonts, Colors} from '../Themes';


const KeywordSearchDetail = () => {
  return (
    <ImageBackground resizeMode="cover" source={require("../Images/bg20.png")} style={{width: "100%", height: "100%", flex:1}} >
    <View style={styles.container}>
      <Text style={styles.cat}>Kategori</Text>
      <View style={styles.borderHorizontal} />
      <View style={styles.title}>
        <Image style={styles.logo} source={require('../Images/gg.png')} />
        <Text>
          Kategori {'>'} Kategori {'>'} Kategori{' '}
        </Text>
      </View>
    </View>
    <KeywordDetailCard/>
    <KeywordDetailCard/>
    <KeywordDetailCard/>

    </ImageBackground>
  );
};

export {KeywordSearchDetail};


const styles = StyleSheet.create({
    container: {
        width: Metrics.WIDTH * 0.95,
        marginHorizontal: Metrics.WIDTH * 0.025,
        marginVertical: Metrics.HEIGHT * 0.015,
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
        height: Metrics.HEIGHT * 0.07,
        marginHorizontal: Metrics.WIDTH * 0.025
      },
})
