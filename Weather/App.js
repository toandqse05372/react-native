import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import DetailWeather from './src/DetailWeather';
import WeatherItem from './src/WeatherItem';
const { width, height } = Dimensions.get('window')
export default class Weather extends Component {
  state = {
    data: {},
    text: '',
    isLoading: true,
  }

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=1a984b0b951df9e8c084924687d38498')
      .then((response) => response.json())
      .then(res => {
        if (res.cod !== '200') {
          Alert.alert('City not found')
          this.setState({ isLoading: false })
        } else {
          this.setState({
            data: res, isLoading: false, list: res.list.splice(0, 1).concat(res.list.splice(8, 1)).
              concat(res.list.splice(16, 1)).concat(res.list.splice(24, 1)).concat(res.list.splice(28, 1)).concat(res.list.splice(32, 1))
          })

        }
        // console.log(res)

        // console.log(res.list.splice(0, 1))

      })
      .catch(error => console.log(error))

  }


  onClick() {
    // console.log(this.state.data)
    // console.log(this.state.text)
    this.setState({ isLoading: true })
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.text}&appid=1a984b0b951df9e8c084924687d38498`)
      .then((response) => response.json())
      .then(res => {
        if (res.cod !== '200') {
          Alert.alert('City not found')
          this.setState({ isLoading: false })
        } else {
          this.setState({
            data: res, isLoading: false, list: res.list.splice(0, 1).concat(res.list.splice(8, 1)).
              concat(res.list.splice(16, 1)).concat(res.list.splice(24, 1)).concat(res.list.splice(28, 1))
          })

        }
      })
      .catch(error => console.log(error))

  }

  renderItem(item) {
    return (
      <WeatherItem weather={item} />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchCon}>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            style={styles.inputWrap} />
          <TouchableOpacity style={styles.searchBut}
            onPress={() => this.onClick()}>
            <Text style={{ textAlign: 'center' }}>Search</Text>
          </TouchableOpacity>
        </View>
        {this.state.isLoading
          ? <ActivityIndicator />
          : <View style={{ justifyContent: 'center', alignItems: 'center', height: height * 0.9 }}>
            <DetailWeather weather={this.state.data.list[0]} location={this.state.data.city.name} />
            <FlatList
              style={{ height: height * 0.4 }}
              data={this.state.list}
              keyExtractor={(item) => item.dt + ''}
              renderItem={({ item }) => this.renderItem(item)} />
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#373448'
  },
  searchCon: {
    width: width * 0.8,
    height: height * 0.07,
    flexDirection: 'row',
  },
  inputWrap: {
    flex: 7,
    padding: 5,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  searchBut: {
    flex: 3,
    // height: 50,
    padding: 5,
    margin: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
