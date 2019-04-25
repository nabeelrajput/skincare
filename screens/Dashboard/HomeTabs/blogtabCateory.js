import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,Image ,FlatList, ScrollView} from 'react-native';
import Search from './Search';
import {Card} from 'native-base'
import CardImage from '../../../assets/CardImage.png';

class Home extends React.Component {
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            <Card style={{borderRadius:8}}>
                <View style={{height:150,width:130,borderRadius:8}}>
                    <View style={{flex:2}}>
                        <Image source={this.props.imageUri} style={{borderRadius:8,flex:1,height:null, width:null,resizeMode:'cover'}}/>
                    </View>
                </View>
                <View style={{flex:1,paddingLeft:10,paddingTop:10,margin:5, fontSize:12, color:'gainsboro'}}>
                    <Text>{this.props.name}</Text>

                </View>
            </Card>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    search:{
        backgroundColor:'#f70959',
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    popularBlogs:{
        backgroundColor:'#f70959',
        flex:4,
        flexDirection:'row',
        marginTop:'2%'

    },
    popularBlogs2:{
        backgroundColor:'gray',
        flex:4,
        flexDirection:'row',
        marginTop:'2%'

    }
});
