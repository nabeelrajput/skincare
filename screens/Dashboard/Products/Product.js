import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,TouchableOpacity } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import ADDBOX from '../../../assets/addBox.png'

class Profile extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1,flexDirection: 'row',backgroundColor:'#C8A7E6',width:'100%', padding:15}}>
                    <AntDesign name="arrowleft" style={{fontSize:26,paddingTop:5,color:'white'}}/>
                </View>

                <View style={{flex:2,backgroundColor:'yellow',borderRadius:8}}>
                    <View style={{backgroundColor:'#C8A7E6',width:'100%'}}>
                        <Text>Add new product</Text>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={ADDBOX} style={{margin:'2%'}}/>
                    </View>
                </View>

                <View style={{flex:3.5,flexDirection: 'row',backgroundColor:'gray'}}>
                   <Text>product</Text>
                </View>
            </View>
        );
    }
}
export default Profile;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
