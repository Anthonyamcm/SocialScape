import React, { FC } from "react";
import { Screen } from "../../Components/Screen";
import { StyleSheet, View } from "react-native";
import { TextField } from "../../Components/TextField";
import { Formik } from "formik";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { colors, spacing } from "../../Theme";
import { Button } from "../../Components/Button";
import { Text } from "../../Components/Text";
import { AppStackScreenProps } from "../../Navigation/AppNavigator";
import useLogin from "./useLogin";
import { ILoginUser } from "../../Utils/interfaces";

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = function Login(_props) {
  const { navigation } = _props;

  const {
    emailRef,
    passwordRef,
    userSchema,
    initialValues,
    isLoading,
    onSubmit,
    isError,
  } = useLogin(navigation);

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
        <Text preset="heading" text={"Sign In"} />
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values: ILoginUser) => onSubmit(values)}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextField
                placeholder={"Email"}
                LeftAccessory={() => (
                  <Icon
                    name="email"
                    size={24}
                    color={
                      errors.email
                        ? colors.palette.error100
                        : colors.palette.neutral300
                    }
                    style={styles.icon}
                  />
                )}
                value={values.email}
                ref={emailRef}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={!!errors.email}
              />
              {(errors.email && touched.email) ||
              (errors.email && touched.email) ? (
                <Text
                  style={{
                    color: colors.palette.error100,
                  }}
                >
                  {errors.email}
                </Text>
              ) : null}
              <TextField
                placeholder={"Password"}
                LeftAccessory={() => (
                  <Icon
                    name="lock"
                    size={24}
                    color={
                      errors.password
                        ? colors.palette.error100
                        : colors.palette.neutral300
                    }
                    style={styles.icon}
                  />
                )}
                value={values.password}
                ref={passwordRef}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry={true}
                error={!!errors.password}
              />
              {(errors.password && touched.password) ||
              (errors.password && touched.password) ? (
                <Text
                  style={{
                    color: colors.palette.error100,
                  }}
                >
                  {errors.password}
                </Text>
              ) : null}
              <Text preset="default" text={"Forgot Password ?"} />
              <Button
                preset="gradient"
                gradient={[
                  colors.palette.primary100,
                  colors.palette.primary200,
                ]}
                onPress={() => handleSubmit()}
                isLoading={isLoading}
              >
                {"Sign In"}
              </Button>
            </>
          )}
        </Formik>
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
