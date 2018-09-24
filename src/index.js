import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, ScrollView, Dimensions} from 'react-native';
import Head from './Head'
import Item from './item'
import Time from './timeline/time'
import Notification from './timeline/notification'
import Picker from './timeline/picker'
import data from './data'
import ProgressCircle  from './chart/ProgressCircle'
export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            layout: {}
        }
    }
    _onLayoutConent = (e) =>{
        // console.log(e)
        this.setState({layout: e.layout})
    }
    render() {
        var { layout } = this.state
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Head/>
                <View style={{flex:1}}>
                <ScrollView>
                    <View onLayout={({nativeEvent}) => this._onLayoutConent(nativeEvent)} style={{paddingBottom: 100, backgroundColor:'#1c2c3b', flexDirection: 'row'}}>
                        <View style={{flex:1, paddingVertical:10, position: 'relative'}}>
                            <Time/>
                            <Picker/>
                            <Notification/>
                            <View style={{position: 'absolute', zIndex: 0, top: 0, left: 18, width: 5, height: layout.height, backgroundColor: '#344758'}}/>
                        </View>
                        <View style={{flex:1, paddingVertical: 10}}>
                            <ProgressCircle  style={ { height: 150 } }
                            progress={ 0.7 }
                            progressColor='#21ffc1'
                            backgroundColor='#243443'
                            content= {
                                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text allowFontScaling style={{color: '#fff'}}>Fajr</Text>
                                    <Text allowFontScaling style={{color: '#21ffc1', fontSize:20, fontWeight:'bold', paddingVertical:10}}>4:59 AM</Text>
                                    <Text allowFontScaling style={{color: '#fff'}}>-4:50:32</Text>
                                </View>
                            }/>
                        </View>
                    </View>
                    <View style={[styles.content, { marginTop: - layout.height *0.3}]}>
                    {
                        data.map((item, key)=>{
                            return  <Item data={item} key={item.id} />
                        })
                    }
                    
                    </View>
                </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f4f5f9'
  },
  content:{
    // position: 'absolute', 
    marginHorizontal:15, 
    left: 0, 
    zIndex: 1, 
    backgroundColor:'#fbfcfe', 
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    borderRadius:10,
    elevation:2,
    paddingHorizontal: 15,
    paddingVertical: 8
  }
});
