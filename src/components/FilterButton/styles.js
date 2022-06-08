
import { StyleSheet } from "react-native";
import { Colors, Metrics, Themes, Fonts} from "../../Themes"
import colors from "../../Themes/Colors";

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: Metrics.WIDTH * 0.5,
        // height: Metrics.HEIGHT * 0.07,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,
        // elevation: 11,
        // borderRadius: 5,
    },
    text: {
        fontSize: 18,
        color: colors.primary,
        fontFamily: Fonts.type.base
    },
    icon: {
        marginRight: 10,
        color: colors.primary
    }
})

export default styles;