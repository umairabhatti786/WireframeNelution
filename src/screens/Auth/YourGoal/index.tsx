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
import CustomInput from '../../../components/Input';
import CustomHeader from '../../../components/CustomHeader';
import { appStyles } from '../../../utils/GlobalStyles';
import CustomProgressBar from '../../../components/CustomProgressBar';
import SwitchToggle from 'react-native-switch-toggle';

const YourGoalScreen = ({ navigation }: any) => {
  let completed_answers = 1;
  let total_answers = 7;
  const [goalData, setGoalData] = useState([
    { name: 'Muskelaufbau', id: 1, selected: false },
    { name: 'Fettaufbau', id: 2, selected: false },
    { name: 'Ausdauer', id: 3, selected: false },
    { name: 'Beweglichkeit', id: 4, selected: false },
    { name: 'Kraft', id: 5, selected: false },
    { name: 'Stressabbau', id: 6, selected: false },
  ]);

  const GoalCard = ({ title, isEnable, onEnable, des }: any) => {
    return (
      <View
        style={{
          ...appStyles.rowjustify,
          paddingVertical: sizeHelper.calWp(26),
          paddingHorizontal: sizeHelper.calWp(25),
          borderRadius: sizeHelper.calWp(30),
          backgroundColor: theme.colors.dark_grey,
        }}
      >
        <View style={{ width: '65%' }}>
          <CustomText
            text={title}
            fontWeight="600"
            color={theme.colors.white + '80'}
          />
        </View>

        <View
          style={{ ...appStyles.row, gap: sizeHelper.calWp(14), width: '26%' }}
        >
          <SwitchToggle
            switchOn={isEnable}
            onPress={onEnable}
            circleColorOff={theme.colors.grey_soft}
            circleColorOn={theme.colors.primary}
            backgroundColorOn={"#D5FF5F20"}
            backgroundColorOff={theme.colors.middle_grey}
            containerStyle={{
              ...styles.toggleContainer,
              padding:  3,
            }}
            circleStyle={styles.toggleCircle}
          />
          <CustomText text={des} fontWeight="600" color={theme.colors.white} />
        </View>
      </View>
    );
  };
  return (
    <>
      <ScreenLayout>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: sizeHelper.calHp(30),
          }}
        >
          <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
            <CustomHeader />

            <View
              style={{
                gap: sizeHelper.calWp(20),
                alignSelf: 'center',
                paddingTop: '5%',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  ...appStyles.row,
                  alignSelf: 'center',
                  gap: sizeHelper.calWp(5),
                }}
              >
                <CustomText
                  text={'Dein'}
                  fontWeight="600"
                  color={theme.colors.primary}
                  fontFam={fonts.Inter_SemiBold}
                  size={35}
                />
                <CustomText
                  text={'Ziel'}
                  fontWeight="600"
                  color={theme.colors.white}
                  fontFam={fonts.Inter_SemiBold}
                  size={35}
                />
              </View>
              <CustomText
                text={`Anmeldung erfolgt über den Code den Du von Mr. Miles erhalten hast.`}
                fontWeight="600"
                style={{ textAlign: 'center' }}
                color={theme.colors.white}
              />
            </View>
            <View style={{ gap: sizeHelper.calHp(15) }}>
              <View
                style={{
                  paddingVertical: sizeHelper.calWp(20),
                  paddingHorizontal: sizeHelper.calWp(25),
                  borderRadius: sizeHelper.calWp(30),
                  backgroundColor: theme.colors.dark_grey,
                  gap: sizeHelper.calHp(10),
                }}
              >
                <CustomText
                  text={'Dein Hauptziel (Mehrfachauswahl)'}
                  fontWeight="600"
                  color={theme.colors.white + '80'}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: sizeHelper.calWp(15),
                  }}
                >
                  {goalData?.map((itm, ind) => {
                    return (
                      <CustomButton
                      key={ind.toString()}
                        borderRadius={10}
                        onPress={() => {
                          setGoalData(prevData =>
                            prevData.map(item =>
                              item.id === itm?.id
                                ? { ...item, selected: !item.selected }
                                : item,
                            ),
                          );
                        }}
                        height={46}
                        bgColor={
                          itm?.selected ? theme.colors.primary : '#D5FF5F20'
                        }
                        borderWidth={itm?.selected ? -1 : 1}
                        borderColor={
                          itm?.selected ? 'transparent' : theme.colors.primary
                        }
                        textColor={
                          itm?.selected
                            ? theme.colors.black
                            : theme.colors.white
                        }
                        size={19}
                        paddingHorizontal={sizeHelper.calWp(20)}
                        text={itm?.name}
                      
                      />
                    );
                  })}
                </View>
              </View>
              <GoalCard title={'Gibt es sonst noch ein Ziel?'} des="Nein" />
              <GoalCard
                title={'Hast Du ein Zielgewicht / Zielkörperfettanteil?'}
                isEnable={true}
                des="Ja"
              />
              <CustomInput
                placeholder={''}
                label="Dein Zielgewicht / Zielkörperfettanteil"
                value={'ca. 68kg'}
                keyboard={'email-address'}
              />
              <GoalCard
                title={
                  'Gibt es einen Bereich den Du besonders trainieren möchtest?'
                }
                des="Ja"
                isEnable={true}
              />

              <CustomInput
                placeholder={''}
                label="Welchen Bereich"
                value={'Rücken und Beine'}
                onChangeText={(text: any) => {}}
              />

              <GoalCard
                title={
                  'Gibt es eine bestimmte Fähigkeit / bewegungsmusster, die Du verbessern möchtest?'
                }
                des="Nein"
              />
              <GoalCard
                title={
                  'Hast Du ein Sport-Event oder Wettbewerb auf den Du dich vorbereiten möchtest?'
                }
                des="Nein"
              />
            </View>
          </View>

          <View
            style={{
              gap: sizeHelper.calHp(30),
              paddingTop: sizeHelper.calHp(80),
            }}
          >
            <CustomProgressBar
              title={`${completed_answers} von ${total_answers} Fragebögen ausgefüllt`}
              total={total_answers}
              progress={completed_answers}
            />
            <CustomButton
              text="Speichern"
              onPress={() => {
                navigation.navigate('TrainingPlanScreen');
              }}
            />
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default YourGoalScreen;

const styles = StyleSheet.create({
  bottom_text: {
    paddingHorizontal: sizeHelper.calWp(30),
  },

  toggleContainer: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calHp(43),
    borderRadius: 25,
    // padding: 5,
  },
  toggleCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
