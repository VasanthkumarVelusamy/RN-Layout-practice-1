import { View, Text, StyleSheet } from 'react-native'
import styles from  './Styles'

export default Box =({ children }) =>{
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
        // width: 100,
        // height: 100,
        backgroundColor: "lightgray",
        borderColor: 'yellow',
        borderWidth: 1
    } 
  })