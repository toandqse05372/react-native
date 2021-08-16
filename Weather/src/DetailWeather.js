import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

import { convertDate, convertTemp } from './handle';

const { width, height } = Dimensions.get('window')

export default class DetailWeather extends Component {
    state = {
        C: 'white',
        F: 'gray',
        current: 'light rain',
        temp: convertTemp(this.props.weather.main.temp).doC
    }
    onclick(string) {
        if (string == 'C') {
            this.setState({
                temp: convertTemp(this.props.weather.main.temp).doC,
                C: 'white',
                F: 'gray'
            })

        } else {
            this.setState({
                temp: convertTemp(this.props.weather.main.temp).doF,
                C: 'gray',
                F: 'white'
            })
        }
    }
    render() {
        let ahihi;
        switch (this.props.weather.weather[0].main) {
            case 'Clear':
                ahihi = (
                    // <View style={{ backgroundColor: 'blue' }}>
                    <Image
                        resizeMode='contain'
                        style={{ width: '80%', }}
                        source={require(`../image/clear.png`)} />
                    // </View>
                )
                break;

            case 'Rain':
                ahihi = (
                    <Image
                        resizeMode='contain'
                        style={{ width: '80%' }}
                        source={require(`../image/rain.png`)} />
                )
                break;

            case 'Snow':
                ahihi = (
                    <Image
                        resizeMode='contain'
                        style={{ width: '80%' }}
                        source={require(`../image/snow.png`)} />
                )
                break;

            case 'Clouds':
                ahihi = (
                    <Image
                        resizeMode='contain'
                        style={{ width: '80%', }}
                        source={require(`../image/clouds.png`)} />
                )
                break;

            default:
                break;
        }
        return (
            <View style={{ width: '100%', height: height * 0.47, alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 30, marginTop: 10 }}>{this.props.location}</Text>
                <Text style={{ color: 'gray', fontSize: 20 }}>{convertDate(this.props.weather.dt)}</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                        {ahihi}
                        {/* <Image
                            resizeMode='contain'
                            style={{ width: '80%' }}
                            source={require('../image/rain.png')} /> */}
                        <Text style={{ color: 'gray', fontSize: 20 }}>{this.props.weather.weather[0].description}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 70, marginBottom: 10 }}>{this.state.temp}</Text>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => this.onclick('C')}>
                                <Text style={{ color: this.state.C, marginHorizontal: 20, fontSize: 20 }}>oC</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.onclick('F')}>
                                <Text style={{ color: this.state.F, marginHorizontal: 20, fontSize: 20 }}>oF</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

