import React from 'react';
import {ImageBackground  ,ScrollView, Button,SafeAreaView,Text,StyleSheet,Image, View,TouchableOpacity } from 'react-native';
import {Card} from 'native-base'
import RONALDO from '../../assets/ronal.jpeg';
import STAR from '../../assets/star.png';
import MEDAL from '../../assets/medal.png';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CardImage from '../../assets/award.png';
import CardImage2 from '../../assets/bonus.png';
import CardImage3 from '../../assets/giveaways.png';
import CardImage4 from '../../assets/reward.png';

import CardImage5 from '../../assets/addwork.png';
import CardImage6 from '../../assets/evening.png';
import CardImage7 from '../../assets/morning.png';

import Rewards from './Profile/Rewards';
import Awars from './Profile/Awars';

class Profile extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        console.log(this.props.navigation)
        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Product')}}>
                <Image source={RONALDO} style={{zIndex:1,top:20,position: 'absolute',width:'25%',height:'15%',borderRadius:45,borderColor:'#C8A7E6'}} />
                </TouchableOpacity>
                <View style={{flex:4,marginTop:'16%',backgroundColor:'#C8A7E6',width:'100%',borderRadius:15}}>
                   <View style={{width:'100%',alignItems:'flex-end'}}>
                        <View style={{flexDirection:'row'}}>
                                <AntDesign name="setting" style={{fontSize:26,paddingTop:10,paddingLeft:10,color:'white'}}/>
                                <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Product')}}>
                                    <MaterialCommunityIcons name="logout" style={{fontSize:26,padding:10,color:'white'}}/>
                                </TouchableOpacity>
                        </View>
                    
                    </View>
                   <View style={{width:'100%',flexDirection: 'row'}}>
                        <View style={{width:'35%',alignItems:'center',justifyContent:'center'}}>
                            <Image source={MEDAL} style={{height:'48%',width:'30%'}}/>
                            <Text style={{color:'#ffffff'}}>50</Text>
                        </View>
                        <View style={{width:'30%',alignItems:'center'}}>
                            <TouchableOpacity onPress={() =>{this.props.navigation.navigate('Product')}}>
                                <View>
                                    <Text style={{color:'#ffffff',fontSize:16}}>
                                        Emiley
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            
                            <Text style={{color:'#ffffff',fontSize:12}}>
                                Kansas City, US
                            </Text>
                        </View>
                        
                        <View style={{width:'35%',alignItems:'center',justifyContent:'center'}}>
                            <Image source={STAR} style={{height:'48%',width:'30%'}}/>
                            <Text style={{color:'#ffffff'}}>50</Text>
                        </View>
                   </View>
                </View>

                <View style={{flex:3.5,flexDirection: 'row',top:5,width:'100%',borderRadius:15,marginBottom:10}}>
                    <View style={styles.popularBlogs}>
                   <ScrollView
                        scrollEventThrottle={16}
                   >
                        <View style={{paddingTop:10,flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'flex-start',color:'white',fontSize:18,paddingLeft:6,width:'80%'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>Now Live</Text>
                            </View>
                            <View style={{alignItems:'flex-end',flexDirection:'row',width:'20%'}}>
                                <Text style={{color:'white'}}>view more</Text>
                            </View>
    
                        </View>

                        <View style={{height:'100%'}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                               <Rewards
                                imageUri={CardImage}
                               name="Rewards"
                               />
                               <Rewards
                                imageUri={CardImage2}
                               name="Earn rewards"
                               />
                               <Rewards
                                imageUri={CardImage3}
                               name="Giveaways"
                               />
                               <Rewards
                                imageUri={CardImage4}
                               name="For free"
                               />
                            </ScrollView>

                        </View>

                   </ScrollView>
                   
                </View>
               
                </View>
               
                <View style={{flex:3,flexDirection: 'row',backgroundColor:'#C8A7E6',width:'100%',borderRadius:15}}>
                    <View style={styles.popularBlogs}>
                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', width:'100%'}}>
                            <Card style={{borderRadius:8,width:'32%',marginLeft:'1%',alignItems:'center',justifyContent:'center',height:'90%'}}>
                                <Image source={CardImage5} style={{height:'40%',width:'30%'}}/>
                            </Card>
                            <Card style={{borderRadius:8,width:'32%' ,marginLeft:'1%',alignItems:'center',justifyContent:'center',height:'90%'}}>
                                <Image source={CardImage6} style={{height:'40%',width:'30%'}}/>
                            </Card>
                            <Card style={{borderRadius:8,width:'32%',marginLeft:'1%',marginRight:'1%',alignItems:'center',justifyContent:'center',height:'90%'}}>
                                <Image source={CardImage7} style={{height:'40%',width:'30%'}}/>
                            </Card>                            
                        </View>
                    </View>
                </View>



                <View style={{borderRadius:15,marginTop:10,marginBottom:5,flex:4,backgroundColor:'#C8A7E6',width:'100%'}}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'flex-start',color:'white',fontSize:12,paddingLeft:6,width:'80%'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>Photo Gallary</Text>
                            </View>
                            <View style={{alignItems:'flex-end',flexDirection:'row',width:'20%'}}>
                                <Text style={{color:'white'}}>Gallary > </Text>
                            </View>
                        </View>
                    <View style={{margin:'5%',flexDirection:'row',alignItems:'center',justifyContent:'center',top:-15}}>
                        <Card style={{borderRadius:'8',fontSize:12,width:'48%',margin:'2%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:10}}>Before</Text>
                            <Text style={{fontSize:10}}>Skin Score 83%</Text>
                            <Image source={RONALDO} style={{width:'95%',height:'45%',margin:'5%'}}/>
                        </Card>
                        <Card style={{borderRadius:'8',width:'48%',fontSize:12,margin:'2%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:10}}>After</Text>
                            <Text  style={{fontSize:10}}>Skin Score 93%</Text>
                            <Image source={RONALDO} style={{width:'95%',margin:'5%',height:'45%'}}/>
                        </Card>
                    </View>
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
        zIndex:-1,
        position:'relative',
        width:'98%',
        marginLeft:'1%',
        marginRight:'1%'
    },
    popularBlogs:{
        backgroundColor:'#C8A7E6',
        // flex:4,
        flexDirection:'row',
        // marginTop:'2%',
        borderRadius:15
    },
});
