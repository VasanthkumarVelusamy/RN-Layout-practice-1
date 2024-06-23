import { View, Text, StyleSheet } from 'react-native'
import Setting from './Setting';

export default GreetingTitle =({title, body }) =>{
    return (
        <View style={style.container}>
            <View style={style.greetingBox}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.body}>{body}</Text>
            </View>
            <Setting>S</Setting>
        </View>
    );
  }

  const style = StyleSheet.create({
    title: {
        fontSize: "28",
        fontWeight: 'bold'
    },
    body: {
        color: "gray"
    },
    greetingBox: {
        alignSelf: 'stretch',
        height: 70,
        flexDirection: "column",
        justifyContent: 'center',

        paddingLeft: 30
    },
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 40,
        alignItems: 'center'
    }
  })