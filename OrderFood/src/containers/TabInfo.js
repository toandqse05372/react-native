import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { primaryColorRed, componentStyle, primaryColorGreen } from '../styles'
import InfoItem from './InfoItem';
class TabInfo extends Component {
    state = {}
    render() {
        return (
            <View style={componentStyle.screenContainer}>
                <Text style={styles.titleStyle}>Infomation</Text>
                <InfoItem type={'address'} icon={'location-arrow'} />
                <InfoItem type={'username'} icon={'user'} />
                <InfoItem type={'phone'} icon={'phone'} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: primaryColorRed,
        marginStart: 20,
        marginTop: 30
    },
    infoStyle: {
        flexDirection: 'row',
        margin: 15,
        marginStart: 40
    },
    iconStyle: {
        height: 16,
        width: 16
    },
    txtStyle: {
        marginStart: 20,
    }
});
export default TabInfo;