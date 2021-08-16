import React, { Component } from 'react';
import {
    Text, TextInput, Dimensions,
    View, StyleSheet,
} from 'react-native';

import { connect } from 'react-redux'
import { convertNumber } from '../actions'

class Input extends Component {
    state = {
        text: ''
    }

    onChangeText = (text) => {
        this.setState({ text })
        this.props.convertNumber({
            number: text,
            index1: this.props.choice[this.props.column].listValue.filter(val => val.value == true)[0].id,
            index2: this.props.choice[this.props.column == 1 ? 0 : 1].listValue.filter(val => val.value == true)[0].id,
            column: this.props.column
        })
    }

    render() {
        return (

            <View style={styles.container}>
                <TextInput
                    keyboardType='numeric'
                    style={styles.textinput}
                    textAlign={'center'}
                    underlineColorAndroid={'#ff8000'}
                    onChangeText={this.onChangeText}
                    value={this.props.column != this.props.data.column ? `${this.props.data.result}` : this.state.text}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
    },
    textinput: {
        marginHorizontal: 20,
        marginVertical: 10,
        height: 60,
        fontSize: 24,
        color: 'black',
        width: Dimensions.get('window').width / 2 - 40,
    }
})

const mapStateToProps = ({ data, choice }) => ({ data, choice })
export default connect(mapStateToProps, { convertNumber })(Input);