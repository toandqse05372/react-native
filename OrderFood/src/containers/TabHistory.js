import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import firebase from 'react-native-firebase'
import { createStackNavigator } from 'react-navigation'
import { componentStyle, primaryColorGreen, primaryColorBrown, primaryColorRed } from '../styles'
import Accordion from 'react-native-collapsible/Accordion';
import OrderItem from '../components/OrderItem'

// createStackNavigator({
//     history: TabHistory
// })
class TabHistory extends Component {
    state = {
        activeSections: [],
        historyOn: [],
        historyFi: [],
        history: []
    }

    componentDidMount() {

        firebase.database().ref('/users').child(firebase.auth().currentUser.uid).child('history')
            .on('value', res => {
                res._value === null ? this.setState({
                    historyOn: [],
                    historyFi: []
                })
                    : this.setState({
                        historyOn: res._value.filter(e => e.onGoing === true),
                        historyFi: res._value.filter(e => e.onGoing === false)
                    })
            })
    }

    renderTitle = () => <Text style={componentStyle.titleStyle}>History</Text>

    renderHeader(section) {
        const totalPrice = section.order.reduce((acc, curV) => acc + curV.amount * curV.unitPrice, 0)

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.timeStyle}>{section.date}</Text>
                <Text>{section.onGoing}</Text>
                <Text style={styles.priceStyle}>{`${totalPrice}$`}</Text>
            </View>
        )

    }

    renderContent(section) {
        return (
            <FlatList
                style={{ flexGrow: 0 }}
                data={section.order}
                renderItem={({ item }) => <OrderItem item={item} historyMode={true} />}
                keyExtractor={(item) => item.name}
            />
        )
    }
    renderGo_On = () => {
        return (
            <View>
                <Text style={styles.statusSty}>On-Going</Text>
                <Accordion
                    underlayColor='white'
                    activeSections={this.state.activeSections}
                    sections={this.state.historyOn}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        )
    }
    renderFinished = () => {
        return (
            <View>
                <Text style={styles.statusSty}>Finished</Text>
                <Accordion
                    underlayColor='white'
                    activeSections={this.state.activeSections}
                    sections={this.state.historyFi}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={componentStyle.screenContainer}>
                {this.renderTitle()}
                {this.renderGo_On()}
                {this.renderFinished()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    statusSty: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColorGreen,
        marginHorizontal: 7,
        marginVertical: 10
    },
    timeStyle: {
        fontSize: 18,
        color: primaryColorBrown,
        marginHorizontal: 7,
        marginVertical: 10,
        flex: 1
    },
    priceStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColorRed,
        marginHorizontal: 7,
        marginVertical: 10,
    }
});

export default TabHistory
