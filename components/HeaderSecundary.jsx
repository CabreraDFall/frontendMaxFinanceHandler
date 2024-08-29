import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colorTheme, sizeTheme } from "../theme/globalSettting";

import { useRouter } from "expo-router";

const HeaderSecundary = () => {
  const route = useRouter();

  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        gap: 110,
      }}
    >
      <TouchableOpacity onPress={() => route.back()}>
        <LinearGradient
          colors={["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0)"]} // Degradado del fondo de blanco opaco a rojo transparente
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            borderRadius: 10,
            padding: 10,
          }}
        >
          <AntDesign name="left" size={16} color={colorTheme.whiteBase} />
        </LinearGradient>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: sizeTheme.h2,
          fontWeight: "bold",
          color: colorTheme.whiteBase,
        }}
      >
        Estadistica
      </Text>
    </View>
  );
};

export default HeaderSecundary;

const styles = StyleSheet.create({});
