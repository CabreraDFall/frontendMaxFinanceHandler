import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Stack.Screen name="StadisticScreen" options={{ headerShown: false }} />
      <Stack.Screen name="NewAccount" options={{ headerShown: false }} />
      <Stack.Screen name="Balance" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default _layout;
