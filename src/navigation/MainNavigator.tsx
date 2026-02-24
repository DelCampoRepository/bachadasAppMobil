import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, StyleSheet } from "react-native";

import { RecetasScreen } from "../screens/RecetasScreen/screen/RecetasScreen";
import { HomeStack } from "./HomeStack";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === "HomeTab") {
            iconSource = require("../assets/Home.png");
          } else if (route.name === "Recetas") {
            iconSource = require("../assets/List_View.png");
          }

          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={{
                  width: 40,
                  height: 40,
                  tintColor: focused ? "green" : "#8E8E93",
                  resizeMode: "contain"
                }}
              />
            </View>
          );
        },
        tabBarItemStyle: {
          height: 100,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        },
        tabBarStyle: {
          height: 110, // Un poco más alto para dar espacio a iconos de 40px
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e0e0e0",
          elevation: 10
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "700",
          marginBottom: 12
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "#8E8E93"
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="Recetas"
        component={RecetasScreen}
        options={{ title: "Recetas" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  }
});
