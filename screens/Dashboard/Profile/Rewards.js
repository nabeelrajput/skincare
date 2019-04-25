import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,Image ,FlatList, ScrollView} from 'react-native';
import {Card} from 'native-base'

class Home extends React.Component {
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            <Card style={{borderRadius:8,height:80,width:100}}>
                    <View style={{alignItems:'center',marginTop:'4%',top:15.
                }}>
                        <Image source={this.props.imageUri} style={{height:28, width:28,resizeMode:'cover',margin:'5%'}}/>
                        <Text style={{fontSize:10}}>{this.props.name}</Text>
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
