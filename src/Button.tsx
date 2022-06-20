import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Toggle = () => {
    const [isOn, setIsOn] = useState(true);

    return (
        <View>
          <Button title={ isOn ? 'ON' : 'OFF' } onPress={() => setIsOn(!isOn)}/>
        </View>
      ); 

}