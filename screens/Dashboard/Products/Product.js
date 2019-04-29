import React from 'react';
import {ImageBackground,Image  , Button,SafeAreaView,Text,StyleSheet, View,TouchableOpacity } from 'react-native';
import {Card} from 'native-base';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ADDBOX from '../../../assets/addBox.png';
import CALENDER from '../../../assets/calender.png';
// import CALANDER from './Products/calander';
// import CalendarStrip from 'react-native-calendar-strip-slide-navigation';
import { Checkbox } from 'react-native-material-ui';


class Product extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:0.5,flexDirection: 'row',backgroundColor:'#C8A7E6',width:'100%', padding:15}}>
                    <AntDesign name="arrowleft" style={{fontSize:26,paddingTop:5,color:'white'}}/>
                </View>
                <View style={{flex:2,borderRadius:8,width:'98%',margin:'2%'}}>
                    <View style={{borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:'#C8A7E6',width:'98%',margin:'1%'}}>
                        <Text style={{color:'#ffffff',fontSize:12,padding:'3%'}}>Add new product</Text>
                    </View>
                    <Card style={{top:-8,borderBottomLeftRadius:8,borderTopBottomRadius:8,justifyContent:'center',alignItems:'center'}}>
                        <Card style={{borderRadius:8,width:80,height:'80%',justifyContent:'center',alignItems:'center'}}>
                            <Image source={ADDBOX} style={{margin:'2%',height:'50%',width:40}}/>
                        </Card>
                    </Card>
                </View>
                <View style={{flex:4,borderRadius:8,width:'98%',margin:'2%'}}>
                    <View style={{borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:'#C8A7E6',width:'98%',margin:'1%'}}>
                        <Text style={{color:'#ffffff',fontSize:12,padding:'3%'}}>Products you are using</Text>
                    </View>
                    <Card style={{top:-8,borderBottomLeftRadius:8,borderTopBottomRadius:8,justifyContent:'center',alignItems:'center'}}>
                        <Image source={CALENDER} style={{width:'90%',height:80}}/>
                        <View style={{width:'90%', borderBottomColor: 'gainsboro',borderBottomWidth: 1}}></View>
                        <View style={{width:'100%',alignItems:'center'}}>
                            <Card style={{width:'90%',borderLeftColor:'#C8A7E6',borderLeftWidth: 5}}>
                            <View  style={{padding:'2.5%',flexDirection:"row" }}>
                                    <View style={{width:'20%'}}>
                                        <Checkbox value="agree" style={{top:-7}}/>
                                    </View>
                                    <View style={{width:'70%'}}>
                                        <Text>Burt's Bees Micellar Cleansing Towelettes</Text>
                                    </View>
                                    <View style={{width:'5%'}}>
                                        <Entypo name="edit" style={{fontSize:26,paddingTop:5,fontSize:12}}/>
                                    </View>
                                    <View style={{width:'5%'}}>
                                        <MaterialIcons name="cancel" style={{fontSize:26,paddingTop:5,fontSize:12}}/>
                                    </View>
                                </View>
                            </Card>
                            <Card style={{width:'90%',borderLeftColor:'#C8A7E6',borderLeftWidth: 5}}>
                            <View  style={{padding:'4%',flexDirection:"row" }}>
                                <View style={{width:'20%'}}>
                                        <Checkbox value="agree"/>
                                    </View>
                                    <View style={{width:'70%'}}>
                                        <Text>Burt's Bees Micellar Cleansing Towelettes</Text>
                                    </View>
                                    <View style={{width:'5%'}}>
                                        <Entypo name="edit" style={{fontSize:26,paddingTop:5,fontSize:12}}/>
                                    </View>
                                    <View style={{width:'5%'}}>
                                        <MaterialIcons name="cancel" style={{fontSize:26,paddingTop:5,fontSize:12}}/>
                                    </View>
                                </View>
                            </Card>
                            <Card style={{width:'90%',borderLeftColor:'#C8A7E6',borderLeftWidth: 5}}>
                                <View  style={{padding:'4%',flexDirection:"row" }}>
                                    <View style={{width:'20%'}}>
                                        <Checkbox value="agree"/>
                                    </View>
                                    <View style={{width:'70%'}}>
                                        <Text>Burt's Bees Micellar Cleansing Towelettes</Text>
                                    </View>
                                    <View style={{width:'5%'}}>
                                        <Entypo name="edit" style={{fontSize:26,paddingTop:5,fontSize:12}}/>
                                    </View>
                                    <View style={{width:'5%'}}>
                                        <MaterialIcons name="cancel" style={{fontSize:26,paddingTop:5,fontSize:12}}/>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    </Card>
                </View>
            </View>
        );
    }
}
export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
