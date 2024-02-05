import { StyleSheet } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { useFonts } from "expo-font"
import { customFontsToLoad } from './src/Theme';
import { AppNavigator } from './src/Navigation/AppNavigator';
import * as Linking from "expo-linking"
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/Config/toastConfig';


const prefix = Linking.createURL("/")
const config = {
  screens: {
    Landing: "",
    login: "Login",
    register: "Register"
  },
}

export default function App() {

  const linking = {
    prefixes: [prefix],
    config,
  }

  const [fontsLoaded, fontError] = useFonts(customFontsToLoad);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator
          linking={linking}
        />
        <Toast config={toastConfig}/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
