import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { addOrder } from '../actions'

import { primaryColorBrown, primaryColorRed, primaryColorGreen, backgroundColor, componentStyle } from '../styles'
class MenuItem extends Component {
    state = {}
    render() {
        //  console.log(this.props.item)
        return (
            <View style={styles.container}>
                <Image
                    style={styles.imgStyle}
                    source={{ uri: this.props.item.image }}
                />
                <Text style={styles.nameStyle}>{this.props.item.name}</Text>
                <Text style={styles.priceStyle}>{this.props.item.price}$</Text>
                <TouchableOpacity
                    style={componentStyle.button}
                    onPress={() => this.props.addOrder({
                        name: this.props.item.name,
                        unitPrice: this.props.item.price,
                    })}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Add to card</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        padding: 5,
        alignItems: 'center',
        marginTop: 10

    },
    imgStyle: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    touchStyle: {
        width: 95,
        height: 35,
        borderRadius: 30,
        backgroundColor: primaryColorRed,
        justifyContent: 'center',
        marginTop: 5,
        alignItems: 'center'
    },
    nameStyle: {
        fontSize: 16,
        color: primaryColorBrown,
        textAlign: 'center',
        marginTop: 5

    },
    priceStyle: {
        fontSize: 18,
        color: primaryColorBrown,
        fontWeight: 'bold',
        marginTop: 5
    }
});
export default connect(null, { addOrder })(MenuItem);