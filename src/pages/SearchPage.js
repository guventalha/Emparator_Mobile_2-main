import React from "react";
import { View, StyleSheet, Image, Dimensions,TouchableOpacity} from "react-native"



const SearchPage = (props) => {
    return(
            <View style={styles.container}>
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
            </View>
    )
}

export { SearchPage }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
    },
    image:{
        width: Dimensions.get("screen").width * 0.45,
        height: Dimensions.get("screen").width * 0.45,
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