import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Session from './SwimSession';
import {sessionBoxSubStyle} from '../../utils/containerSessionsStyles';
import t from 'tcomb-form-native';

// Create styles -------------------------------------------------//
const BoxSubStyle = StyleSheet.create(sessionBoxSubStyle);

const Sessions = (props) => {
  let sessions = <Text>No SWIMs</Text>;
  if (props.sessions.length) {
    sessions = props.sessions.map((item, i) => {
      return (
        <Session
            style={BoxSubStyle.swim}
            //pool={item.pool}
            key={i} 
            index={i} 
            title={item.title}
            createdOn={item.createdOn}
            distance={item.distance}
            minutes={item.minutes}
            seconds={item.seconds}
            extra={item.extra}
            onDelete={props.onDelete}
        />
      );
    });
  }   
  return sessions;
}


export default Sessions;
