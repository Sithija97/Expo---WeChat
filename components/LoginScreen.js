import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LoginScreen extends React.Component{
    state={
        name:""
    };

    continue = ()=> {
        this.props.navigation.navigate("Chat",{name:this.state.name});
    };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.circle}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
      height:500,
      width:500,
      position:'absolute',
      backgroundColor:'#FFF',
      borderRadius: 500 / 2,
      left:-120,
      top:-20
  }
});
