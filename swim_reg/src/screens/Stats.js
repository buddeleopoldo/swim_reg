// ========================== Records screen =============================//
// =======================================================================//


// Libraries -------------------------------------------------------------//
// -----------------------------------------------------------------------//

import React from 'react';
import { Text, View, ScrollView, Button, TouchableHighlight, StyleSheet} from 'react-native';
import { SessionsContext } from './SessionsContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// Top navigator ---------------------------------------------------------//
// -----------------------------------------------------------------------//

const SubTab = createMaterialTopTabNavigator();


// Stats screen component ------------------------------------------------//
// -----------------------------------------------------------------------//

class StatsScreen extends React.Component {

    // Render method ---------------------------------------------//
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


// Stats OPEN subtab component -------------------------------------------//
// -----------------------------------------------------------------------//

class StatsOpenScreen extends React.Component {

    // Render method ---------------------------------------------//
    render() {
        return (

        <ScrollView >
        </ScrollView>
        );
    }
}
    

// Stats POOL subtab component -------------------------------------------//
// -----------------------------------------------------------------------//

class StatsPoolScreen extends React.Component {

    // Render method ---------------------------------------------//
    render() {
        return (
            <ScrollView >
            </ScrollView>
        );
    }
}


// -----------------------------------------------------------------------//
// Set stats context types
StatsScreen.contextType = SessionsContext;
StatsOpenScreen.contextType = SessionsContext;
StatsPoolScreen.contextType = SessionsContext;


export default StatsScreen;