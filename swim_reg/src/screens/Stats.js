import React from 'react';
import { Text, View, ScrollView, Button, TouchableHighlight, StyleSheet} from 'react-native';
import { SessionsContext } from './SessionsContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const SubTab = createMaterialTopTabNavigator();

class StatsScreen extends React.Component {
    render() {
        return (
        <SubTab.Navigator
            tabBarOptions={{
            activeTintColor: 'navy',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 13,
            },
            style: {
                backgroundColor: 'white',
                elevation: 8
            },
            indicatorStyle: {
                height: '100%',
                backgroundColor: 'powderblue'
                }
            
            }}>
            <SubTab.Screen name="Open Water" component={StatsOpenScreen} />
            <SubTab.Screen name="Pool" component={StatsPoolScreen} />
        </SubTab.Navigator>
        );
    }
}

class StatsOpenScreen extends React.Component {
    render() {
        return (

        <ScrollView >
        </ScrollView>
        );
    }
}
    
class StatsPoolScreen extends React.Component {
    render() {
        return (
            <ScrollView >
            </ScrollView>
        );
    }
}


StatsScreen.contextType = SessionsContext;
StatsOpenScreen.contextType = SessionsContext;
StatsPoolScreen.contextType = SessionsContext;


export default StatsScreen;