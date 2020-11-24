import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';


const Session = (props) => {

  const swimCheckIcon = 'swimmer';
  const swimCheckIconColor = '#03D';

  return (
    <View style={styles.swimContainer}>

        <View style={styles.iconContainer}>
            <FontAwesome5
                name={swimCheckIcon}
                size={styles.swimCheckIcon.fontSize}
                color={swimCheckIconColor}
            />
        </View>

        <View style={styles.detailsContainer}>
            <Text style={styles.swimTitle}>{props.title} - {props.createdOn}</Text>
            <View style={styles.swimData}>
                <Text style={styles.swimDistance}> {props.distance}m </Text>
                <Text style={styles.swimTime}>{props.minutes}' {props.seconds}" </Text>
                <Text style={styles.swimPace}>
                    {Math.floor(100*((60*parseInt(props.minutes) + parseInt(props.seconds))/parseInt(props.distance))/60)}'
                    {Math.floor(100*((60*parseInt(props.minutes) + parseInt(props.seconds))/parseInt(props.distance))%60)}'
                    /100m 
                </Text>
            </View>
        </View>
    
        <View style={styles.iconContainer}>
            <MaterialIcons 
                style={styles.deleteIcon}
                name={'delete-forever'} 
                size={styles.swimCheckIcon.fontSize}
                color='#E00'
                onPress={e => props.onDelete(props.index)}
            /> 
        </View>
           
    </View>
  );
}

const styles = StyleSheet.create({
  swimContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      paddingLeft: 10,
      paddingRight: 5,
      marginBottom: 10,
      borderRadius: 5,
      shadowOffset: { height: 2, width: 0 },
      shadowColor: '#000000',
      shadowOpacity: 0.6,
      elevation: 5,
      position: 'relative',
      backgroundColor: '#DB9',
  },
  iconContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
  detailsContainer: {
      flex: 8,
  },
  swimCheckIcon: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swimTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#03D',
  },
  swimData: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 3,
  },
  swimDistance: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
  },
  swimTime: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18,
      fontStyle: 'italic',
  },
  swimPace: {
      flex: 1,
      textAlign: 'center',
      fontSize: 18,
      color: 'grey',
  },
  titleComplete: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  deleteIcon: {
    fontSize: 22
  }
});

export default Session;