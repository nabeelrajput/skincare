import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View } from 'react-native';

class Dashboard extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection: 'row'}}>
                   <Text>Hello Dashboard</Text>
                </View>

            </View>
        );
    }
}
export default Dashboard;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
