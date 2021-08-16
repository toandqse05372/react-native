/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import LoginScreen from './Loginscreen';
import SplashScreen from './SplashScreen'
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabInfo from './TabInfo';
import TabHistory from './TabHistory';
import { primaryColorGreen } from '../styles'
import TotalAmount from '../components/TotalAmount';
import OnGoingTotal from '../components/OnGoingTotal';


const store = createStore(rootReducer)
const Navigation = createStackNavigator({
  order: {
    screen: TabOrder,
    navigationOptions: {
      header: null
    }
  },
  historyTab: {
    screen: TabHistory,
    navigationOptions: {
      header: null
    }
  }
})
const BottomTabNavigator = createBottomTabNavigator(
  {
    Menu: TabMenu,
    Order: Navigation,
    History: TabHistory,
    Info: TabInfo

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else if (routeName === 'Info') {
          iconName = `info-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <View>
          <TotalAmount iconName={iconName} routeName={routeName} tintColor={tintColor} />
          {/* <OnGoingTotal iconName={iconName} routeName={routeName} tintColor={tintColor} /> */}
        </View>

      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    }
  })

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: BottomTabNavigator,
})


export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <SwitchNavigation />
      </Provider>
    );
  }
}
