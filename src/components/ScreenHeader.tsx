import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import color from '../assets/Color';

const ScreenHeader = () => {
  return (
    <View style={styles?.container}>
      <Text style={styles?.header}>Upstox Holding</Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {backgroundColor: color.purple, padding: '3%'},
  header: {
    color: color?.white,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});
