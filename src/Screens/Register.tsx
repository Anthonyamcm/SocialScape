import React, { FC } from "react";
import { Screen } from "../Components/Screen";
import { StyleSheet, View } from "react-native";
import { TextField } from "../Components/TextField";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Fontisto } from "@expo/vector-icons";
import { colors, spacing } from "../Theme";
import { Button } from "../Components/Button";
import { Text } from "../Components/Text";
import { AppStackScreenProps } from "../Navigation/AppNavigator";

interface RegisterScreenProps extends AppStackScreenProps<"Register"> {}

export const RegisterScreen: FC<RegisterScreenProps> = function Register(
  _props
) {
  const { navigation } = _props;

  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={styles.screen}
    >
      <View style={styles.row}>
        <Button
          preset="filled"
          LeftAccessory={() => (
            <Icon
              name="arrow-left"
              size={32}
              color={colors.palette.neutral300}
            />
          )}
          onPress={() => navigation.goBack()}
        />
      </View>

      <View style={styles.column}>
        <Text preset="heading" text={"Create \nAccount"} />
        <View style={styles.row}>
          <TextField
            placeholder={"First Name"}
            containerStyle={{ flex: 1 }}
            LeftAccessory={() => (
              <Icon
                name="badge-account"
                size={24}
                color={colors.palette.neutral300}
                style={styles.icon}
              />
            )}
          />
          <TextField placeholder={"Last Name"} containerStyle={{ flex: 1 }} />
        </View>
        <TextField
          placeholder={"Email"}
          LeftAccessory={() => (
            <Icon
              name="email"
              size={24}
              color={colors.palette.neutral300}
              style={styles.icon}
            />
          )}
        />
        <TextField
          placeholder={"Password"}
          LeftAccessory={() => (
            <Icon
              name="lock"
              size={24}
              color={colors.palette.neutral300}
              style={styles.icon}
            />
          )}
        />
        <Button
          preset="gradient"
          colors={[colors.palette.primary100, colors.palette.primary200]}
        >
          {"Sign In"}
        </Button>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 32,
    height: "100%",
  },
  column: {
    flexDirection: "column",
    gap: 20,
    paddingVertical: 30,
  },
  row: {
    flexDirection: "row",
    gap: 15,
  },
  icon: {
    alignSelf: "center",
    marginStart: spacing.sm,
  },
});
