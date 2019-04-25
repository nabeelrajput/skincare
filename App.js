import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
          <Login/>
        </View>

    );
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
