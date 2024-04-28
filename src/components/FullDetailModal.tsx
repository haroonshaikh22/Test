import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import color from '../assets/Color';
import CloseIcon from 'react-native-vector-icons/Entypo';
import {TodayPnL, TotalInvest, TotalProfitLoss} from '../utils/Helper';

export interface fullDetailType {
  visible: boolean;
  data?: never[];
  onClose: any;
}

export interface listItemType {
  label: string;
  value: number | string;
  lastItem?: boolean;
}

const ListItem = ({label, value, lastItem}: listItemType) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: lastItem ? '5%' : '2%',
      }}>
      <Text style={styles?.symbol}>{label}</Text>
      <Text style={styles?.rightLabel}>{`\u20B9 ${value}`}</Text>
    </View>
  );
};

const FullDetailModal = ({visible, data, onClose}: fullDetailType) => {
  const totalCurrentVal = data?.map(item => {
    const currentVal = item?.ltp * item?.quantity;

    return {...item, currentVal};
  });

  let newCv = totalCurrentVal.reduce((a, b) => a + b?.currentVal, 0);

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles?.container}>
        <TouchableOpacity
          onPress={onClose}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CloseIcon name={'triangle-down'} size={22} color={color?.purple} />
        </TouchableOpacity>

        <ListItem label={'Current Value'} value={newCv} />
        <ListItem label={'Total Investment'} value={TotalInvest({data})} />
        <ListItem
          label={'Today Profit & Loss'}
          value={TodayPnL({data}).toFixed(2)}
        />
        <ListItem
          label={'Profit & Loss'}
          value={TotalProfitLoss({
            currentVal: newCv,
            todalInvest: TotalInvest({data}),
          }).toFixed(2)}
          lastItem
        />
      </View>
    </Modal>
  );
};

export default FullDetailModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color?.white,
    paddingHorizontal: '5%',
    position: 'absolute',
    bottom: 0,
    height: 200,
    width: '100%',
  },
  symbol: {color: color?.black, fontSize: 13, fontWeight: '700'},
  rightLabel: {
    fontWeight: '400',
    fontSize: 12,
    color: color?.black,
  },
});
