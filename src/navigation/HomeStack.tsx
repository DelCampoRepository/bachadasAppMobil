import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen/screen/HomeScreen";
import { SincronizarScreen } from "../screens/SincronizarScreen/screen/SincronizarScreen";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeRoot" component={HomeScreen} />
      <Stack.Screen
        name="Sinc"
        component={SincronizarScreen}
        options={{
          headerShown: true,
          headerTitle: "Sincronizar",
          presentation: "modal"
        }}
      />
    </Stack.Navigator>
  );
};
