import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { primaryColorGreen, primaryColorBrown } from '../styles'
import { deleteOrder } from '../actions/index'
class Orderitem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        // console.log(this.props.orders)
        return (
            this.props.item.amount === 0
                ? null
                : <View style={styles.container}>
                    {this.props.historyMode === false &&
                        <TouchableOpacity
                            onPress={() => this.props.deleteOrder(
                                {
                                    item: this.props.item
                                }
                            )}
                        >

                            <Icon
                                name='trash'
                                size={25}
                                color={primaryColorGreen}
                                style={{ marginHorizontal: 7 }}
                            />

                        </TouchableOpacity>
                    }
                    <Text
                        style={styles.amount}
                    >{this.props.item.amount}</Text>
                    <Text
                        style={styles.foodName}
                    >{this.props.item.name}</Text>
                    <Text style={styles.price}>
                        {`${this.props.item.unitPrice * this.props.item.amount}$`}</Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    amount: {
        fontWeight: 'bold',
        color: primaryColorBrown,
        marginHorizontal: 16,
        fontSize: 18
    },
    foodName: {
        flex: 1,
        color: primaryColorBrown,
        marginHorizontal: 8,
        fontSize: 18
    },
    price: {
        color: primaryColorGreen,
        marginHorizontal: 16,
        fontSize: 18,
        fontWeight: 'bold'
    }
});
const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps, { deleteOrder })(Orderitem)