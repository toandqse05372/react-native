import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { createStackNavigator } from 'react-navigation'
import { componentStyle, primaryColorBrown, primaryColorRed } from '../styles'
import OrderItem from '../components/OrderItem'
import { cleanOrder } from '../actions/index'



class TabOrder extends Component {
    state = {
        datafb: []
    }
    totalPrice() {
        let tf = 0
        this.props.orders.forEach(item => { tf = tf + item.amount * item.unitPrice });
        //console.log("total price: " + tf)
        return tf
    }
    renderTitle = () => <Text style={componentStyle.titleStyle}>Order</Text>
    renderOrders = () => (
        <FlatList
            style={{ flexGrow: 0 }}
            data={this.props.orders}
            renderItem={({ item }) => <OrderItem item={item} historyMode={false} />}
            keyExtractor={item => item.name}
        />

    )
    renderTotal = () => (
        <View>
            <View
                style={{
                    marginTop: 10,
                    borderBottomColor: primaryColorBrown,
                    borderBottomWidth: 1,
                    marginHorizontal: 7
                }}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={[componentStyle.titleStyle, { flex: 1 }]}>Total</Text>
                <Text style={componentStyle.titleStyle}>{this.totalPrice()}$</Text>
            </View>
        </View>

    )
    componentDidMount() {
        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/history`)
            .on('value', res => res._value === null
                ? this.setState({ datafb: [] }) : this.setState({ datafb: res._value }))

    }
    Comfirm = () => {
        var currentdate = new Date();
        var datetime = currentdate.toDateString() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        this.setState({
            datafb: this.state.datafb.push(

                {
                    order: this.props.orders,
                    onGoing: true,
                    date: datetime,
                }
            )
        })

        firebase.database().ref(`/users/${firebase.auth().currentUser.uid}/history`)
            .set(
                this.state.datafb
            )
        this.props.cleanOrder()
        this.props.navigation.navigate("historyTab")
    }

    renderConfirm = () =>
        <TouchableOpacity
            style={
                {
                    position: 'absolute',
                    bottom: 16,
                    alignSelf: 'center',
                    width: 95,
                    height: 35,
                    borderRadius: 30,
                    backgroundColor: this.totalPrice() === 0 ? 'gray' : primaryColorRed,
                    justifyContent: 'center',
                    marginTop: 5,
                    alignItems: 'center'
                }
            }
            disabled={this.totalPrice() === 0 ? true : false}
            onPress={() => this.Comfirm()}
        >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
        </TouchableOpacity>

    render() {
        // console.log(this.props.orders)
        return (

            <View style={componentStyle.screenContainer}>
                {this.renderTitle()}
                {this.renderOrders()}
                {this.renderTotal()}
                {this.renderConfirm()}
            </View>
        );
    }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps, { cleanOrder })(TabOrder);