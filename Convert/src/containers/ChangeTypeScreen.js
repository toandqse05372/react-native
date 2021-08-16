import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';

class TypeScreen extends Component {
    state = {}
    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity
                        style={[styles.container, styles.bgColor1]}
                        onPress={() => this.props.navigation.navigate('Convert', {
                            indexData: 0,
                            check: true
                        })}>
                        <Text style={styles.text}>Weight</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.container, styles.bgColor2]}
                        onPress={() => this.props.navigation.navigate('Convert', {
                            indexData: 1,
                            check: true
                        })}>
                        <Text style={styles.text}>Length</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingStart: 40,
        paddingVertical: 10,
    },
    bgColor1: {
        backgroundColor: '#ff8000',
    },
    bgColor2: {
        backgroundColor: '#ffa64d',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400'
    }
})
export default TypeScreen;