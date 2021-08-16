import { StyleSheet, Platform } from 'react-native'

export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";

export const componentStyle = StyleSheet.create({
    screenContainer: {
        backgroundColor: backgroundColor,
        flex: 1,
        padding: Platform.OS === 'ios' ? 20 : 5
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: primaryColorRed,
        marginHorizontal: 7,
        marginVertical: 10
    },
    button: {
        width: 95,
        height: 35,
        borderRadius: 30,
        backgroundColor: primaryColorRed,
        justifyContent: 'center',
        marginTop: 5,
        alignItems: 'center'
    }
});