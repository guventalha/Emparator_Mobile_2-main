import React, {useRef} from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: 'https://image.flaticon.com/icons/png/256/3571/3571572.png',
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571747.png',
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571680.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571603.png',
  },
];

const Indicator = ({scrollX}) => {
  return (
    <View style={{position: 'absolute', bottom: 100, flexDirection: 'row'}}>
      {DATA.map((__, i) => {
        const inputRange= [(i - 1) * width, i * width, (i+1) * width];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp"
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp"
        });

        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 5,
              backgroundColor: '#fff',
              opacity,
              margin: 10,
              transform: [
                  {
                     scale
                  }
              ]
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({scrollX}) => {
  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: bg,
        },
      ]}
    />
  );
};

const renderData = ({item}) => {
        return (
          <View style={{width, alignItems: 'center', padding: 20}}>
            <View style={{flex: 0.7, justifyContent: 'center'}}>
              <Image
                source={{uri: item.image}}
                style={{
                  width: width / 2,
                  height: width / 2,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{flex: 0.3, alignItems: 'center'}}>
              <Text style={{fontWeight: '800', fontSize: 22, color: 'white'}}>
                {item.description}
              </Text>
            </View>
          </View>
        );
}

const OnBoarding = (props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        horizontal
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        renderItem={renderData}
      />
      <Indicator scrollX={scrollX} />
      <View style={{
          flexDirection:'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 25,
      }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('SignIn')}
      >
          <Text style={styles.text}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')}
        style={styles.button}
      >
          <Text style={styles.text}>Kayıt Ol</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "white",
      margin: 10,
      borderRadius: 20
  },
  text: {
      fontSize: 22,
  }
});