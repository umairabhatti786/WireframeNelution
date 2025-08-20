import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';
import CustomInput from '../../../components/Input';
import CustomHeader from '../../../components/CustomHeader';
import { appStyles } from '../../../utils/GlobalStyles';
import CustomProgressBar from '../../../components/CustomProgressBar';
import Dropdown from '../../../components/DropDown';

const PersonalInformationScreen = ({ navigation }: any) => {
  const genderData = [
    { name: 'Male', id: 1 },
    { name: 'Female', id: 2 },
    { name: 'None', id: 3 },
    { name: 'India', id: 4 },
  ];
  const [values, setValues] = useState({
    name: 'Jonas Meier',
    username: 'jonas',
    code: '0785581',
    gender: '',
  });


  let completed_answers = 1;
  let total_answers = 7;


  return (
    <>
      <ScreenLayout >
          <CustomHeader />
          <ScrollView
          contentContainerStyle={{gap:sizeHelper.calHp(30),paddingBottom:sizeHelper.calHp(30)}}
          >


        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>

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
                text={'Persönliche'}
                fontWeight="600"
                color={theme.colors.primary}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
              <CustomText
                text={'Informationen'}
                fontWeight="600"
                color={theme.colors.white}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
            </View>
            <CustomText
              text={`Anmeldung erfolgt über den Code den Du von Mr. Miles erhalten hast. `}
              style={{ textAlign: 'center' }}
              color={theme.colors.white}
            />
          </View>
          <View style={{ gap: sizeHelper.calHp(17) }}>
            <CustomInput
              placeholder={'Jonas Meier'}
              label="Name"
              value={values.name}
              onChangeText={(text: any) => setValues({ ...values, name: text })}
              keyboard={'email-address'}
            />

            <CustomInput
              placeholder={'Geburtsjahr'}
              height={sizeHelper.calHp(83)}
              label=""
              value={''}
              onChangeText={(text: any) => {}}
            />
            <Dropdown
              placeholder={'Geschlecht'}
              value={values.gender}
              onActions={(it: any) => {
                setValues({ ...values, gender: it?.name });
              }}
              data={genderData}
              label={'Nationality'}
            />

            <CustomInput
              placeholder={'Körpergrösse (cm)'}
              height={sizeHelper.calHp(83)}
              label=""
              value={''}
              onChangeText={(text: any) => {}}
            />
            <CustomInput
              placeholder={'Körpergewicht (kg)'}
              height={sizeHelper.calHp(83)}
              label=""
              value={''}
              onChangeText={(text: any) => {}}
            />

            <CustomInput
              placeholder={'E-Mail'}
              label=""
              height={sizeHelper.calHp(83)}
              value={''}
              onChangeText={(text: any) => setValues({ ...values, name: text })}
              keyboard={'email-address'}
            />
            <CustomInput
              placeholder={'Telefon'}
              height={sizeHelper.calHp(83)}
              label=""
              value={''}
              onChangeText={(text: any) => {}}
            />
          </View>
        </View>

        <View style={{ gap: sizeHelper.calHp(30),paddingTop:"10%" }}>
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

export default PersonalInformationScreen;

const styles = StyleSheet.create({
  bottom_text: {
    paddingHorizontal: sizeHelper.calWp(30),
  },
});
