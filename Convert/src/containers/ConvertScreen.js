import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Input from '../components/Input';
import Type from '../components/Type';

class ConvertScreen extends Component {
  state = {}

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Input column={0} />
          <Input column={1} />
        </View>
        <View style={styles.container}>
          <Type
            column={0}
            indexData={
              this.props.navigation.getParam('indexData') !== undefined
                ? this.props.navigation.getParam('indexData')
                : 0
            } />
          <Type
            column={1}
            indexData={
              this.props.navigation.getParam('indexData') !== undefined
                ? this.props.navigation.getParam('indexData')
                : 0
            } />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
export default ConvertScreen;