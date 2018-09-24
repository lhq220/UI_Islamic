import React, {PureComponent} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Head extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.btn,{}]}>
            <Icon name="md-menu" style={[styles.txtColor, styles.txtIcon]} />
        </TouchableOpacity>
        <View style={{flex:1, alignItems: 'center'}}>
            <Text style={[styles.txtColor, styles.txtTitle]} allowFontScaling>Islamic App</Text>
        </View>
        <TouchableOpacity style={[styles.btn,{alignItems: 'flex-end'}]}>
            <Icon name="md-share" style={[styles.txtColor, styles.txtIcon]} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#192938',
    paddingBottom:10,
    paddingHorizontal: 15
  },
  txtColor:{
      color: '#fff'
  },
  txtTitle:{
      fontSize: 20,
      fontWeight: 'bold'
  },
  btn:{
    width: 70, 
    paddingTop:10,  
    justifyContent: 'flex-end',

  },
  txtIcon:{
    fontSize:25, fontWeight:'bold'
  }
});
