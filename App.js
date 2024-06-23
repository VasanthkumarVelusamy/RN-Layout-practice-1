import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Box from "./Box"
import List from "./Components/List/List"
import HeaderBox from './Components/Header/HeaderBox';
import GreetingContainer from './Components/Greetings/GreetingContainer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <HeaderBox></HeaderBox>
      <GreetingContainer title="Hello Vasanth" body="Welcome Back!"></GreetingContainer>
      <List></List>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 30,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-between',
    ...Platform.select ({
      ios: {paddingTop: 50, },
      android: {paddingTop: StatusBar.currentHeight}
    })
  },
  box: {

  }
});
