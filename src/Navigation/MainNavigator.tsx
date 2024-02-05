import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from "react-native-animated-nav-tab-bar";
import { CompositeScreenProps } from "@react-navigation/native";
import React from "react";
import { TextStyle, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, spacing, typography } from "../Theme";
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import {
  DashboardScreen,
  ProfileScreen,
  FeedScreen,
  SearchScreen,
} from "../Screens";

export type MainTabParamList = {
  Dashboard: undefined;
  Feed: undefined;
  Search: undefined;
  Profile: undefined;
};

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    AppStackScreenProps<keyof AppStackParamList>
  >;

const Tab = AnimatedTabBarNavigator<MainTabParamList>();

export function MainNavigator() {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeBackgroundColor: colors.palette.neutral200,
      }}
      appearance={{
        shadow: false,
        floating: false,
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        dotSize: DotSize.SMALL,
        tabBarBackground: colors.palette.neutral100,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="dashboard"
              color={
                focused ? colors.palette.neutral300 : colors.palette.neutral200
              }
              size={24}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list-alt"
              size={24}
              color={
                focused ? colors.palette.neutral300 : colors.palette.neutral200
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="search"
              size={24}
              color={
                focused ? colors.palette.neutral300 : colors.palette.neutral200
              }
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="account-circle"
              size={24}
              color={
                focused ? colors.palette.neutral300 : colors.palette.neutral200
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
};

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
};

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
};
