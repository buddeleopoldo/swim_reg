import React from 'react';
import { StatusBar, View, TextInput, StyleSheet, ScrollView, Text, AsyncStorage, Image } from 'react-native';
import { SessionsContext } from './SessionsContext';
import { styles as GlobalStyles } from '../utils/styles';

class RecordsScreen extends React.Component  {
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

RecordsScreen.contextType = SessionsContext;

export default RecordsScreen;



const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginBottom: 120
    }
  });