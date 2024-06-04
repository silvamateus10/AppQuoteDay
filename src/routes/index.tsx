import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../pages/Main";
import Detail from "../pages/Detail";

type RootStackParamList = {
  Main: undefined;
  Detail: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export type propsStack = typeof Stack;

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
