import React, { Component } from 'react';
import {
    Text, Dimensions,
    View, StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { choiceUnit, convertNumber } from '../actions/index'



class TouchUnit extends Component {
    state = {}

    _choiceUnit = () => {
        this.props.choiceUnit({
            column: this.props.column,
            valueId: this.props.item.id
        })
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.props.item.color }]}>
                <TouchableOpacity
                    onPress={this._choiceUnit}>
                    <Text style={[
                        styles.text,
                        { color: this.props.choice[this.props.column].
                            listValue[this.props.item.id].value ? 'red' : 'white' }
                    ]}>
                        {this.props.item.text}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        paddingStart: 24,
        paddingVertical: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }
})

const mapStateToProps = ({ data, choice }) => ({ data, choice })
export default connect(mapStateToProps, { choiceUnit, convertNumber })(TouchUnit);