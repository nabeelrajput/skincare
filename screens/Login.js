import React from 'react';
import {ImageBackground,Image , StyleSheet, Text, View , Button,SafeAreaView} from 'react-native';
import {createStackNavigator,createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginTab from './LoginTab/LoginTab';
import SignupTab from './LoginTab/SignupTab';

import Home from './Dashboard/Home';
import Profile from './Dashboard/Profile';
import Conversation from './Dashboard/Conversation';
import Notification from './Dashboard/Notification';

import DashboardTabOne from './Dashboard/DashboardTab/DashboardTabOne';
import DashboardTabTwo from './Dashboard/DashboardTab/DashboardTabTwo';

import NotificationTab from './Dashboard/NotificationTabs/NotificationTab';
import ReminderTab from './Dashboard/NotificationTabs/ReminderTab';

import BlogsTab from './Dashboard/HomeTabs/BlogsTab';
import VlogsTab from './Dashboard/HomeTabs/VlogsTab';

import backgroundImage from '../assets/bgimage.jpg';
import {createMaterialTopTabNavigator , createBottomTabNavigator} from 'react-navigation';
import mainTabs from '../App';
import Dashboard from './Dashboard/Dashboard';

import Product from './Dashboard/Products/Product';


//import images
import HomeIcon from '../assets/homeIcon.png';
import nearbyIcon from '../assets/nearby.png';
import chatIcon from '../assets/chat.png';
import UnionIcon from '../assets/Union.png';

class Login extends React.Component {
    static navigationOptions = {
        header:null
    }
    render() {
        return (
            // <ImageBackground source={backgroundImage} style={{width:'100%',height:'100%'}}>
                <SafeAreaView style={{flex:1}}>
                    <ViewTab style={{borderBottom:'1px solid #3b3f44'}}/>
                </SafeAreaView>
            // </ImageBackground>
        );
    }
}
export default Login;

const TabNavigator= createMaterialTopTabNavigator({

        LoginTab:{screen:LoginTab,
            navigationOptions:{
                tabBarLabel:'Sign-In'
            }
        },
        SignupTab:{screen: SignupTab,
            navigationOptions:{
                tabBarLabel:'Sign-up'
            }
        }
    },
    {
        initialRouteName:'LoginTab',
   
        tabBarOptions:{
            showLabel: true,
            activeTintColor:'white',
            activeTintWeight:'bold',
            inactiveTintColor:'#3b3f44',
            labelStyle:{fontSize:20},

            style:{
                backgroundColor: 'rgba(22, 22, 22, 0)',
                position: 'absolute',
                // bottom:  Dimensions.get('window').height-tabBarHeight,
                left:0,
                right:0
            }
        }

    });




    const TabNavigatorTopHome= createMaterialTopTabNavigator({

        BlogsTab:{screen:BlogsTab,
            navigationOptions:{
                tabBarLabel:'Blogs'
            }
        },
        VlogsTab:{screen: VlogsTab,
            navigationOptions:{
                tabBarLabel:'Vlogs'
            }
        }
    },
    {
        initialRouteName:'BlogsTab',
        tabBarOptions:{
            activeTintColor:'black',
            activeTintWeight:'bold',
            inactiveTintColor:'#3b3f44',
            labelStyle:{fontSize:16},
            style:{
                backgroundColor:'none',
                marginLeft:30,
                marginRight:30,

            }
        }
    });


// click on bottom Navigator notification tabs and this will open(TopNavigator)
const TabNavigatorNotification= createMaterialTopTabNavigator({

    NotificationTab:{screen:NotificationTab,
        navigationOptions:{
            tabBarLabel:'Notifications'
        }
    },
    ReminderTab:{screen: ReminderTab,
        navigationOptions:{
            tabBarLabel:'Reminders'
        }
    }
},
{
    initialRouteName:'NotificationTab',
    tabBarOptions:{
        activeTintColor:'white',
        activeTintWeight:'bold',
        inactiveTintColor:'#3b3f44',
        labelStyle:{fontSize:20},
        style:{
            backgroundColor: 'rgba(22, 22, 22, 0)',
            position: 'absolute',
            left:0,
            right:0,
            
        }
    }
}); 


    const BottomTabNavigatorDashboard= createBottomTabNavigator({

        Home:{screen:TabNavigatorTopHome,
            navigationOptions:{
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                      focused={focused}
                      source={HomeIcon}
                      style={{resizeMode:'contain', height:30, width:40}}
                    />
                  ),
            }
        },
        Profile:{screen: Profile,
            navigationOptions:{
                // tabBarLabel:'Profile',
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                      focused={focused}
                      source={nearbyIcon}
                      style={{resizeMode:'contain', height:30, width:40}}
                    />
                  ),
            }
        },
        Conversation:{screen:Conversation,
            navigationOptions:{
                // tabBarLabel:'Convo',
                // title: 'Header title',
                // headerStyle: {
                //     backgroundColor: 'pink'
                //   },
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                      focused={focused}
                      source={chatIcon}
                      style={{resizeMode:'contain', height:30, width:40}}
                    />
                  ),
            }
        },
        Notification:{screen: TabNavigatorNotification,
            navigationOptions:{
                // tabBarLabel:'Notif',
                tabBarIcon:({ focused, tintColor }) => (
                    <Image
                      focused={focused}
                      source={UnionIcon}
                      style={{resizeMode:'contain', height:30, width:40}}
                    />
                  ),
            }
        }
    },
    {
        initialRouteName:'Home',
        tabBarOptions:{
            activeTintColor:'black',
            activeTintWeight:'bold',
            inactiveTintColor:'#3b3f44',
            labelStyle:{fontSize:0},
            showLabel: false,
            showIcon: true,
            tintColor: '#333',
            activeTintColor: '#aaa',
            style:{
                backgroundColor:'#C8A7E6',
                height:70,
            }
        }
    
    });
    
    const ProductStack = createSwitchNavigator({
        Product:{screen:Product}
    },{
        // initialRouteName: 'TabNavigator',
        navigationOptions:{
            header:null
        }
    });

const DashboardScreenStack = createSwitchNavigator({
    Dashboard: {screen:BottomTabNavigatorDashboard},
    TabNavigator:{screen:TabNavigator},
    // Product:{screen:Product}
},{
    initialRouteName: 'TabNavigator',
    navigationOptions:{
        header:null
    }
});





const ViewTab = createAppContainer(DashboardScreenStack,ProductStack);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
