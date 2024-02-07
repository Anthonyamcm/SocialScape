// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { customFontsToLoad } from "./src/Theme";
import { AppNavigator } from "./src/Navigation/AppNavigator";
import * as Linking from "expo-linking";
import { observer } from "mobx-react";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/Config/toastConfig";
import { useInitialRootStore } from "./src/Models/Store/helpers/useStore";
import { AuthenticationStore } from "./src/Models/Store/AuthenticationStore";
import { Provider } from "mobx-state-tree";

const prefix = Linking.createURL("/");
const config = {
  screens: {
    Landing: "",
    login: "Login",
    register: "Register",
  },
};

export const App = observer(() => {
  const { rehydrated } = useInitialRootStore(() => {});
  const [fontsLoaded] = useFonts(customFontsToLoad);
  const authStore = AuthenticationStore.create({
    authToken: undefined,
    user: undefined,
  });
  const linking = {
    prefixes: [prefix],
    config,
  };

  if (!fontsLoaded || !rehydrated) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Provider authStore={authStore}>
        <AppNavigator linking={linking} />
        <Toast config={toastConfig} />
      </Provider>
    </SafeAreaProvider>
  );
});
