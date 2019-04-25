import React from 'react';
import {ImageBackground , StyleSheet, View } from 'react-native';
import {Container, Content,InputGroup, Card, CardItem, Text, Body, Button, Icon, Item, Input} from 'native-base';
import Background from '../../../assets/bgNotif.jpg';

class NotificationTab extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <ImageBackground source={Background} style={{height:'100%',width:'100%'}}>
            <View style={styles.container}>
                    <View style={{backgroundColor:'white',width:'90%',borderRadius:5}}>
                        <Text style={{fontSize:16,color:'gray',padding:10}} >@Dianee_34 just posted a new blog, you might be interested in, 
                        Hurry up take a look
                        </Text>
                    </View>

                    <View style={{backgroundColor:'white',width:'90%',borderRadius:5, marginTop:5}}>
                        <Text style={{fontSize:16,color:'gray',padding:10 }} >
                        @Hailey_21 just posted a new blog, you might be interested in, 
                        Hurry up take a look
                        </Text>
                    </View>

                    
                    <View style={{width:'90%', marginTop:10}}>
                        <Text style={{fontSize:25,color:'white',padding:10}} >Older Notifications</Text>
                    </View>

                    <View style={styles.olderNotifications}>
                        <Text style={{fontSize:16,color:'white',padding:10}} >New Categories have been added.</Text>
                    </View>
                    <View style={styles.olderNotifications}>
                        <Text style={{fontSize:16,color:'white',padding:10}} >Contact us.</Text>
                    </View>
                    
                    <View style={styles.olderNotifications}>
                        <Text style={{fontSize:16,color:'white',padding:10}} >New features have been added.</Text>
                    </View>
            </View>
        </ImageBackground>
        );
    }

}
export default NotificationTab;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    olderNotifications:{
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        width:'90%',
        borderRadius:5,
        marginTop:5
}
});
