import React, { Component } from 'react'; 
import { Text, View, SafeAreaProvider, TouchableOpacity, StyleSheet  } from 'react-native'; 




export default class HomeScreen extends Component { 
    render() { 
        return (
        <View style = {styles.container}> 
        <SafeAreaProvider />
    
        <TouchableOpacity><text>Iss IssLocation</text></TouchableOpacity>
        <TouchableOpacity><text>Iss IssLocation</text></TouchableOpacity>
       
        </View> 

        )
    }
}
 const styles = StyleSheet.create({
    container:{
        flex:1
},
droidSafeArea:{

},
})
    
 

