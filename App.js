import { StyleSheet, Text, View } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import { Landing } from './src/Screens/landing';
import { useFonts } from "expo-font"
import { customFontsToLoad } from './src/Theme';

export default function App() {

  const [fontsLoaded, fontError] = useFonts(customFontsToLoad);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Landing/>
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
