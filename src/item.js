import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Item extends PureComponent {
  render() {
    let {data} = this.props
    return (
        <TouchableOpacity onPress={()=>{}} style={styles.fr}>
            <View style={{width:60, justifyContent:'center', alignItems: 'center'}}>
                <Icon allowFontScaling name="ios-card" style={{color: '#778494', fontSize:28}}/>
            </View>      
            <View style={{flex:1, borderLeftColor: '#f3f2f7', borderLeftWidth: 2, paddingLeft:10, paddingVertical: 15}}>
                <Text allowFontScaling numberOfLines={1} style={{fontSize: 16, fontWeight: 'bold', color: '#4f5962'}}>{data.title}</Text>
                <Text allowFontScaling numberOfLines={1} style={{fontSize: 16, color: '#83888e'}}>{data.des}</Text>
            </View>  
            <View style={{width: 50, justifyContent: 'center', alignItems:'center'}}>
                <Icon allowFontScaling name="ios-arrow-forward" style={{color: '#b7b9c5', fontSize: 20}} />
            </View>  
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  fr:{
    flexDirection: 'row', alignItems:'center', justifyContent: 'center', backgroundColor: '#fff', 
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.1,
    borderRadius:10,
    paddingVertical:10,
    // height: 80,
    marginVertical:7
  }
});
