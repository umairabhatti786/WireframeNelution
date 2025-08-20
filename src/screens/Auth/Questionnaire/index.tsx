import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { images } from '../../../assets/images';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';
import CustomHeader from '../../../components/CustomHeader';
import { appStyles } from '../../../utils/GlobalStyles';
import CustomProgressBar from '../../../components/CustomProgressBar';

const QuestionnaireScreen = ({ navigation }: any) => {
  let completed_answers = 3;
  let total_answers = 7;

  const QuestionnaireCard = ({ title, answered, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...appStyles.rowjustify,

          paddingVertical: sizeHelper.calWp(33),
          paddingHorizontal: sizeHelper.calWp(25),

          borderRadius: sizeHelper.calWp(30),
          backgroundColor: theme.colors.dark_grey,
        }}
      >
        <CustomText
          text={title}
          style={{ textAlign: 'center' }}
          color={theme.colors.white}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
          <CustomText
            text={answered}
            color={theme.colors.light_primary}
          />

          <Image
            source={images.next_arrow}
            style={{
              width: sizeHelper.calWp(15),
              height: sizeHelper.calWp(15),
              resizeMode: 'contain',
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout style={{ paddingBottom: sizeHelper.calHp(40) }}>
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
                gap:sizeHelper.calWp(5)

              }}
            >
              <CustomText
                text={'Fragebogen'}
                fontWeight="600"
                color={theme.colors.primary}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
              <CustomText
                text={'ausfüllen'}
                fontWeight="600"
                color={theme.colors.white}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
            </View>
            <CustomText
              text={`Anmeldung erfolgt über den Code den Du von Mr. Miles erhalten hast. `}
              fontWeight="600"
              style={{ textAlign: 'center' }}
              color={theme.colors.white}
            />
          </View>
          <View style={{ gap: sizeHelper.calHp(17) }}>
            <QuestionnaireCard
              onPress={() => navigation.navigate('PersonalInformationScreen')}
              title={'Persönliche Informationen'}
              answered={'12/12'}
            />
            <QuestionnaireCard 
                          onPress={() => navigation.navigate('YourGoalScreen')}

            
            title={'Dein Ziel'} answered={'0/12'} />
            <QuestionnaireCard
              title={'Fitness- & Sporterfahrung'}
              answered={'12/12'}
            />

            <QuestionnaireCard title={'Gesundheit'} answered={'7/12'} />

            <QuestionnaireCard
              title={'Motivation & Herausforderung'}
              answered={'9/12'}
            />

            <QuestionnaireCard
              title={'Verfügbarkeit & Equipment'}
              answered={'12/12'}
            />

            <QuestionnaireCard
              title={'Ernährung & Lebensstil'}
              answered={'1/12'}
            />
          </View>
        </View>

        <View style={{ gap: sizeHelper.calHp(30) }}>
          <CustomProgressBar
            title={`${completed_answers} von ${total_answers} Fragebögen ausgefüllt`}
            total={total_answers}
            progress={completed_answers}
          />
          <CustomButton
            text="Ausgefüllten Fragebogen schicken"
            bgColor={theme.colors.grey_soft + '40'}
            textColor={theme.colors.middle_grey}
            onPress={() => {
              navigation.navigate('TrainingPlanScreen');
            }}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default QuestionnaireScreen;

const styles = StyleSheet.create({
  bottom_text: {
    paddingHorizontal: sizeHelper.calWp(30),
  },
});
