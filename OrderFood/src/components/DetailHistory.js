import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class DetailHistory extends Component {
    state = {}
    renderItemDetail = () => (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.amountStyle}>2</Text>
            <Text style={styles.nameStyle}>aaaaaaaaa</Text>
            <Text style={styles.priceStyle}>29$</Text>
        </View>
    )
    render() {
        return (
            <View>
                {this.renderItemDetail()}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    amountStyle: {

    },
    nameStyle: {

    },
    priceStyle: {

    }
})
export default DetailHistory;