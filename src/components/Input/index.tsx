import { View, TextInput, Platform } from 'react-native';
import CustomText from '../Text';
import { InputProps } from '../../utils/Types';
import { theme } from '../../utils/Themes';
import { fonts } from '../../utils/Themes/fonts';
import sizeHelper from '../../utils/Helpers';

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  fontWeight,
  multiline,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  color,
  maxLength,
  placeholderTextColor,
  borderRadius,
  backgroundColor,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  label,
  borderColor,
  fontFamily,
}: InputProps) => {
  return (
    <View
      style={{
        paddingVertical: sizeHelper.calWp(14),
        paddingHorizontal: sizeHelper.calWp(25),
        minHeight: sizeHelper.calHp(83),
        maxHeight: sizeHelper.calHp(100),
        justifyContent: 'center',
        borderColor: borderColor || theme.colors.error,
        gap: sizeHelper.calWp(5),
        borderWidth: error?.length ? 1 : -1,
        borderRadius: borderRadius || sizeHelper.calWp(30),
        backgroundColor: backgroundColor || theme.colors.dark_grey,
      }}
    >
      {label && (
        <View>
          <CustomText
            text={label}
            color={theme.colors.white + '80'}
            size={21}
          />
        </View>
      )}

      <TextInput
        value={value}
        editable={editable}
        onSubmitEditing={onSubmitEditing}
        allowFontScaling={false} // Disable font scaling
        style={{
          fontSize: sizeHelper.calHp(fontSize || 20),
          width: '98%',
          alignItems: 'center',
          marginLeft: sizeHelper.calWp(Platform.OS == 'ios' ? 0 : -7),
          justifyContent: 'center',
          textAlign: textAlign,
          textAlignVertical: textAlignVertical,
          paddingTop: paddingTop || 0,
          paddingVertical: 0, // Adjust as needed for centering
          fontFamily: fontFamily || fonts.Inter_Regular,
          fontWeight: fontWeight || '500',
          color: color || theme.colors.white,
          paddingRight: 0,
        }}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={placeholderTextColor || theme.colors.white + '80'}
        keyboardType={keyboard}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry || false}
        onChangeText={onChangeText}
        onBlur={onBlur}
        autoCapitalize="none"
      />

      {error && (
        <View>
          <CustomText size={19} text={error} color={theme.colors.error} />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
