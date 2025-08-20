import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';
import CustomInput from '../../../components/Input';
import CustomHeader from '../../../components/CustomHeader';

const RegisterScreen = ({ navigation }: any) => {
  const [values, setValues] = useState({
    email: 'info@jonas.com',
    username: 'jonas',
    code: '0785581',
  });
  const [errors, setErrors] = useState({
    email_error: '',
    username_error: '',
    code_error: '',
  });
  return (
    <>
      <ScreenLayout style={{ paddingBottom: sizeHelper.calHp(40) }}>
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <CustomHeader disableLeftSource />

          <View
            style={{
              gap: sizeHelper.calWp(10),
              alignSelf: 'center',
              paddingTop: '15%',
              alignItems: 'center',
            }}
          >
            <CustomText
              text={'Anmelden'}
              fontWeight="600"
              color={theme.colors.white}
              fontFam={fonts.Inter_SemiBold}
              size={33}
            />

            <View
              style={{
                gap: sizeHelper.calWp(10),
                paddingHorizontal: sizeHelper.calWp(30),
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <CustomText
                text={`Anmeldung erfolgt über den Code den Du von Mr. Miles erhalten hast. `}
                style={{ textAlign: 'center' }}
                color={theme.colors.white}
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
          </View>
          <View style={{ gap: sizeHelper.calHp(17) }}>
            <CustomInput
              placeholder={'Email'}
              label="Email"
              value={values.email}
              onChangeText={(text: any) =>
                setValues({ ...values, email: text })
              }
              keyboard={'email-address'}
            />
            <CustomInput
              placeholder={''}
              label="Benutzername"
              value={values.username}
              error={errors.username_error}
              onChangeText={(text: any) => {
                setValues({ ...values, username: text });
                if (text.length == 0) {
                  setErrors({
                    ...errors,
                    username_error: '',
                  });

                  return;
                }
                setErrors({
                  ...errors,
                  username_error: 'Benutzername schein falsch zu sein.',
                });
              }}
            />
            <CustomInput
              placeholder={'Code'}
              label="Code"
              value={values.code}
              error={errors?.code_error}
              onChangeText={(text: any) => {
                setValues({ ...values, code: text });
              }}
              keyboard={'number-pad'}
            />
          </View>
        </View>

        <CustomButton
          text="Anmelden"
          onPress={() => {
            navigation.navigate('DashboardBeginningScreen');
          }}
        />

        <TouchableOpacity style={styles.bottom_text}>
          <CustomText
            text={`Passwort vergessen?`}
            fontWeight="600"
            style={{ textAlign: 'center' }}
          />
        </TouchableOpacity>
      </ScreenLayout>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  bottom_text: {
    paddingHorizontal: sizeHelper.calHp(30),
  },
});
