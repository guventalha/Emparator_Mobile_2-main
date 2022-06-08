import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

import styles from "./styles"

const Card = (props) => {
    return(
        <TouchableOpacity onPress={props.onClick}>
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
                <Icon name="chevron-right" size={15} color={"#c4c4c4"}/>
            </View>
            <View style={styles.countContainer}>
                <Text style={styles.count}>0 / 50</Text>
                <Text style={{fontSize: 12}}>Son Ekleme</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

export default Card;
