import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,Image } from 'react-native';
import Background from '../../../assets/bgNotif.jpg';

class ReminderTab extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <ImageBackground source={Background} style={{height:'100%',width:'100%'}}>
                <View style={styles.container}>
                        <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%',borderRadius:5}}>
                            <Text style={{fontSize:16,color:'white',padding:15}} >Add a new Reminder</Text>
                        </View>
                        <View style={{width:'90%'}}>
                            <Text style={{fontSize:25,color:'white',padding:10}} >Reminders</Text>
                        </View>

                        <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%',borderRadius:5,marginTop:5}}>
                            <Text style={{fontSize:16,color:'white',padding:10}} >New Skin Care Routine from 1st Jan 2020</Text>
                        </View>
                        <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%',borderRadius:5,marginTop:5}}>
                            <Text style={{fontSize:16,color:'white',padding:10}} >Skin care seminnars in two days</Text>
                        </View>

                        
                        <View style={{width:'90%'}}>
                            <Text style={{fontSize:25,color:'white',padding:10}} >Older Reminders</Text>
                        </View>

                        <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%',borderRadius:5,marginTop:5}}>
                            <Text style={{fontSize:16,color:'white',padding:10}} >New Skin Care Routine from 1st Jan 2020</Text>
                        </View>
                        <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%',borderRadius:5,marginTop:5}}>
                            <Text style={{fontSize:16,color:'white',padding:10}} >Skin care seminnars in two days</Text>
                        </View>
                        
                        <View style={{backgroundColor:'rgba(0, 0, 0, 0.1)',width:'90%',borderRadius:5,marginTop:5}}>
                            <Text style={{fontSize:16,color:'white',padding:10}} >Skin care seminnars in two days</Text>
                        </View>
                </View>
            </ImageBackground>
        );
    }
}
export default ReminderTab;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
