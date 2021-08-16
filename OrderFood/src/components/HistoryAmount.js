import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class HistoryAmount extends Component {
    state = {}
    countHistory = () => {
        let total = 0
        return total
    }
    render() {
        return (
            this.countOrder() == 0
                ? null
                : <View style={styles.historyAmount}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{this.countHistory()}</Text>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    historyAmount: {
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
export default HistoryAmount;