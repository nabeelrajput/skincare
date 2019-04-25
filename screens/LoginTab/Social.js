import React from 'react';
import {ImageBackground ,Image, StyleSheet, View } from 'react-native';
import FB from '../../assets/fb.png';
import TWITTER from '../../assets/twitter.png';
import GOOGLE from '../../assets/goog.png';


class Social extends React.Component {
    static navigationOptions = {
        header:null
    }

    render() {
        return (
           
                <View style={styles.container}>
                    <View style={{flex:1,flexDirection: 'row'}}>
                        <View style={{margin:'0.5%'}}>
                            <Image source={FB}  style={{width:60,height:60}} />
                        </View>
                        <View style={{margin:'0.5%'}}>
                            <Image source={TWITTER} style={{width:60,height:60}} />
                        </View>
                        <View  style={{margin:'0.5%'}}>
                            <Image source={GOOGLE} style={{width:60,height:60}}/>
                        </View>
                    </View>
                </View>
            
        );
    }
}
export default Social;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
