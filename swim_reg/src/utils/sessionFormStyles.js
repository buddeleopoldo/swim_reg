
import t from 'tcomb-form-native';



var _ = require('lodash');


const titleStylesheet = _.cloneDeep(t.form.Form.stylesheet);
const extraStylesheet = _.cloneDeep(t.form.Form.stylesheet);
const dateStylesheet = _.cloneDeep(t.form.Form.stylesheet);
const distanceStylesheet = _.cloneDeep(t.form.Form.stylesheet);
const minutesStylesheet = _.cloneDeep(t.form.Form.stylesheet);
const secondsStylesheet = _.cloneDeep(t.form.Form.stylesheet);

titleStylesheet.textbox = {
    normal: {
      color: '#2FA',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 7,
      borderRadius: 25,
      borderColor: 'white', 
      borderWidth: 2.5,
      marginBottom: 5
    },  
    error: {
      color: '#2FA',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 7,
      borderRadius: 25,
      borderColor: 'red',
      borderWidth: 1.5,
      marginBottom: 5
    }  
  }

extraStylesheet.textbox.normal = {
    color: '#AAA',
    fontSize: 17,
    textAlign: 'center',
    padding: 7,
    borderRadius: 4,
    borderColor: '#AAA', 
    borderWidth: 1,
    marginBottom: 5
}

dateStylesheet.datepicker = {
  normal: {
    marginBottom: 4
  },
  // the style applied when a validation error occours
  error: {
    marginBottom: 4
  }
}
dateStylesheet.dateTouchable = {
  normal: {
    fontWeight: 'bold',
  },
  error: {},

}
dateStylesheet.dateValue = {
  normal: {
    color: 'white',
    fontSize: 15,
    padding: 7,
    marginBottom: 5
  },
  error: {
    color: 'red',
    fontSize: 15,
    padding: 7,
    marginBottom: 5
  }
}

distanceStylesheet.textbox.normal = {
    width: 200,
    top: 5,
    margin: 'auto',
      color: '#2FA',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 7,
      borderRadius: 25,
      borderColor: 'white', 
      borderWidth: 2.5,
}
distanceStylesheet.textbox.error = {
    width: 200,
    top: 5,
      color: '#2FA',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 7,
      borderRadius: 25,
      borderColor: 'red', 
      borderWidth: 1.5,
}

minutesStylesheet.textbox.normal = {
    width: 100,
    top: 5,
      color: '#2FA',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 7,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      borderColor: 'white', 
      borderWidth: 2.5,
}
minutesStylesheet.textbox.error = {
    width: 100,
    top: 5,
    color: '#2FA',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 7,
      borderTopLeftRadius: 25,
      borderBottomLeftRadius: 25,
      borderColor: 'red', 
      borderWidth: 1.5,
}

secondsStylesheet.textbox.normal = {
    width: 100,
    top: 5,
      color: '#2FA',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 7,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      borderColor: 'white', 
      borderWidth: 2.5,
}
secondsStylesheet.textbox.error = {
    width: 100,
    top: 5,
    color: '#2FA',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 7,
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      borderColor: 'red', 
      borderWidth: 1.5,
}


const stylesObject = {
    titleStyle: titleStylesheet,
    extraStyle: extraStylesheet,
    dateStyle: dateStylesheet,
    distanceStyle: distanceStylesheet,
    minutesStyle: minutesStylesheet,
    secondsStyle: secondsStylesheet,

};

  export default stylesObject;