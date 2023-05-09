import { Dimensions, StyleSheet } from "react-native"

let ScreenHeight = Dimensions.get('window').height
let ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputForm: {
        width: 300,
        // marginTop: 20,
        gap: 20,
    },
    backgroundImage: {
        flex: 1,
        width: ScreenWidth,
        height: ScreenHeight,
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
        marginBottom: 100,
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
        // flex: 1,
        width: '100%',
        height: '100%',

        backgroundColor: '#000000a0',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        gap: 10,
    },
    textInput: {
        backgroundColor: '#1a1a1a',
        color: '#fefefe',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    buttonForm: {
        backgroundColor: '#fefefe',
        borderRadius: 50,
        // marginTop: 25,
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        // marginTop: 200,
    },
    questionText: {
        color: '#e94832',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        marginBottom: 40,
    },
})

export default styles