import { StyleSheet } from "react-native";
import { Colors, Fonts, Metrics } from "../../Themes"

const styles = StyleSheet.create({
    main : {
        width: Metrics.WIDTH * 0.8,
        marginHorizontal: Metrics.WIDTH * 0.1,
        marginVertical: Metrics.HEIGHT * 0.015,
        backgroundColor: "#fff",
        borderRadius: 10,
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
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: Colors.blue,
        padding: 8,
        borderTopRightRadius:10,
        borderTopLeftRadius: 10,

    },
    icon :{
        color: Colors.white,
        marginRight: 8
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.moderateScale(14),
        fontFamily: Fonts.type.base,
    },
    container:{
        alignItems: "center",
        paddingVertical: 20

    },
    price : {
        fontFamily: Fonts.type.base,
        fontSize: Fonts.moderateScale(20)
    },
    button : {
        // backgroundColor: Colors.blue,
        width: Metrics.WIDTH * 0.6,
        borderRadius: 5,
        marginTop: 15,
        paddingVertical: 5
    },
    buttonText: {
        textAlign: "center",
        fontFamily: Fonts.type.base,
        fontSize: Fonts.moderateScale(14),
        color: Colors.white,

    }
})

export default styles;