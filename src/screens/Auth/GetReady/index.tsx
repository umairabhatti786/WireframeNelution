import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { images } from '../../../assets/images';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { appStyles } from '../../../utils/GlobalStyles';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';

const GetReadyScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout 
      style={{paddingBottom:sizeHelper.calHp(40)}}
      backgroundImg={images.splash_background}>
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <Image
            style={{
              width: sizeHelper.calWp(150),
              height: sizeHelper.calWp(150),
              alignSelf: 'center',
            }}
            source={images.logo}
            resizeMode="contain"
          />
          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(10),
              alignSelf: 'center',
            }}
          >
            <CustomText
              text={'Get'}
              fontWeight="800"
              color={theme.colors.white}
              fontFam={fonts.InterDisplay_ExtraBold}
              size={58}
            />
            <CustomText
              text={'Ready'}
              fontWeight="800"
              color={theme.colors.primary}
              fontFam={fonts.InterDisplay_ExtraBold}
              size={58}
            />
          </View>

          <CustomText
            text={
              'Willkommen in der Fitness-Army. Hier beginnt Deine Transformation! – Dein Fitness-Coach, Miles'
            }
            color={theme.colors.white}
            style={{ textAlign: 'center', paddingHorizontal: '10%' }}
            size={25}
          />
        </View>
        
        <CustomButton
          text="Anmelden"
          onPress={() => {
            navigation.navigate('RegisterScreen');
          }}
        />

        <View style={styles.bottom_text}>
          <CustomText
            text={`Anmeldung erfolgt über den Code den Du von Mr. Miles erhalten hast. `}
            style={{ textAlign: 'center' }}
            color={theme.colors.light_grey}
            label={
              <TouchableOpacity>
                <CustomText
                  text={'Kein Code erhalten?'}
                  textDecorationLine="underline"
                  color={theme.colors.light_primary}
                />
              </TouchableOpacity>
            }
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default GetReadyScreen;

const styles = StyleSheet.create({
  bottom_text: {
    gap: sizeHelper.calWp(10),
    paddingHorizontal: sizeHelper.calWp(30),
    alignItems: 'center',
    flexDirection: 'row',
  },
  
});
