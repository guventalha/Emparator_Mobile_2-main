import React, { useState } from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from  "react-native-modal"
import styles from './styles';
import { FilterPageN11 } from '../../pages';
import { Fonts } from '../../Themes';
 

const Button = (props) => {
  // const [ isVisible, setIsVisible ] = useState(false)
  return (
      <TouchableOpacity style={styles.button} onPress={props.onClicked}>
        <Icon name={props.name} size={18} style={styles.icon} />
        <Text style={styles.text} >{props.title}</Text>
      </TouchableOpacity>
  );
};

export default Button;

{/* <Modal
isVisible={isVisible}
swipeDirection= "down"
backdropOpacity= {0}
onBackdropPress={() => setIsVisible(false)}
onSwipeComplete={() => setIsVisible(false)}
>
<FilterPageN11/>
</Modal> */}
