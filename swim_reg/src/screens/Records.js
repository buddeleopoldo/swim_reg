// ========================== Records screen =============================//
// =======================================================================//


// Libraries -------------------------------------------------------------//
// -----------------------------------------------------------------------//

import React from 'react';
import { StatusBar, View, TextInput, StyleSheet, ScrollView, Text, AsyncStorage, Image } from 'react-native';
import { SessionsContext } from './SessionsContext';
import { styles as GlobalStyles } from '../utils/containerSessionsStyles';


// Records screen component ----------------------------------------------//
// -----------------------------------------------------------------------//

class RecordsScreen extends React.Component  {

    // Render method ---------------------------------------------//
    render() {
        return (
            <View>

                <View >
                    <Text>RECORDS</Text>
                </View>
                <View >
                    <Text>
                        Last POOL session:
                    </Text>
                </View>

            </View>
        );
    }
}

// Set session context type
RecordsScreen.contextType = SessionsContext;

export default RecordsScreen;


// General styles --------------------------------------------------------//
// -----------------------------------------------------------------------//

const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginBottom: 120
    }
  });