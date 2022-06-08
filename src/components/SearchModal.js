import React, { useState } from "react"
import { View, Text, Modal, TouchableOpacity,StyleSheet, Dimensions,Image } from "react-native"
import Icon from    "react-native-vector-icons/FontAwesome"

const SearchModal = () => {
    const [isVisible, setIsVisible] = useState(false)
    return(
        <View>
            <Modal 
                visible={isVisible}
                onRequestClose={() => setIsVisible(false)}
            >
                <TouchableOpacity 
                onPress={() => props.navigation.navigate("GittiGidiyor")}
                style={styles.imageContainer}>
                    <Image style={[styles.image, {backgroundColor: "white"}]} source={require("../Images/gg.png")} />
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => props.navigation.navigate("HepsiBurada")}
                style={styles.imageContainer}>
                    <Image style={styles.image}  source={require("../Images/hb4.png")} />
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => props.navigation.navigate("N11")}>
                    <Image style={styles.image}  source={require("../Images/n112.png")} />
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => props.navigation.navigate("Trendyol")}
                style={styles.imageContainer}>
                    <Image style={styles.image}  source={require("../Images/trendyol.png")} />
                </TouchableOpacity>
            </Modal>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Icon name="search" size={22}/>
            </TouchableOpacity>
        </View>

    )
}

export default SearchModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
    },
    image:{
        width: 100,
        height: 100,
        marginVertical: 10,
        borderRadius:10
    },
    imageContainer:{
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        
        elevation: 19,
    }
})