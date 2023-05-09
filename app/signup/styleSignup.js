import { Dimensions, StyleSheet } from "react-native"


let ScreenHeight = Dimensions.get('window').height
let ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        flexGrow: 1,
        width: ScreenWidth,
        height: ScreenHeight,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000a0',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        gap: 10,
    },
    textTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    inputForm: {
        width: 300,
        alignItems: 'center',
        gap: 20,
    },
    textInput: {
        width: '100%',
        backgroundColor: '#1a1a1a',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
    },
    buttonForm: {
        width: 300,
        marginTop: 20,
    },
    links: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        marginBottom: 20,
        marginTop: -90,
    },
    textfield: {
        height: 40,
        color: '#fefefe',
        fontSize: 16,
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
    questionText: {
        color: '#fefefe',
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
    },
    pickerGender: {
        fontSize: 10,
        height: 50,
        width: 300,
        marginTop: -9,
        color: '#fefefe',
        borderWidth: 1,
        borderColor: "#666",
    },
    calendar: {
        width: 300,
        height: 300,
        backgroundColor: '#1a1a1a',
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
    },
})

export default styles