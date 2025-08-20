import React from "react";
import RootNavigator from "./src/routes/RootNavigator";
import { View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

const App = ({ children, edges }: any) => {
  return (
      <SafeAreaProvider>
            <RootNavigator />
      </SafeAreaProvider>
  );
};

export default App;
