import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
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
import { Calendar } from 'react-native-calendars';

const ConsultationAppointmentScreen = ({ navigation }: any) => {
  const [chooseAppointment, setChooseAppointment] = useState<any>({});
  const [selectedDate, setSelectedDate] = useState('2025-01-18');
  const [selectedTime, setSelectedTime] = useState('11:00');
  const chooseAppointments = [
    { label: 'Online', title: 'Per Zoom-Call (ca. 60 Minuten)', id: 1 },
    {
      label: 'Vor Ort',
      title: `Fitness Zentrum\nMusterstrasse 1, 8484 Weisslingen`,
      id: 2,
    },
  ];

  const availableDates: any = {
    '2025-08-08': { marked: true },
    '2025-08-15': { marked: true },
    '2025-08-03': { marked: true },
    '2025-08-22': { marked: true },
    '2025-08-16': { marked: true },
    '2025-08-23': { marked: true },
    '2025-08-04': { marked: true },
    '2025-08-05': { marked: true },
    '2025-08-12': { marked: true },
    '2025-08-19': { marked: true },
  };
  const times = ['11:00', '13:00', '14:30', '15:30', '16:30', '18:00'];

  const SelectAppointmentCard = ({ title, label, item, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...appStyles.rowjustify,
          paddingVertical: sizeHelper.calWp(15),
          paddingHorizontal: sizeHelper.calWp(25),
          borderRadius: sizeHelper.calWp(30),
          backgroundColor: theme.colors.dark_grey,
        }}
      >
        <View style={{ width: '80%', gap: sizeHelper.calHp(5) }}>
          <CustomText
            text={label}
            fontWeight="600"
            color={theme.colors.white + '80'}
          />
          <CustomText
            text={title}
            fontWeight="600"
            color={theme.colors.white}
          />
        </View>

        <View style={styles.circle}>
          {chooseAppointment?.id == item?.id && (
            <View style={styles.innerCircle} />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScreenLayout>
        <CustomHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: sizeHelper.calHp(40) }}
        >
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
                text={'Beratungstermin'}
                fontWeight="600"
                color={theme.colors.primary}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
              <CustomText
                text={'anfragen'}
                fontWeight="600"
                color={theme.colors.white}
                fontFam={fonts.Inter_SemiBold}
                size={35}
              />
            </View>
            <CustomText
              text={`Stelle nun eine Anfrage zu Deinem Beratungstermin. Du erhältst die Bestätigung über Deine Email.`}
              style={{ textAlign: 'center' }}
              color={theme.colors.white}
            />
          </View>

          <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
            <View style={styles.calendarContainer}>
              <Calendar
                monthFormat={'MMMM yyyy'}
                onDayPress={day => setSelectedDate(day.dateString)}
                markedDates={{
                  ...availableDates,
                  [selectedDate]: {
                    selected: true,
                  },
                }}
                theme={{
                  backgroundColor: theme.colors.dark_grey,
                  calendarBackground: theme.colors.dark_grey,
                  textSectionTitleColor: '#A7F3D0',
                  dayTextColor: '#D1FAE5',
                  monthTextColor: '#fff',
                  selectedDayBackgroundColor: '#34D399',
                  arrowColor: '#34D399',
                  todayTextColor: '#10B981',
                  textDayFontWeight: '600',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '600',
                  weekVerticalMargin: 2, // ✅ reduce vertical gap between weeks
                  // 👇 Control font sizes
                  textDayFontSize: 12, // Days (1, 2, 3...)
                  textMonthFontSize: 14, // Month title (Januar 2025)
                  textDayHeaderFontSize: 11, // Week headers (Mo, Di...)
                }}
                renderArrow={direction => (
                  <TouchableOpacity style={styles.backArrowConatiner}>
                    <Image
                      style={{
                        width: sizeHelper.calWp(30),
                        height: sizeHelper.calWp(20),
                      }}
                      source={images.back_arrow}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                )}
                dayComponent={({ date, state }: any) => {
                  const today = new Date().toISOString().split('T')[0];
                  const isToday = date.dateString === today;
                  const isSelected = date.dateString === selectedDate;
                  const isAvailable = availableDates[date.dateString]; // ✅ check if date is available

                  let backgroundColor = 'transparent';
                  if (isSelected) {
                    backgroundColor = '#34D399';
                  } else if (isToday) {
                    backgroundColor = theme.colors.primary;
                  } else if (isAvailable) {
                    backgroundColor = '#D5FF5F20'; // ✅ available days highlight
                  }

                  return (
                    <View
                      style={{
                        height: sizeHelper.calHp(47),
                        width: sizeHelper.calWp(70),
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor,
                        borderColor: theme.colors.primary,
                        borderWidth: isAvailable ? 1 : -1,
                      }}
                    >
                      <Text
                        style={{
                          color: isToday
                            ? theme.colors.dark_grey // ✅ current day text red
                            : state === 'disabled'
                            ? 'gray'
                            : isSelected
                            ? 'white'
                            : '#D1FAE5',
                          fontWeight: isSelected || isToday ? 'bold' : 'normal',
                          fontSize: 12,
                        }}
                      >
                        {date.day}
                      </Text>
                    </View>
                  );
                }}
              />

              {/* Time slots */}
              <View
                style={{
                  paddingHorizontal: sizeHelper.calWp(20),
                  paddingVertical: sizeHelper.calHp(15),
                }}
              >
                <View style={styles.timesContainer}>
                  {times.map((time, index) => (
                    <CustomButton
                      key={index.toString()}
                      borderRadius={10}
                      onPress={() => setSelectedTime(time)}
                      height={50}
                      bgColor={
                        selectedTime === time
                          ? theme.colors.primary
                          : theme.colors.white
                      }
                      textColor={theme.colors.black}
                      size={20}
                      width={'31%'}
                      text={`${time} Uhr`}
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={`Wo möchtest Du Deinen Termin haben?`}
              fontWeight="600"
              style={{ textAlign: 'center' }}
              color={theme.colors.white}
            />
            {chooseAppointments.map((item, index) => {
              return (
                <View
                key={index.toString()}
                >
                  <SelectAppointmentCard
                    label={item.label}
                    onPress={() => setChooseAppointment(item)}
                    item={item}
                    title={item.title}
                  />
                </View>
              );
            })}

            <CustomButton
              text="Speichern"
              style={{
                marginTop: sizeHelper.calHp(60),
                marginBottom: sizeHelper.calHp(40),
              }}
              onPress={() => {
              }}
            />
          </View>
        </ScrollView>
      </ScreenLayout>
    </>
  );
};

export default ConsultationAppointmentScreen;

const styles = StyleSheet.create({
  bottom_text: {
    paddingHorizontal: sizeHelper.calWp(30),
  },

  calendarContainer: {
    backgroundColor: theme.colors.dark_grey,
    padding: sizeHelper.calWp(15),
    borderRadius: 16,
  },
  backArrowConatiner: {
    backgroundColor: '#D5FF5F20',
    paddingHorizontal: sizeHelper.calWp(13),
    paddingVertical: sizeHelper.calHp(13),
    borderRadius: 6,
  },
  timesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: sizeHelper.calWp(20),
  },

  timeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#064E3B',
  },

  circle: {
    width: sizeHelper.calWp(32),
    height: sizeHelper.calWp(32),
    borderWidth: sizeHelper.calWp(2),
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizeHelper.calWp(32),
  },
  innerCircle: {
    width: sizeHelper.calHp(12),
    height: sizeHelper.calHp(12),
    borderRadius: sizeHelper.calWp(12),
    backgroundColor: theme.colors.primary,
  },
});
