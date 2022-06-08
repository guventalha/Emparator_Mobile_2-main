import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../Themes/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AnimationSearch extends React.Component {
    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        this.open = !this.open;
    }

    navAndCloseN11 = ()=>{
      this.props.n11()
      this.toggleMenu()
    }
    navAndCloseHB = ()=>{
      this.props.hb()
      this.toggleMenu()
    }
    navAndCloseTD = ()=>{
      this.props.td()
      this.toggleMenu()
    }
    navAndCloseGG = ()=>{
      this.props.gg()
      this.toggleMenu()
    }

    navAndCloseAMZ = ()=>{
      this.props.amz()
      this.toggleMenu()
    }

  render() {
    const tdStyle ={
        transform : [
        {
            scale: this.animation
        },
        {
            translateY : this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -140]
            })
        },
        {
            translateX : this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -90]
            })
        }
    ]
    }
    const ggStyle ={
        transform : [
        {
            scale: this.animation
        },
        {
            translateY : this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -135]
            })
        },
        {
          translateX : this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, -40]
          })
      }
    ]
    }
    const n11Style ={
        transform : [
        {
            scale: this.animation
        },
        {
            translateY : this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -70]
            })
        },
        {
          translateX : this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 5]
          })
      }
    ]
    }
    const amzStyle ={
        transform : [
        {
            scale: this.animation
        },
        {
            translateY : this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -80]
            })
        },
        {
          translateX : this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 50]
          })
      }
    ]
    }
    const hbStyle ={
        transform : [
        {
            scale: this.animation
        },
        {
            translateY : this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 60]
            })
        },
        {
          translateX : this.animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100]
          })
      }
    ]
    }

    const rotation = {
        transform : [{
            rotate : this.animation.interpolate({
                inputRange: [0,1],
                outputRange: ["0deg", "90deg"]
            })}
        ]
    }

  //   const tdStyle ={
  //     transform : [
  //     {
  //         scale: this.animation
  //     },
  //     {
  //         translateY : this.animation.interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [0, -120]
  //         })
  //     },
  //     {
  //         translateX : this.animation.interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [0, -70]
  //         })
  //     }
  // ]
  // }
  // const ggStyle ={
  //     transform : [
  //     {
  //         scale: this.animation
  //     },
  //     {
  //         translateY : this.animation.interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [0, -130]
  //         })
  //     },
  //     {
  //       translateX : this.animation.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, -20]
  //       })
  //   }
  // ]
  // }
  // const n11Style ={
  //     transform : [
  //     {
  //         scale: this.animation
  //     },
  //     {
  //         translateY : this.animation.interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [0, -80]
  //         })
  //     },
  //     {
  //       translateX : this.animation.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, 40]
  //       })
  //   }

  // ]
  // }
  // const hbStyle ={
  //     transform : [
  //     {
  //         scale: this.animation
  //     },
  //     {
  //         translateY : this.animation.interpolate({
  //             inputRange: [0, 1],
  //             outputRange: [0, 30]
  //         })
  //     },
  //     {
  //       translateX : this.animation.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: [0, 80]
  //       })
  //   }
  // ]
  // }

//   const rotation = {
//     transform : [{
//         rotate : this.animation.interpolate({
//             inputRange: [0,1],
//             outputRange: ["0deg", "90deg"]
//         })}
//     ]
// }

    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableWithoutFeedback >
        <View>
          <Animated.View style={[styles.secondary,hbStyle]}>
              <TouchableOpacity onPress={this.navAndCloseHB}>
                <Image source={require("../Images/hepsibu2.png")} style={{width:50, height:50, borderRadius:8 }}/>
              </TouchableOpacity>        
          </Animated.View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.secondary,n11Style]}>
            <TouchableOpacity onPress={this.navAndCloseN11}>
              <Image source={require("../Images/n114.png")} style={{width:50, height:50 }}/>
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.secondary,amzStyle]}>
            <TouchableOpacity onPress={this.navAndCloseAMZ}>
              <Image source={require("../Images/amazon.png")} style={{width:40, height:40 }}/>
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback> 
          <Animated.View style={[styles.secondary, ggStyle]}>
          <TouchableOpacity onPress={this.navAndCloseGG}>
            <Image source={require("../Images/gg3.png")} style={{width:50, height:50 }}/>
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.secondary, tdStyle]}>
            <TouchableOpacity onPress={this.navAndCloseTD}>
              <Image source={require("../Images/trend.png")} style={{width:50, height:50 }}/>
            </TouchableOpacity>
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.button, styles.menu, rotation]}>
            <Icon name="search" size={24} color="white" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 45,
    width: 55,
    height: 55,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 10,
    shadowColor: '#18A689',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10},
  },
  menu: {
    backgroundColor: colors.primary,
  },
  secondary:{
      width: 50,
      height: 50,
      justifyContent:"center",
      alignItems: 'center',
  }
});
