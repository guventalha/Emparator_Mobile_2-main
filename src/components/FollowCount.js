import React from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Fonts, Colors, Metrics } from "../Themes"

const FollowCount = ({step, steps, height, number}) => {
    const animatedValue = React.useRef(new Animated.Value(-1000)).current
    const reactive = React.useRef(new Animated.Value(-1000)).current
    const [ width, setWidth ] = React.useState(0)

    React.useEffect(() => {
        Animated.timing(animatedValue,{
            toValue: reactive,
            duration:300,
            useNativeDriver: true
        }).start()
    },[])

    React.useEffect(() => {
        reactive.setValue((width * step )/ steps - width)
    },[step, width])

  return (
    <>
    <View style={{
        flexDirection: 'row',
        alignItems: "center",
    }}>
      <View
        onLayout={(e) => {
            const newWidth = e.nativeEvent.layout.width
            setWidth(newWidth)
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
          width: "80%",
          marginHorizontal: "5%",
          marginVertical: 10
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: "#ED9E47",
            position: 'absolute',
            left:0,
            top: 0,
            transform :[{
                translateX: animatedValue
            }]
          }}
        />
      </View>
      <Text style={{fontFamily: Fonts.type.base, color:"#ED9E47"}}>{step}/{steps}</Text>
    </View>
    </>
  );
};

export default FollowCount;
