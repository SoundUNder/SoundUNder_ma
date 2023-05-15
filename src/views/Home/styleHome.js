import { Dimensions, StyleSheet } from "react-native"
import Constants from 'expo-constants'


let ScreenHeight = Dimensions.get('window').height
let ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: ScreenWidth,
        height: ScreenHeight,
        marginTop: Constants.statusBarHeight,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 100,
        resizeMode: 'cover',
        justifyContent: 'center',
        zIndex: 10,
    },
    textTitle: {
        color: '#fefefe',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
    },
    textLogo: {
        color: '#965FDD',
        // color: '#855999',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textDecorationLine: 'underline',
        zIndex: 10,
    },
    textLink: {
        color: '#fefefe',
        fontSize: 22,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
    },
    body: {
        width: '100%',
        height: '150%',
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#000000a0',
    },
})


export default styles