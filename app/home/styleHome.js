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
        // justifyContent: 'center',
        marginTop: 0,
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#1a1a1a',
        borderRadius: 50,
        width: 300,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    buttonArea: {
        marginTop: 80,
        marginBottom: 20,
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default styles