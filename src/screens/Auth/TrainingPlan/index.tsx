import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { images } from '../../../assets/images';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import { appStyles } from '../../../utils/GlobalStyles';
import { QuestionnaireCompletedData } from '../../../utils/Data';

const TrainingPlanScreen = ({ navigation }: any) => {

  return (
    <>
      <ScreenLayout backgroundImg={images.dashboard}>
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <CustomHeader disableLeftSource />

          <View
            style={{
              gap: sizeHelper.calWp(20),
              alignSelf: 'center',
              paddingTop: '5%',
              alignItems: 'center',
            }}
          >
            <CustomText
              text={'Dein Trainingsplan'}
              fontWeight="600"
              color={theme.colors.white}
              fontFam={fonts.Inter_SemiBold}
              size={35}
            />
            <View
              style={{
                ...appStyles.row,
                alignSelf: 'center',
                gap: sizeHelper.calWp(5),
              }}
            >
              <CustomText
                text={'ist'}
                fontWeight="600"
                color={theme.colors.white}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
              <CustomText
                text={'fertig!'}
                fontWeight="600"
                color={theme.colors.primary}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
            </View>
            <CustomText
              text={`Vereinbare nun einen Termin mit dem Coach, damit Du deine Journey starten kannst.`}
              style={{ textAlign: 'center' }}
              color={theme.colors.white}
            />
          </View>
          <View style={{ gap: sizeHelper.calHp(15) }}>
            {QuestionnaireCompletedData?.map((itm, ind) => {
              return (
                <View
                key={ind.toString()}
                 style={{ gap: sizeHelper.calHp(10) }}>
                  <View
                    style={{ gap: sizeHelper.calHp(8), alignItems: 'center' }}
                  >
                    {ind != 0 && (
                      <Image
                        source={images.down_fall}
                        style={{
                          width: sizeHelper.calWp(25),
                          height: sizeHelper.calWp(60),
                        }}
                        resizeMode="contain"
                      />
                    )}

                    <View
                      style={{
                        ...styles.circle,
                        backgroundColor: itm.completed
                          ? theme.colors.primary
                          : 'transparent',
                      }}
                    >
                      {itm.completed && (
                        <Image
                          source={images.check}
                          style={{
                            width: sizeHelper.calWp(25),
                            height: sizeHelper.calWp(25),
                          }}
                          resizeMode="contain"
                        />
                      )}
                    </View>
                  </View>
                  <CustomText
                    text={itm?.name}
                    size={19}
                    style={{ textAlign: 'center' }}
                    color={theme.colors.white}
                  />
                </View>
              );
            })}
          </View>

          <CustomButton
            width={'90%'}
            style={{ marginTop: sizeHelper.calHp(20), alignSelf: 'center' }}
            text="Beratungstermin anfragen"
            onPress={() => {
              navigation.navigate('ConsultationAppointmentScreen');
            }}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default TrainingPlanScreen;

const styles = StyleSheet.create({
  circle: {
    width: sizeHelper.calWp(45),
    height: sizeHelper.calWp(45),
    borderWidth: sizeHelper.calWp(2),
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizeHelper.calWp(45),
  },
});
