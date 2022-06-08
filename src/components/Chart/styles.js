import { StatusBar, StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes"

const styles = StyleSheet.create({
    container: {
        marginBottom:10,
        marginTop:10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    title: {
        height: Metrics.HEIGHT * 0.05,
        paddingVertical: 10,
        paddingLeft:20,
        marginBottom: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical: 10
    },
    text: {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.moderateScale(12)
    }
})

export default styles;