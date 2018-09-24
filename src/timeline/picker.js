import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
            <TouchableOpacity onPress={()=>{}} style={{flex:1, flexDirection: 'row', paddingVertical:10, backgroundColor: '#283847', borderRadius: 50, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#fff', paddingRight: 10}}>Dhaka (+6:)</Text>
                <Icon allowFontScaling name="ios-arrow-down" style={{color: '#566777', fontSize: 16}} />       
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
