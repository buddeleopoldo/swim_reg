import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import {sessionBoxStyle} from '../../utils/containerSessionsStyles';

// Create styles -------------------------------------------------//
const sessionStyles = StyleSheet.create(sessionBoxStyle);

const Session = (props) => {

  const swimCheckIcon = 'swimmer';
  const swimCheckIconColor = '#03D';

  return (
    <View style={sessionStyles.swimContainer}>

        <View style={sessionStyles.iconContainer}>
            <FontAwesome5
                name={swimCheckIcon}
                size={sessionStyles.swimCheckIcon.fontSize} 
                color={swimCheckIconColor}
            />
        </View>

        <View style={sessionStyles.detailsContainer}>
            <Text style={sessionStyles.swimTitle}>{props.title} - {props.createdOn}</Text>
            <View style={sessionStyles.swimData}>
                <Text style={sessionStyles.swimDistance}> {props.distance}m </Text>
                <Text style={sessionStyles.swimTime}>{props.minutes}' {props.seconds}" </Text>
                <Text style={sessionStyles.swimPace}>
                    {Math.floor(100*((60*parseInt(props.minutes) + parseInt(props.seconds))/parseInt(props.distance))/60)}'
                    {Math.floor(100*((60*parseInt(props.minutes) + parseInt(props.seconds))/parseInt(props.distance))%60)}'
                    /100m 
                </Text>
            </View>
        </View>
    
        <View style={sessionStyles.iconContainer}>
            <MaterialIcons 
                style={sessionStyles.deleteIcon}
                name={'delete-forever'} 
                size={sessionStyles.swimCheckIcon.fontSize}
                color='#E00'
                onPress={e => props.onDelete(props.index)}
            /> 
        </View>
           
    </View>
  );
}

export default Session;