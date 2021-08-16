import React, { Component } from 'react';
import {
  Text, TouchableOpacity,
  View,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import ConvertScreen from './ConvertScreen';
import ChangeTypeScreen from './ChangeTypeScreen';

const Navigation = createStackNavigator({
  Convert: {
    screen: ConvertScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Convertable',
        headerTitleStyle: {
          color: '#ff8000',
        },
        headerRight: (
          <TouchableOpacity
            onPress={() => { navigation.navigate('TypeDetail') }}
          >
            <Text
              style={{
                color: '#4d4dff',
                fontSize: 18,
                marginEnd: 20,
                fontWeight: '600'
              }}
            >Type
            </Text>
          </TouchableOpacity>
        )
      }
    }
  },

  TypeDetail: {
    screen: ChangeTypeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Type',
        headerTitleStyle: {
          color: '#ff8000',
        },
      }
    }
  }
})

const store = createStore(rootReducer)

class App extends Component {

  state = {}
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>

    );
  }
}

export default App;