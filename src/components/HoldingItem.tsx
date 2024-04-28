import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Profit_loss} from '../utils/Helper';
import color from '../assets/Color';
import {holdingItemType} from '../type/Type';

const HoldingItem = ({data}: holdingItemType) => {
  let currentValue = data?.ltp * data?.quantity;
  let investValue = data?.avgPrice * data?.quantity;

  return (
    <View style={{paddingHorizontal: '4%', marginVertical: '2%'}}>
      <View style={styles?.innerContainer}>
        <Text style={styles?.symbol}>{data?.symbol}</Text>
        <Text style={styles?.rightLabel}>
          LTP :{' '}
          {
            <Text style={styles?.symbol}>{`\u20B9 ${data?.ltp.toFixed(
              2,
            )}`}</Text>
          }
        </Text>
      </View>
      <View style={styles?.innerContainer}>
        <Text style={{fontSize: 12, fontWeight: '500'}}>{data?.quantity}</Text>
        <Text style={styles?.rightLabel}>
          P/l :
          {
            <Text style={styles?.symbol}>
              {`\u20B9 ${Profit_loss({
                currentVal: currentValue,
                investVal: investValue,
              }).toFixed(2)}`}
            </Text>
          }
        </Text>
      </View>
      <View
        style={{
          height: 0.6,
          backgroundColor: '#888888',
        }}></View>
    </View>
  );
};

export default HoldingItem;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  symbol: {color: color?.black, fontSize: 13, fontWeight: '700'},
  rightLabel: {
    fontWeight: '400',
    fontSize: 12,
    color: color?.black,
  },
  ltpAmt: {
    color: '#000000',
    fontWeight: '600',
  },
});
