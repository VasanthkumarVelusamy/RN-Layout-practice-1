import { View, Text, StyleSheet } from 'react-native'

export default Profile =({ children }) =>{
    return (
      <View style={style.box}>
        <Text style={style.text}>{children}</Text>
      </View>
    );
  }

  const style = StyleSheet.create({
    text: {
        margin: 'auto'
    },
    box: {
        width: 40,
        height: 40,
        backgroundColor: "lightgray",
        borderColor: 'yellow',
        borderWidth: 1
    } 
  })