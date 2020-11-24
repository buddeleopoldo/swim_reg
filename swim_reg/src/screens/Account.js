import React from 'react';
import { StatusBar, View, TextInput, StyleSheet, ScrollView, Text, AsyncStorage, Image } from 'react-native';
import { SessionsContext } from './SessionsContext';
import { styles as GlobalStyles } from '../utils/styles';
import Sessions from '../components/Sessions/SwimSessions';

class AccountScreen extends React.Component  {
    render() {
        return (
            <View>

                <View >
                    <Text>SWIMS</Text>
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


AccountScreen.contextType = SessionsContext;

export default AccountScreen;


const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginBottom: 120
    },
  });
