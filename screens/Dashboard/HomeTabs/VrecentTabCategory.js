import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,Image ,FlatList, ScrollView} from 'react-native';
import Search from './VSearch';
import {Card} from 'native-base'
import CardImage from '../../../assets/CardImage.png';
// import Video from 'react-native-video';
// import VIDEO from '../../../assets/video.WMV';



class Home extends React.Component {
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            <Card style={{borderRadius:8}}>
                <View style={{height:150,width:130,borderRadius:8}}>
                    <View style={{flex:2}}>
                    {/* <Video source={VIDEO}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}                                      // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={this.videoError}               // Callback when video cannot be loaded
                        style={{borderRadius:8,flex:1,height:null, width:null,resizeMode:'cover'}}
                        /> */}
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
