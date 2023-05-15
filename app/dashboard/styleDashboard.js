import { Dimensions, StyleSheet } from "react-native"

let ScreenHeight = Dimensions.get('window').height
let ScreenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    body: {
        // flex: 1,
        width: '100%',
        height: '100%',
        textAlign: 'Justify',
        paddingHorizontal: 30,
        gap: 10,
    },
    TextTitle: {
        color: '#7B4FB4',
        fontSize: 42,
        fontWeight: 'bold',
        lineHeight: 84,
        textAlign: 'center',
        marginBottom: 100,
    },
    TextField: {
        color: '#7B4FB4',
        paddingHorizontal: 15,
        fontSize: 18,
        // paddingVertical: 10,
    },
    TextValue: {
        height: 40,
        color: '#1a1a1a',
        backgroundColor: '#BEADE2',
        fontSize: 15,
        lineHeight: 36,
        paddingLeft: 55,
        paddingBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textDecorationStyle: 'solid',
    },
    TextValueChange: {
        height: 40,
        alignItems: 'center',
        color: '#1a1a1a',
        backgroundColor: '#BEBEBE',
        fontSize: 15,
        lineHeight: 36,
        paddingLeft: 55,
        // paddingBottom: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textDecorationStyle: 'solid',
    },
    TextSubTitle: {
        color: '#7B4FB4',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 36,
        textAlign: 'center',
        marginVertical: 20,
    },
    logOutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginVertical: 20,
    },
})

export default styles