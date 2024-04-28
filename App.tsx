import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import HoldingScreen from './src/screen/HoldingScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <HoldingScreen />
    </View>
  );
};

export default App;
