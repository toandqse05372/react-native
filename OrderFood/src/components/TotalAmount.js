import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
class TotalAmount extends Component {
    state = {
        history: []
    }

    componentDidMount() {
        firebase.database().ref('/users').child(firebase.auth().currentUser.uid).child('history')
            .on('value', res => this.setState({ history: res._value.filter(e => e.onGoing === true) }))
    }
    countOrder = () => {
        let total = 0
        this.props.orders.forEach(item => total += item.amount)
        return total
    }
    render() {
        return (
            <View>
                <Icon name={this.props.iconName} size={25} color={this.props.tintColor} />
                {this.props.routeName === 'Order' && this.countOrder() !== 0
                    ? <View style={styles.totalAmount}>
                        <Text style={{ color: 'white', fontSize: 12 }}>{this.countOrder()}</Text>
                    </View>
                    : null
                }
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
    totalAmount: {
        position: 'absolute',
        height: 20,
        width: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left: 15
    },
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
const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(TotalAmount);