import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
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
import CircleProgress from '../../../components/CircleProgress';

const DashboardBeginningScreen = ({ navigation }: any) => {
  const [isStart, setStart] = useState(false);
  const [progress, setProgress] = useState(0);
  return (
    <>
      <ScreenLayout backgroundImg={images.dashboard}>
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <CustomHeader disableLeftSource />
          <View style={{ paddingTop: '20%' }}>
            <CircleProgress current={progress} />
          </View>
          {isStart ? (
            <View style={styles.topContainer}>
                 <CustomText
                  text={'Trainingsplan wurde '}
                  color={theme.colors.white}
                  fontWeight="600"
                  fontFam={fonts.Inter_Medium}
                  size={40}
                />
              <View
                style={{
                  ...appStyles.row,
                  alignSelf: 'center',
                  gap:sizeHelper.calWp(12)
                }}
              >
                <CustomText
                  text={'noch nicht'}
                  fontWeight="600"
                  color={theme.colors.primary}
                  fontFam={fonts.Inter_Medium}
                  size={40}
                />
                <CustomText
                  text={'erstellt'}
                  color={theme.colors.white}
                  fontWeight="600"
                  fontFam={fonts.Inter_Medium}
                  size={40}
                />
              </View>
              <CustomText
                text={`Damit Mr. Miles Deinen Trainingsplan erstellen kann, fülle den Fragebogen aus.`}
                style={{ textAlign: 'center', paddingHorizontal: '10%',marginTop:sizeHelper.calHp(20) }}
                color={theme.colors.white}
              />
            </View>
          ) : (
            <View style={styles.topContainer}>
              <View
                style={{
                  ...appStyles.row,
                  alignSelf: 'center',
                }}
              >
                <CustomText
                  text={'Let’s '}
                  fontWeight="800"
                  color={theme.colors.white}
                  fontFam={fonts.InterDisplay_ExtraBold}
                  size={60}
                />
                <CustomText
                  text={'Start!'}
                  color={theme.colors.primary}
                  fontWeight="800"
                  fontFam={fonts.InterDisplay_ExtraBold}
                  size={60}
                />
              </View>
              <CustomText
                text={`Zum Start hat Mr. Miles noch ein paar Fragen an Dich! Bist du bereit?`}
                style={{ textAlign: 'center', paddingHorizontal: '10%',marginTop:sizeHelper.calHp(20) }}
                color={theme.colors.white}
              />
            </View>
          )}

          <CustomButton
            width={'90%'}
            style={{ marginBottom: sizeHelper.calHp(90), alignSelf: 'center' }}
            text="Fragebogen öffnen"
            onPress={() => {
              if (!isStart) {
                setProgress(1);
                setStart(true)

                return
              }
                navigation.navigate('QuestionnaireScreen');
            }}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default DashboardBeginningScreen;

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
  topContainer: {
    // gap: sizeHelper.calWp(10),
    alignSelf: 'center',
    paddingTop: '5%',
    alignItems: 'center',
    flex: 1,
  },
});
