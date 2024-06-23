import { View, Text, StyleSheet } from 'react-native'
import styles from  '../../Styles'

export default Drawer =({ children }) =>{
    return (
      <View style={style.drawer}>
        <Text style={style.text}>{children}</Text>
      </View>
    );
  }

  const style = StyleSheet.create({
    text: {
        margin: 'auto'
    },
    drawer: {
        width: 40,
        height: 40,
        backgroundColor: "lightgray",
        borderColor: 'yellow',
        borderWidth: 1
    } 
  })