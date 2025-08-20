import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../assets/images';

const CustomHeader = ({ onPress, disableLeftSource }: any) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.main}>
        {!disableLeftSource ? (
          <TouchableOpacity
            onPress={() => (onPress ? onPress() : navigation.goBack())}
          >
            <Image
              source={images.back_arrow}
              style={{
                width: sizeHelper.calWp(35),
                height: sizeHelper.calWp(35),
                resizeMode:"contain"
              }}
            />
          </TouchableOpacity>
        ) : (
          <View style={{ width: sizeHelper.calWp(50) }} />
        )}
        <Image
          style={{
            width: sizeHelper.calWp(80),
            height: sizeHelper.calWp(80),
            alignSelf: 'center',
          }}
          source={images.logo}
          resizeMode="contain"
        />

        <View style={{ width: sizeHelper.calWp(50) }} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomHeader;
