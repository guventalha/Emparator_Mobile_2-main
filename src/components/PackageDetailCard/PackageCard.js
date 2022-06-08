import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5"

import styles from './styles';

export default function PackageCard(props) {
    return (
        <View style={styles.main}>
            <View style={[styles.title, {backgroundColor: props.color}]}>
            <Icon name="calendar-alt" size={22} style={styles.icon}/>
            <Text style={styles.text}>{props.title}</Text>
            </View>
            <View style={styles.container}> 
                <Text style={styles.price}>{props.price} ₺</Text>
                <TouchableOpacity style={[styles.button, {backgroundColor: props.color}]} onPress={props.onClick}>
                    <Text style={styles.buttonText}> Satın Al</Text>
                </TouchableOpacity>
            </View> 
        </View>
    
    )
}
