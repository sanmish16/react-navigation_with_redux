import React, { Component } from 'react';
import { View, Text } from 'react-native';


export default class NavBar extends Component {
    //Structure for the navigatin NavBar
    toggleDrawer = () => {
        //Props to open/close the drawer
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{ flexDirection: 'row', height: 56, backgroundColor: '#f8be45', alignItems: 'center'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:1}}>
                    <Text style={{textAlign: 'center', fontSize: 20, color:'white'}} numberOfLines={1}>
                        Home Screen
                    </Text>
                </View>
                <View style={{flex:1}}></View>
            </View>
        );
    }
}