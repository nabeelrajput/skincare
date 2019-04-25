import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,Image } from 'react-native';
import RONAL from '../../assets/ronal.jpeg';
import { Right } from 'native-base';
import AntDesign from "react-native-vector-icons/AntDesign";

class Conversation extends React.Component {
    static navigationOptions = {
        // header:null
        // title: 'My App',
        // headerTintColor: 'red',
        // headerStyle: {
        //   backgroundColor: 'pink'
        // },
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1.8,flexDirection: 'row',backgroundColor:'#f70959',width:'100%', padding:15}}>
                    <AntDesign name="arrowleft" style={{fontSize:26,paddingTop:5,color:'white'}}/>
                </View>
                <View style={styles.chat1}>
                    <View style={{ width:'25%'}}>
                        <Image source={RONAL} style={{height:55,width:'75%',borderRadius:29,margin:10}}/>
                    </View>
                    <View style={{flexDirection:'column', backgroundColor:'white', width:'75%'}}>
                        <View style={{width:'75%',padding:12, margin:5,backgroundColor:'#f70959',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10, color:'white' }}>
                            <Text style={styles.white}>Thanks for choosing me</Text>
                        </View>
                        <View style={{width:'75%',padding:12, margin:5,backgroundColor:'#f70959',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10, color:'white' }}>
                            <Text style={styles.white}>What type of blogs and vlogs you want to read?</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.chat2}>
                    <View style={{flexDirection:'column', backgroundColor:'white', width:'75%'}}>
                        <View style={{ borderWidth: 0.5,borderColor: 'gray',alignSelf:'flex-end',width:'75%',padding:12, margin:5,backgroundColor:'#ffffff',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10, color:'white' }}>
                            <Text>Do you have any options for me</Text>
                        </View>
                    </View>
                    <View style={{width:'25%'}}>
                        <Image source={RONAL} style={{height:55,width:'75%',borderRadius:29,margin:10}}/>
                    </View>
                </View>
                <View style={styles.chat2}>
                    <View style={{width:'25%'}}>
                        <Image source={RONAL} style={{height:55,width:'75%',borderRadius:29,margin:10}}/>
                    </View>
                    <View style={{flexDirection:'column', backgroundColor:'white', width:'75%'}}>
                        <View style={{width:'75%',padding:12, margin:5,backgroundColor:'#f70959',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopLeftRadius:10, color:'white' }}>
                            <Text style={styles.white}>Yes why not.Here are some options, Select from them.</Text>
                        </View>
                    </View>
                </View>


                <View style={styles.check}>
                    <View style={{width:'25%%',margin:8}}>
                        <Text style={{alignSelf:'flex-end',paddingTop:5}}>O</Text>
                    </View>
                    <View style={{width:'75%',margin:3}}>
                        <View style={{ borderWidth: 0.5,borderColor: 'gray',width:'75%',padding:12, margin:5,backgroundColor:'#ffffff',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10, color:'white' }}>
                            <Text>Do you have any options for me
                            Do you have any options for me
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.check}>
                    <View style={{width:'25%%',margin:8}}>
                        <Text style={{alignSelf:'flex-end',paddingTop:5}}>O</Text>
                    </View>
                    <View style={{width:'75%',margin:3}}>
                        <View style={{ borderWidth: 0.5,borderColor: 'gray',width:'75%',padding:12, margin:5,backgroundColor:'#ffffff',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10, color:'white' }}>
                            <Text>Do you have any options for me
                            Do you have any options for me
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.check}>
                    <View style={{width:'25%%',margin:8}}>
                        <Text style={{alignSelf:'flex-end',paddingTop:5}}>O</Text>
                    </View>
                    <View style={{width:'75%',margin:3}}>
                        <View style={{ borderWidth: 0.5,borderColor: 'gray',width:'75%',padding:12, margin:5,backgroundColor:'#ffffff',borderBottomLeftRadius:10,borderBottomRightRadius:10,borderTopRightRadius:10, color:'white' }}>
                            <Text>Do you have any options for me
                            Do you have any options for me
                            </Text>
                        </View>
                    </View>
                </View>

            </View>
               
        );
    }
}
export default Conversation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    chat1:{
        flex:7,
        flexDirection:'row',
        width:'100%'
    },
    chat2:{
        flex:4,
        flexDirection:'row',
        width:'100%'
    },
    check:{
        flex:5,
        flexDirection:'row',
        // backgroundColor:'gray',
        width:'100%'
    },
    white:{
        color:'#ffffff'
    }
   
});
