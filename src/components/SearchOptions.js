import { useLinkProps } from "@react-navigation/native";
import React from  "react";
import { View, TouchableOpacity, Image, Animated, StyleSheet, ProgressBarAndroidComponent } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"

const SearchOptions = (props) => {
    const animation = new Animated.Value(0)

    let open = false

    function toggleMenu() {
        const toValue = open ? 0 : 1

        Animated.spring(animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        open = !open

    }

    const rotation = {
        transform: [{
            rotate: animation.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "90deg"]
            })
        }]
    }

    const tdStyle ={
        transform : [
        {
            scale:animation
        },
        {
            translateY :animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -150]
            })
        }
    ]
    }
    const hbStyle ={
        transform : [
        {
            scale:animation
        },
        {
            translateY :animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -150]
            })
        }
    ]
    }
    const n11Style ={
        transform : [
        {
            scale:animation
        },
        {
            translateY :animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -150]
            })
        }
    ]
    }
    const ggStyle ={
        transform : [
        {
            scale:animation
        },
        {
            translateY :animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -150]
            })
        }
    ]
    }


    return(
        <View>
            <TouchableWithoutFeedback onPress={toggleMenu}>
                <Animated.View style={rotation}>
                    <Icon name="search" size={22}/>
                </Animated.View>
            </TouchableWithoutFeedback>


            <TouchableOpacity onPress={props.onClick} >
                <Animated.View style={ggStyle}>
                <Image source={require("../Images/gg.png")} style={{width:50, height:50 }}/>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity >
                <Animated.View style={n11Style}>
                <Image source={require("../Images/n112.png")} style={{width:40, height:40 }}/>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity >
                <Animated.View style={hbStyle}>
                <Image source={require("../Images/hb4.png")} style={{width:40, height:40 }}/>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Animated.View style={tdStyle}>
                <Image source={require("../Images/trendyol.png")} style={{width:40, height:40 }}/>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchOptions;