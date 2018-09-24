import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Notification extends PureComponent {
  render() {
    return (
        <View style={{flexDirection: 'row', paddingVertical: 8, zIndex: 1}}>
            <View style={{width: 50, paddingLeft: 15, justifyContent: 'center'}}>
                <View style={{ backgroundColor: '#6d7d94', width: 10, height: 10, borderRadius: 5,
                shadowColor: '#fff',
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowRadius: 5,
                shadowOpacity: 0.5,
            }} />
            </View>
            <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                <Text allowFontScaling style={{color: '#6f8495', marginRight: 10}}>Notification</Text>
               <View style={{ backgroundColor: '#283847', height: 30, width: 30, borderRadius: 30/2, justifyContent: 'center', alignItems: 'center'}}>
                    {/* <Icon allowFontScaling name="ios-notifications-outline" style={{color: '#1affb7', fontSize: 16}} /> */}
                    <Image source={require('../assets/notification-bell.png')} style={{width: 16, height:16}} resizeMode='contain'/>
               </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
