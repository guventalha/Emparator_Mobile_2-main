import { StyleSheet } from 'react-native';
import {
    Fonts,
    Metrics,
    Colors
} from '../../Themes';

const styles = StyleSheet.create({
    container: {
        width: Metrics.WIDTH * 0.4,
        backgroundColor: 'white',
        borderRadius: 5,
        // marginHorizontal: Metrics.WIDTH * 0.1,
        // marginVertical: Metrics.HEIGHT * 0.05,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e7eaec',
        height: Metrics.HEIGHT * 0.05,
    },
    title: {
        fontSize: 15,
    },
    countContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: Metrics.HEIGHT * 0.07,
        padding: 10,
    },
    count: {
        color: '#44CED0',
        fontSize: 22,
    },
});

export default styles;