import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colorTheme } from "../theme/globalSettting";
import { LinearGradient } from "expo-linear-gradient";

const MonthFilter = ({ month }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "baseline", gap: 8 }}>
      <AntDesign name="left" size={12} color={colorTheme.grayBase} />
      <Text style={styles.text}>{month}</Text>
      <AntDesign name="right" size={12} color={colorTheme.grayBase} />
    </View>
  );
};

const SearchInput = () => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["rgba(255, 255, 255, 0.25)", "rgba(255, 255, 255, 0)"]} // Degradado del fondo de blanco opaco a rojo transparente
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 10,
          padding: 10,
        }}
      >
        <AntDesign name="search1" size={20} color={colorTheme.whiteBase} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <View style={styles.fullHeader}>
      <Image source={require("../assets/userProfile.png")} />
      <MonthFilter month={"Mayo"} />
      <SearchInput />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  fullHeader: {
    flexDirection: "row",
    paddingBottom: 24,
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    color: colorTheme.whiteBase,
    fontSize: 14,
    fontWeight: "bold",
  },
  gradient: {
    padding: 10,
    borderRadius: 10,
  },
});
