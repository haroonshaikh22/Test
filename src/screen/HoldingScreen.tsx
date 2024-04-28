import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import ScreenHeader from '../components/ScreenHeader';
import HoldingViewModel from '../viewModel/HoldingViewModel';
import HoldingItem from '../components/HoldingItem';

import FullDetailModal from '../components/FullDetailModal';
import OpenIcon from 'react-native-vector-icons/Entypo';
import color from '../assets/Color';
import {TodayPnL} from '../utils/Helper';

const HoldingScreen = () => {
  //Import logic from ViewModal to control UI
  const {fetchData, data, showModal, onPressBottomTab, onPressClose} =
    HoldingViewModel();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{backgroundColor: '#888888', flex: 1}}>
      <ScreenHeader />

      <FullDetailModal visible={showModal} data={data} onClose={onPressClose} />
      <View style={{backgroundColor: '#FFFFFF'}}>
        <FlatList
          data={data}
          keyExtractor={(item: never, index: number) => index}
          renderItem={item => <HoldingItem data={item?.item} />}
        />
      </View>

      <TouchableOpacity onPress={onPressBottomTab} style={styles?.topTab}>
        <OpenIcon name="triangle-up" size={20} color={color.purple} />

        <View style={styles?.bottomTab}>
          <Text style={styles?.bottomTitle}>Profilt & Loss:</Text>
          <Text style={styles?.bottomVal}>{`\u20B9 ${TodayPnL({data}).toFixed(
            2,
          )}`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HoldingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topTab: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '5%',
  },
  bottomTitle: {color: color?.black, fontSize: 13, fontWeight: '700'},
  bottomVal: {
    color: color?.black,
    fontSize: 13,
    fontWeight: '500',
  },
});
