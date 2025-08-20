import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetReadyScreen from '../../screens/Auth/GetReady';
import RegisterScreen from '../../screens/Auth/Register';
import QuestionnaireScreen from '../../screens/Auth/Questionnaire';
import PersonalInformationScreen from '../../screens/Auth/PersonalInformation';
import YourGoalScreen from '../../screens/Auth/YourGoal';
import TrainingPlanScreen from '../../screens/Auth/TrainingPlan';
import DashboardBeginningScreen from '../../screens/Auth/DashboardBeginning';
import ConsultationAppointmentScreen from '../../screens/Auth/ConsultationAppointment';

const Stack = createNativeStackNavigator<any>();
const AppStack = () => {
  return (
    <>
      <StatusBar barStyle="light-content" translucent={true} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GetReadyScreen" component={GetReadyScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="QuestionnaireScreen"
          component={QuestionnaireScreen}
        />
        <Stack.Screen
          name="PersonalInformationScreen"
          component={PersonalInformationScreen}
        />
        <Stack.Screen name="YourGoalScreen" component={YourGoalScreen} />
        <Stack.Screen
          name="TrainingPlanScreen"
          component={TrainingPlanScreen}
        />
        <Stack.Screen
          name="DashboardBeginningScreen"
          component={DashboardBeginningScreen}
        />
        <Stack.Screen
          name="ConsultationAppointmentScreen"
          component={ConsultationAppointmentScreen}
        />
      </Stack.Navigator>
    </>
  );
};
export default AppStack;
