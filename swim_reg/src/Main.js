// ============================= Main.js =================================//
// =======================================================================//


// Libraries -------------------------------------------------------------//
// -----------------------------------------------------------------------//

import * as React from 'react';
import { View, StyleSheet, AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SessionsContext } from './screens/SessionsContext';
import SessionsScreen from './screens/Sessions';
import StatsScreen from './screens/Stats';
import RecordsScreen from './screens/Records';
import AccountScreen from './screens/Account';


// Functions and definitions ---------------------------------------------//
// -----------------------------------------------------------------------//

// Date form -----------------------------------------------------//

const getFormDate=(formDate)=>{

    var date = formDate.getDate();
    var month = formDate.getMonth() + 1;
    var year = formDate.getFullYear();
    return date + '-' + month + '-' + year;
}

/*const getCurrentDate=()=>{

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
}*/


// Bottom tab navigator ------------------------------------------//

const Tab = createBottomTabNavigator();


// Main component --------------------------------------------------------//
// -----------------------------------------------------------------------//

class Main extends React.Component {

    // Constructor method ----------------------------------------//
    constructor(props) {
        super(props)
        this.state = {
          loading: true,
          session: {},
          sessions: [], 
        }     
        this.loadSessions()
    }  
    
    // Add session method ----------------------------------------//
    addSession = (sessionObj) => {
        const sessions = this.state.sessions;
        const session = {
          title: sessionObj.title,
          createdOn: getFormDate(sessionObj.date),
          distance: sessionObj.distance,
          minutes: sessionObj.minutes,
          seconds: sessionObj.seconds,
          extra: sessionObj.extra,
        };
        sessions.push(session);
        this.setState({ sessions, session: '' });
        this.save() 
    }

    // Delete session method -------------------------------------//
    onDeleteSession = (i) => {
        const sessions = this.state.sessions;
        sessions.splice(i, 1);
        this.setState({ sessions });
        this.save()
    }

    // Load session from context ---------------------------------//
    loadSessions = async () => {
        try {
            const sessions = await AsyncStorage.getItem('sessions');
            this.setState({
                sessions: JSON.parse(sessions) || [],
            loading: false
            });
        } catch (e) {
            console.log("Error getting Swim Items >", e);
        }
        this.save()
    }; 

    // Save session in context -----------------------------------//
    save = async () => {
        try {
          AsyncStorage.setItem('sessions', JSON.stringify(this.state.sessions));
        } catch (e) {
          console.log('Error while storing Swim Items >', e);
        }
    };

    // Button press methods --------------------------------------//
    onPress(num) {
        alert('Session ' + num + ' pressed')
      }
    onLongPress() {
        alert('Looooong' + num + ' pressed')
    }
    
    // Form error methods ----------------------------------------//
    formError(errors) {
        alert(errors.join('\n'))
    }



    // Render method ---------------------------------------------//
    render() {
        return (

            // Context provider for all elements 
            <SessionsContext.Provider
                value={
                {
                    session: this.state.session,
                    loading: this.state.loading,
                    sessions: this.state.sessions,
                    duration: this.state.duration,
                    isFormVisible: this.state.isFormVisible,
                    onPress: this.onPress,
                    onLongPress: this.onLongPress,
                    formError: this.formError,
                    addSession: this.addSession,
                    onDeleteSession: this.onDeleteSession,
                    loadSessions: this.loadSessions,
                    save: this.save,
                }
            }>
                {/* Main screen */}
                <NavigationContainer>
                    <View style={{height: 26, backgroundColor: 'white'}}></View>
                    {/* Bottom tab navigator */}
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Sessions') {
                            iconName = focused ? 'ios-list-box' : 'ios-list-box';
                            size = focused ? size + 4 : size;
                            } else if (route.name === 'Stats') {
                            iconName = focused ? 'ios-stats' : 'ios-stats'  ;
                            size = focused ? size + 4 : size;
                            } else if (route.name === 'Records') {
                            iconName = focused ? 'md-trophy' : 'md-trophy';
                            size = focused ? size + 4 : size;
                            } else if (route.name === 'Account') {
                            iconName = focused ? 'md-person' : 'md-person';
                            size = focused ? size + 4 : size;
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        })}
                        tabBarOptions={{
                        activeTintColor: 'dodgerblue',
                        inactiveTintColor: 'gray',
                        labelStyle: {
                            fontSize: 13,
                            margin: 0,
                            padding: 5
                        },
                        style: {
                            backgroundColor: 'white',
                            height: 60
                        },
                        
                        }}
                    >
                        <Tab.Screen name="Sessions" component={SessionsScreen} />
                        <Tab.Screen name="Stats" component={StatsScreen} />
                        <Tab.Screen name="Records" component={RecordsScreen} />
                        <Tab.Screen name="Account" component={AccountScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </SessionsContext.Provider>
        );
    }
}

export default Main;


// General styles --------------------------------------------------------//
// -----------------------------------------------------------------------//

const styles = StyleSheet.create({
    buttoncontainer: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'dodgerblue',
      borderRadius: 20,
      padding: 2
    },
    buttonText: {
      color: 'white',
      fontSize: 20, 
    }
  });