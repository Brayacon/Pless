import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';


export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pledgeCount}>
        <Text style={{
          paddingRight: 50
          
          }}>Pledges</Text>
        <Text>25,000</Text>
      </View>
      <Button title = "Pledge" onPress= {() => console.log("button pressed")}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pledgeCount: {
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 100,
  },

});
