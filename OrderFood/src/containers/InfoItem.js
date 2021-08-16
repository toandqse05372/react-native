import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,

} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
import { primaryColorRed, componentStyle, primaryColorGreen, primaryColorBrown } from '../styles'
class InfoItem extends Component {
    state = {
        info: ''
    }
    componentDidMount() {
        this.loadData()
    }

    loadData = () => (
        firebase.database().ref('/users').child(firebase.auth().currentUser.uid)
            .child(this.props.type).once('value',
                res => this.setState({ info: res._value })
            )
    )
    onSubmit = (event) => {
        firebase.database().ref('/users').child(firebase.auth().currentUser.uid)
            .child(this.props.type).set(event.nativeEvent.text)
    }
    render() {
        return (
            <View style={styles.infoStyle}>
                <Icon
                    name={this.props.icon}
                    size={25}
                    color={primaryColorGreen}
                    style={{ marginTop: 10, marginRight: 20 }}
                />
                <TextInput
                    placeholder="Enter your user"
                    style={{ flex: 1, color: primaryColorBrown, marginLeft: 10 }}
                    // khi nao nguoi dung submit thi moi nhan
                    returnKeyType={'done'}
                    onSubmitEditing={this.onSubmit}
                    defaultValue={this.state.info}
                    underlineColorAndroid="transparent"

                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: primaryColorRed,
        marginStart: 10,
        marginTop: 30
    },
    infoStyle: {
        flexDirection: 'row',
        margin: 15,
        marginStart: 40
    },
    iconStyle: {
        height: 16,
        width: 16
    },
    txtStyle: {
        marginStart: 20,
    }
});
export default InfoItem;