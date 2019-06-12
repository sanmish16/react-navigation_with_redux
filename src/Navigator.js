import React from 'react';
import  HomeScreen from './app';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import NavBar from './NavBar'

const homeScreen = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Home Screen',
            headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
            header: <NavBar navigationProps={navigation} />,
            headerStyle: {
                backgroundColor: 'red',
            },
            headerTintColor: '#fff',
            animationEnabled: true
        }),
    },
});

const Navigator = createAppContainer(homeScreen);

export default Navigator;