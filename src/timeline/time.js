import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class TimeLine extends PureComponent {
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
            <View style={{flex:1}}>
                <Text allowFontScaling style={{color: '#fff', marginBottom:5}}>Mon 21 Now, 2016</Text>
                <Text allowFontScaling style={{color: '#596a7a'}}>22 safar, 1438 AH</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
