// ========================== Sessions screen ============================//
// =======================================================================//


// Libraries -------------------------------------------------------------//
// -----------------------------------------------------------------------//

import React from 'react';
import { Picker, View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SessionsContext } from './SessionsContext';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Session from '../components/Sessions/SwimSessions';
import {owStyles} from '../utils/owSessionsStyles';
import formStyles from '../utils/sessionFormStyles';
import t from 'tcomb-form-native';
import Modal from 'react-native-modal';
import AwesomeButtonBojack from 'react-native-really-awesome-button/src/themes/bojack';
import AwesomeButtonRed from 'react-native-really-awesome-button/src/themes/red';
import AwesomeButtonBlue from 'react-native-really-awesome-button/src/themes/blue';


// Top navigator - form --------------------------------------------------//
// -----------------------------------------------------------------------//

const SubTab = createMaterialTopTabNavigator();

const Form = t.form.Form;

const SessionForm = t.struct({
    title: t.String,
    extra: t.maybe(t.String),
    date: t.Date,
    distance: t.Number,
    minutes: t.Number,
    seconds: t.Number,
});


// Form styles and layouts -----------------------------------------------//
// -----------------------------------------------------------------------//

// Create styles -------------------------------------------------//
const styles = StyleSheet.create(owStyles);
const titleStylesheet = formStyles.titleStyle;
const extraStylesheet = formStyles.extraStyle;
const distanceStylesheet = formStyles.distanceStyle;
const dateStylesheet = formStyles.dateStyle;
const minutesStylesheet = formStyles.minutesStyle;
const secondsStylesheet = formStyles.secondsStyle;

// Form general template -----------------------------------------//
function formTemplate(locals) {
    return (
        <View >
            {locals.inputs.title}
            {locals.inputs.extra}
            <View style={styles.dateContainer}>
                {locals.inputs.date}
            </View>
            <View style={styles.distanceContainer}>
                <Text style={styles.formSideText}>
                    * DISTANCE
                </Text>
                <View style={styles.formSideData}>
                    <View style={styles.distanceData}>
                        {locals.inputs.distance}
                    </View>
                </View>
            </View>
            <View style={styles.timeContainer}>
                <Text style={styles.formSideText}>
                    * TIME
                </Text>
                <View style={styles.formSideData}>
                    <View style={styles.minutesData}>
                        {locals.inputs.minutes}
                    </View>
                    <View style={styles.secondsData}>
                        {locals.inputs.seconds}
                    </View>
                </View>
            </View>
        </View>
    )
}

// Assign styles -------------------------------------------------//
const options = {
    auto: 'placeholders',
    template: formTemplate,
    fields: {
        title: {
            placeholder: '* Title',
            stylesheet: titleStylesheet,
        },
        extra: {
            placeholder: 'Additional info',
            stylesheet: extraStylesheet,
        },
        date: {
            mode: 'date',
            stylesheet: dateStylesheet,
            config: {
                defaultValueText: 'PICK DATE',
            }
        },
        distance: {
            placeholder: 'meters',
            stylesheet: distanceStylesheet,
        },
        minutes: {
            placeholder: 'min',
            stylesheet: minutesStylesheet,
        },
        seconds: {
            placeholder: 'sec',
            stylesheet: secondsStylesheet,
      },
    },
  };


// Sessions screen component ---------------------------------------------//
// -----------------------------------------------------------------------//

class SessionsScreen extends React.Component {

    // Render method ---------------------------------------------//
    render() {
        return (
            <SubTab.Navigator
                tabBarOptions={{
                activeTintColor: 'navy',
                inactiveTintColor: 'gray',
                labelStyle: {
                    fontSize: 13,
                    margin: 0,
                },
                style: {
                    elevation: 8
                },
                indicatorStyle: {
                    height: '100%',
                    backgroundColor: 'powderblue'
                }
                
                }}>
                <SubTab.Screen name="Open Water" component={SessionsOpenScreen} style={{flex: 1}}/>
                <SubTab.Screen name="Pool" component={SessionsPoolScreen} style={{flex: 1}}/>
            </SubTab.Navigator>
        );
    }
}


// Sessions OPEN subtab component ----------------------------------------//
// -----------------------------------------------------------------------//

class SessionsOpenScreen extends React.Component {

    // Constructor method ----------------------------------------//
    constructor(props) {
        super(props)
        this.state = {
          isFormVisible: false,
        }     
    }  
    
    // Main methods ----------------------------------------------//
    openForm = () => {
        this.setState({
            isFormVisible: true
        })
    }

    closeForm = () => {
        this.setState({
            isFormVisible: false
        })
    }

    handleSubmit = () => {
        const values = this._form.getValue();
        var validate = t.validate;
        var result = validate(values,SessionForm);
        if (result.isValid()) {
            this.context.addSession(values)
            this.setState({
                isFormVisible: false
            })
        } 
    }

    // Render method ---------------------------------------------//
    render() {

        return (
            <View style={styles.fullContainer}>

                {/* New session button*/}
                <AwesomeButtonBojack style={styles.addSessionButton} onPress={() => this.openForm()}>
                    NEW SESSION
                </AwesomeButtonBojack>

                {/* New session form */}
                <Modal isVisible={this.state.isFormVisible} backdropOpacity={0.9} backdropColor={'#000803'} color={'white'}> 
                    <View >

                        <Form 
                            ref={f => this._form = f}
                            type={SessionForm}   
                            options={options}                   
                        /> 

                        <View style={styles.buttonsContainer}>
                            <View style={styles.cancelContainer}>
                                <AwesomeButtonRed width={150} onPress={() => this.closeForm()}>
                                    CANCEL
                                </AwesomeButtonRed>
                            </View> 

                            <View style={styles.saveContainer}>
                                <AwesomeButtonBlue width={150} onPress={() => this.handleSubmit()}>
                                    SAVE
                                </AwesomeButtonBlue>
                            </View>
                        </View>


                    </View>
                </Modal>

                {/* Old sessions list */}
                <View style={styles.scrollContainer}>
                    <ScrollView style={styles.swimscontainer}>
                        <Session 
                            sessions={this.context.sessions}
                            onDelete={this.context.onDeleteSession} 
                        />
                    </ScrollView>
                </View>

            </View>
        );  
    }
}


// Sessions POOL subtab component ----------------------------------------//
// -----------------------------------------------------------------------//
  
class SessionsPoolScreen extends React.Component {

    // Render method ---------------------------------------------//
    render() {
        return (
            <View>
            </View>
        ); 
    }
}


// -----------------------------------------------------------------------//
// Set session context types
SessionsScreen.contextType = SessionsContext;
SessionsOpenScreen.contextType = SessionsContext;
SessionsPoolScreen.contextType = SessionsContext;

export default SessionsScreen; 



