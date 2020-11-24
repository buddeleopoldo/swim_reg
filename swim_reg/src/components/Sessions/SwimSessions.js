import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Session from './SwimSession';
import { styles as GlobalStyles } from '../../utils/styles';
import t from 'tcomb-form-native';


const Sessions = (props) => {
  let sessions = <Text style={styles.noSwim}>No SWIMs</Text>;
  if (props.sessions.length) {
    sessions = props.sessions.map((item, i) => {
      return (
        <Session
            style={styles.swim}
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

const styles = StyleSheet.create({
  noSwim: {
    fontSize: GlobalStyles.fontSize,
    color: GlobalStyles.fontColor,
    fontWeight: 'bold'
  },
  swim: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'burlywood',
    borderRadius: 5,
    padding: 2
},
});

export default Sessions;
