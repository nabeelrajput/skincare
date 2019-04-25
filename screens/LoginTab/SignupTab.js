import React from 'react';
import {ImageBackground, StyleSheet, View } from 'react-native';
import {Container, Content,InputGroup, Card, CardItem, Text, Body, Button, Icon, Item, Input} from 'native-base';
import SOCIAL from './Social';
import backgroundImage from '../../assets/bgimage.jpg';

class SignupTab extends React.Component {
    static navigationOptions = {
        header:null
    }
    render() {
        
        return (
            <ImageBackground source={backgroundImage} style={{width:'100%',height:'100%'}}>
                <View style={styles.container}>
                    <View>
                        <Text style={{fontSize:30,color:'white',marginTop:'15%'}}>LOGO</Text>
                    </View>
                    <View style={{width:'80%',height:'50%',marginTop:'10%'}}>
                    <Container style={{borderRadius:10}}>
                        <Content style={{margin:'5%'}}>
                            <InputGroup style={{color:'gray'}}>
                                <Icon active name='person'  />
                                <Input placeholder='Name'/>
                            </InputGroup>
                            <InputGroup>
                                <Icon active name='mail'/>
                                <Input placeholder='Email'/>
                            </InputGroup>
                            <InputGroup>
                                <Icon active name='phone'/>
                                <Input placeholder='Account No'/>
                            </InputGroup>
                            <InputGroup>
                                <Icon active name='lock' />
                                <Input placeholder='Password'/>
                                <Icon active name='eye' />
                            </InputGroup>
                        </Content>
                    </Container>
                    </View>
                    <View style={{width:'80%',marginBottom:'2%'}}>
                        <Button style={{ justifyContent: 'center',width:'90%',borderRadius:25,alignSelf: 'center'}} light
                                onPress={()=>this.props.navigation.navigate('Dashboard')}>
                            <Text style={{ justifyContent: 'center'}}>Sign Up</Text>
                        </Button>
                    </View>
                    <View style={{width:'80%',marginBottom:'30%',marginTop:'5%'}}>
                        <SOCIAL/>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
export default SignupTab;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize:35,
        alignItems: 'center',
        justifyContent: 'center',
        color:'white'

    },
});