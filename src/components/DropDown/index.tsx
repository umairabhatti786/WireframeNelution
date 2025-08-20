import { Image, TouchableOpacity, View, ScrollView } from 'react-native';
import CustomText from '../Text';
import { theme } from '../../utils/Themes';
import sizeHelper from '../../utils/Helpers';
import { useState } from 'react';
import { appStyles } from '../../utils/GlobalStyles';
import { images } from '../../assets/images';
import { DropDownProps } from '../../utils/Types';

const Dropdown = ({
  height,
  width,
  borderRadius,
  backgroundColor,
  onRightSource,
  placeholder,
  value,
  data,
  top,
  onActions,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View
      style={{
        width: width || '100%',
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setIsOpen(!isOpen)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: sizeHelper.calWp(25),
          height: sizeHelper.calHp(height || 82),
          alignItems: 'center',
          gap: sizeHelper.calWp(10),
          borderRadius: borderRadius || sizeHelper.calWp(30),
          backgroundColor: backgroundColor || theme.colors.dark_grey,
        }}
      >
        {value?.name ? (
          <View style={{ ...appStyles.row }}>
            <CustomText
              text={value?.name}
              color={theme.colors.gray}
              size={24}
            />
          </View>
        ) : (
          <CustomText
            text={placeholder}
            color={theme.colors.white + '80'}
            size={21}
          />
        )}

        <TouchableOpacity
          onPress={onRightSource}
          disabled={!onRightSource}
          activeOpacity={0.3}
        >
          <Image
            source={images.down_arrow}
            style={{
              width: sizeHelper.calWp(27),
              height: sizeHelper.calWp(27),
            }}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            width: '100%',
            borderRadius: sizeHelper.calWp(30),
            borderColor: theme.colors.input_field_stroke,
            maxHeight: sizeHelper.calWp(400),
            backgroundColor: theme.colors.dark_grey,
            position: 'absolute',
            zIndex: 999,
            top: sizeHelper.calHp(top || 90),
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {data?.map((item: any, index: any) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => {
                      onActions?.(item);
                      setIsOpen(false);
                    }}
                    style={{
                      gap: sizeHelper.calHp(20),
                      borderBottomWidth: index === data.length - 1 ? 0 : 0.5,
                      borderBottomColor: theme.colors.white + '30',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        onActions?.(item);
                        setIsOpen(false);
                      }}
                      style={{
                        ...appStyles.row,
                        gap: sizeHelper.calWp(20),
                        padding: sizeHelper.calWp(25),
                      }}
                    >
                      <CustomText
                        text={item?.name}
                        color={theme.colors.white}
                        size={22}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default Dropdown;
