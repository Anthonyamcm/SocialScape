import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { colors, spacing } from "../Theme";
import { Text } from "../Components/Text";

/*
  1. Create the config
*/
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "pink" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <LinearGradient
      start={{ x: 0.3, y: 0 }}
      end={{ x: 1, y: 0.25 }}
      colors={[colors.palette.error100, colors.palette.error200]}
      style={styles.container}
    >
      <Text preset="subheading" style={{ color: colors.palette.neutral100 }}>
        {props.text1}
      </Text>
    </LinearGradient>
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    overflow: "hidden",
    width: "85%",
    borderRadius: 16,
  },
});
