import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome'
class OnGoingTotal extends Component {
    state = {
        history: []
    }

    componentDidMount() {
        firebase.database().ref('/users').child(firebase.auth().currentUser.uid).child('history')
            .on('value', res => this.setState({ history: res._value.filter(e => e.onGoing === true) }))
    }
    historyTotal() {
        return this.state.history.length
    }
    render() {
        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++")
        console.log(this.state.history.length)
        return (

            <View>
                <Icon name={this.props.iconName} size={25} color={this.props.tintColor} />
                {this.props.routeName === 'History' && this.state.history.length !== 0
                    ? <View style={styles.onGoingStyle}>
                        <Text style={{ color: 'white', fontSize: 12 }}>{this.state.history.length}</Text>
                    </View>
                    : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    onGoingStyle: {
        position: 'absolute',
        height: 20,
        width: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left: 15
    }
});
export default OnGoingTotal;