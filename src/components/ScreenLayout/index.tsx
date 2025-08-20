import React from "react";
import {
  StyleSheet,
  ViewStyle,
  View,
  ImageBackground,
  StatusBar,
  StatusBarStyle,
  Platform,
} from "react-native";
import { theme } from "../../utils/Themes";
import { SafeAreaView } from "react-native-safe-area-context";
import sizeHelper from "../../utils/Helpers";

interface ScreenLayoutProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  backgroundImg?: any;
  barStyle?: StatusBarStyle; // "light-content" | "dark-content" | "default"
  translucent?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  style,
  backgroundColor = theme.colors.secondary,
  backgroundImg,
}) => {
  if (backgroundImg) {
    return (
      <>
        
        <ImageBackground
          source={backgroundImg}
          style={styles.background}
          resizeMode="cover"
        >
          <SafeAreaView style={[styles.container, style]}>
            {children}
          </SafeAreaView>
        </ImageBackground>
      </>
    );
  }

  return (
    <>
     
      <SafeAreaView style={[styles.background, { backgroundColor }]}>
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal:sizeHelper.calWp(35),
    paddingTop:sizeHelper.calHp(Platform.OS=="ios"?20: 35),
    gap:sizeHelper.calHp(30)
  },
});

export default ScreenLayout;
