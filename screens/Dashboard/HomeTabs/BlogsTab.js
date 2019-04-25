import React from 'react';
import {ImageBackground  , Button,SafeAreaView,Text,StyleSheet, View,Image ,FlatList, ScrollView} from 'react-native';
import Search from './Search';
import {Card} from 'native-base'
import CardImage from '../../../assets/CardImage.png';
import BLOGTABCATEGORY from './blogtabCateory';
import RECENTTABCATEGORY from './recentTabCategory'

class Home extends React.Component {
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <Search />
                </View>

                <View style={styles.popularBlogs}>
                   <ScrollView
                        scrollEventThrottle={16}
                   >
                        <View style={{paddingTop:10,flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'flex-start',color:'white',fontSize:18,paddingLeft:6,width:'80%'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>Popular Blogs</Text>
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
                               <BLOGTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                               <BLOGTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                               <BLOGTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                               <BLOGTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                            </ScrollView>

                        </View>

                   </ScrollView>
                   
                </View>
                <View style={styles.popularBlogs2}>
                <ScrollView
                        scrollEventThrottle={16}
                   >
                        <View style={{paddingTop:10,flexDirection:'row'}}>
                            <View style={{flexDirection:'row',alignItems:'flex-start',color:'white',fontSize:18,paddingLeft:6,width:'80%'}}>
                                <Text style={{color:'white',fontWeight:'bold'}}>Recent Blogs</Text>
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
                               <RECENTTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                               <RECENTTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                               <RECENTTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                               <RECENTTABCATEGORY
                                imageUri={CardImage}
                               name="home"
                               />
                            </ScrollView>

                        </View>

                   </ScrollView>
                   
                </View>
            </View>
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
        alignItems:'center',
        borderRadius:8,
        marginTop:2
    },
    popularBlogs:{
        backgroundColor:'#f70959',
        flex:4,
        flexDirection:'row',
        marginTop:'2%',
        borderRadius:5

    },
    popularBlogs2:{
        backgroundColor:'#c8a7e6',
        flex:4,
        flexDirection:'row',
        marginTop:'2%',
        marginBottom:'2%',
        borderRadius:5

    }
});
