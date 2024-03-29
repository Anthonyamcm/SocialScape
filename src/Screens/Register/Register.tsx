import React, { FC } from "react";
import { Screen } from "../../Components/Screen";
import { StyleSheet, View } from "react-native";
import { TextField } from "../../Components/TextField";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Formik } from "formik";
import { colors, spacing } from "../../Theme";
import { Button } from "../../Components/Button";
import { Text } from "../../Components/Text";
import { AppStackScreenProps } from "../../Navigation/AppNavigator";
import useRegister from "./useRegister";
import { IRegisterUser } from "../../Utils/interfaces";

interface RegisterScreenProps extends AppStackScreenProps<"Register"> {}

export const RegisterScreen: FC<RegisterScreenProps> = function Register(
  _props
) {
  const { navigation } = _props;

  const {
    userSchema,
    initialValues,
    firstNameRef,
    lastNameRef,
    emailRef,
    passwordRef,
    onSubmit,
    isLoading,
  } = useRegister(navigation);

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
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(values: IRegisterUser) => onSubmit(values)}
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
              <View style={styles.row}>
                <TextField
                  placeholder={"First Name"}
                  containerStyle={{ flex: 1 }}
                  LeftAccessory={() => (
                    <Icon
                      name="badge-account"
                      size={24}
                      color={
                        errors.first_name
                          ? colors.palette.error100
                          : colors.palette.neutral300
                      }
                      style={styles.icon}
                    />
                  )}
                  value={values.first_name}
                  ref={firstNameRef}
                  onChangeText={handleChange("first_name")}
                  onBlur={handleBlur("first_name")}
                  error={!!errors.first_name}
                />
                <TextField
                  placeholder={"Last Name"}
                  containerStyle={{ flex: 1 }}
                  value={values.last_name}
                  ref={lastNameRef}
                  onChangeText={handleChange("last_name")}
                  onBlur={handleBlur("last_name")}
                  error={!!errors.last_name}
                />
              </View>
              {(errors.first_name && touched.first_name) ||
              (errors.last_name && touched.last_name) ? (
                <Text
                  style={{
                    color: colors.palette.error100,
                    alignSelf: errors.first_name ? "flex-start" : "flex-end",
                  }}
                >
                  {errors.first_name || errors.last_name}
                </Text>
              ) : null}
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
              <Button
                preset="gradient"
                gradient={[
                  colors.palette.primary100,
                  colors.palette.primary200,
                ]}
                onPress={() => handleSubmit()}
                isLoading={isLoading}
                disabled={!isValid}
              >
                {"Create Account"}
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
