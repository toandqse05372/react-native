import React, { Component } from 'react';
import {
    FlatList,
    View,
} from 'react-native';
import TouchItem from './TouchItem';

import { data } from '../data.json'

class Type extends Component {
    state = {}

    renderItem = ({ item }) => {
        return <TouchItem item={item} column={this.props.column} />
    }

    render() {
        return (
            <View>
                <FlatList
                    data={data[this.props.indexData]}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}


export default Type;