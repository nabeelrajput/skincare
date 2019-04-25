import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View } from 'react-native';
import Background from '../../assets/bgNotif.jpg';

class Notification extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <ImageBackground source={Background} style={{height:'100%',width:'100%'}}>
                <View style={styles.container}>
                    <View style={{flex:1,flexDirection: 'row'}}>
                    <Text>Notification</Text>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}
export default Notification;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
