import { View, Text, StyleSheet } from 'react-native'
import ListItem from './ListItem';

export default List =({ children }) =>{
    return (
      <View style={style.container}>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
        <ListItem></ListItem>
      </View>
    );
  }

  const style = StyleSheet.create({
    text: {
        margin: 'auto'
    },
    container: {
        alignSelf: 'stretch',
        height: 600,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // backgroundColor: 'lightgray',
        paddingLeft: 30,
        paddingRight: 30,

    } 
  })