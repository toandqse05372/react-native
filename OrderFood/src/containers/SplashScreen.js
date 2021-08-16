import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import firebase from 'react-native-firebase'
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'
class SplashScreen
    extends Component {
    state = {}
    componentDidMount() {
        // neu nguoi dung chua dang nhap thi sau 2s se chuyen qua man hinh login
        // neu dang nhap roi se chuyen qua man hinh home
        //firebase.auth().signOut() // cho phep quay lai man hinh login
        firebase.auth().onAuthStateChanged(res => res !== null
            ? setTimeout(() => this.props.navigation.navigate('HomeScreen'), 3000)
            : setTimeout(() => this.props.navigation.navigate('LoginScreen'), 3000))
    }
    renderLogo = () => (
        <Image
            style={styles.imgStyle}
            resizeMode='contain'
            source={require('../../imgs/logo_app.jpg')}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
    },
    logoStyleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 300,
        width: 300,
        flex: 1
    },
});
export default SplashScreen;