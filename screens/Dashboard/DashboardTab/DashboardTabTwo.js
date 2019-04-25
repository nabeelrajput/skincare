import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View } from 'react-native';

class DashboardTabTwo extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection: 'row'}}>
                   <Text>Hello DashboardTabTwo</Text>
                </View>

            </View>
        );
    }
}
export default DashboardTabTwo;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
