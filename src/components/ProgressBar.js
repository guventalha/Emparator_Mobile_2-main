import React from 'react';
import {View, Text, Animated} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Fonts, Colors, Metrics } from "../Themes"

const ProgressBar = ({step, steps, height,number}) => {
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
      if(steps == 0){
        reactive.setValue((width * step ) - width)
      }else{
        reactive.setValue((width * step )/ steps - width)
        
      }
    },[step, width])

  return (
    <>
    <View style={{
        flexDirection: 'row',
        alignItems: "center",
    }}>
        <View style={{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
        }}>
        <Text style={{fontFamily: Fonts.type.base}}>{number}</Text>
        <Icon name="star" size={16}  style={{color: "#FFD700"}} />
        </View>

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
          width: "65%",
          marginRight: 5
        }}>
        <Animated.View
          style={{
            height,
            width: '100%',
            borderRadius: height,
            backgroundColor: '#FFD700',
            position: 'absolute',
            left:0,
            top: 0,
            transform :[{
                translateX: animatedValue
            }]
          }}
        />
      </View>
      <Text style={{fontFamily: Fonts.type.base}}>{step}</Text>
    </View>
    </>
  );
};

export default ProgressBar;
