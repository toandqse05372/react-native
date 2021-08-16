import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { convertDate, convertTemp } from './handle';

const { width, height } = Dimensions.get('window')
export default class WeatherItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let abc = this.props.weather.weather[0].main
        let ahihi;
        switch (abc) {
            case 'Clear':
                ahihi = (
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={require(`../image/clear.png`)} />
                )
                break;

            case 'Rain':
                ahihi = (
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={require(`../image/rain.png`)} />
                )
                break;

            case 'Snow':
                ahihi = (
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={require(`../image/snow.png`)} />
                )
                break;

            case 'Clouds':
                ahihi = (
                    <Image
                        style={{ height: 50, width: 50 }}
                        source={require(`../image/clouds.png`)} />
                )
                break;

            default:
                break;
        }

        return (
            <TouchableOpacity style={styles.container}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                    <Text style={styles.txt}>{convertDate(this.props.weather.dt)}</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1, flexDirection: 'row', marginRight: 10 }}>
                    <Text style={styles.txt}> {convertTemp(this.props.weather.main.temp).doC}</Text>
                    {ahihi}
                </View>

            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 70,
        width: width * 0.8,
        backgroundColor: '#2E2B3D',
        margin: 10, flexDirection: 'row',
    },
    txt: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
})


