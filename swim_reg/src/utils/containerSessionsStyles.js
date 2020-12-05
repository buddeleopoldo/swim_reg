
export const styles = {
    color: '#ffffff',
    fontSize: 16,
    appBackgroundColors: ['cyan', 'dodgerblue']
  }

export const sessionBoxSubStyle = {
    swim: {
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        backgroundColor: 'burlywood',
        borderRadius: 5,
        padding: 2
    }
}

export const sessionBoxStyle = {
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
  };
  