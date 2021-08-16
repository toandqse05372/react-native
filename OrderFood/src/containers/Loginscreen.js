import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { Button } from 'react-native-elements'
import firebase from 'react-native-firebase'
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'
class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        err: '',
        isSignIn: false,
        isSignUp: false
    }
    renderLogo = () => (
        <View style={styles.logoStyleView}>
            <Image
                style={styles.imgStyle}
                resizeMode='contain'
                source={require('../../imgs/logo_app.jpg')}
            />
        </View>

    )

    renderLogin = () => (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_email.png')}

                    />
                    <Text style={styles.txtInput}>Email</Text>
                </View>
                <TextInput
                    keyboardType={'email-address'}
                    onChangeText={(email) => this.setState({ email })}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_password.png')}

                    />
                    <Text style={styles.txtInput}>Password</Text>
                </View>
                <TextInput
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
            </View>
        </View>
    )
    onSignUp = () => {

        if (this.state.password === '') {
            this.setState({ err: 'Pls enter password' })
            return
        }
        if (this.state.email === '') {
            this.setState({ err: 'Pls enter email' })
            return
        }
        this.setState({ isSignUp: true })
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => this.setState({ err: '', isSignUp: false }))
            .catch(err => this.setState({ err: err.toString(), isSignUp: false }))
    }

    onSignIn = () => {

        if (this.state.password === '') {
            this.setState({ err: 'Pls enter password' })
            return
        }
        if (this.state.email === '') {
            this.setState({ err: 'Pls enter email' })
            return
        }
        this.setState({ isSignIn: true })
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => this.setState({ err: '', isSignIn: false }))
            .catch(err => this.setState({ err: err.toString(), isSignIn: false }))
    }
    renderButton = () => (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.buttonStyle}>
                <Button
                    title='Sign Up'
                    onPress={this.onSignUp}
                    buttonStyle={{
                        backgroundColor: primaryColorGreen,
                        width: 100,
                        height: 45,
                        borderWidth: 0,
                        borderRadius: 16,
                        marginTop: 60,
                        //marginBottom: 60
                    }}
                    loading={this.state.isSignUp}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title='Sign In'
                    onPress={this.onSignIn}
                    buttonStyle={{
                        backgroundColor: primaryColorRed,
                        width: 100,
                        height: 45,
                        borderWidth: 0,
                        borderRadius: 16,
                        marginTop: 60,
                    }}
                    loading={this.state.isSignIn}
                />
            </View>
        </View>
    )
    renderError = () => (
        <Text style={{ color: 'red' }}>{this.state.err}</Text>
    )
    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderLogin()}
                {this.renderError()}
                {this.renderButton()}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: backgroundColor,
    },
    logoStyleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 250,
        width: 250,
    },
    loginStyleView: {
        backgroundColor: backgroundColor,
    },
    loginImg: {
        height: 16,
        width: 16,
        marginStart: 10
    },
    txtInput: {
        color: primaryColorBrown,
        marginStart: 10
    },
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default LoginScreen;