import React, { Component } from 'react';
// import {ImageBackground} from 'react-native'
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import BackImage from '../assets/splash.png'
export default class Home extends Component {
    render() {
        return (
            <Container>
                <View><Text>Home</Text></View>
                <Header />
                <Content>
                    <Item>
                        <Icon active name='user' />
                        <Input placeholder='Name'/>
                    </Item>
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Email'/>
                    </Item>
                    <Item>
                        <Icon active name='home' />
                        <Input placeholder='Account No'/>
                    </Item>
                    <Item>
                        <Icon active name='lock' />
                        <Input placeholder='Password'/>
                    </Item>
                </Content>
            </Container>
        );
    }
}