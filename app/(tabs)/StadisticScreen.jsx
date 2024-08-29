import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderSecundary from "../../components/HeaderSecundary";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import HeaderFilter from "../../utils/HeaderFilter";
import AccountFilter from "../../utils/AccountFilter";
import BarChart from "../../utils/BarChart";

const StadisticScreen = () => {
  return (
    <LinearGradient
      // Colores del degradado
      colors={["#1D0044", "#3E009F"]} // Puedes añadir más colores
      // Dirección del degradado (opcional)
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <View style={styles.headerContainer}>
          <HeaderSecundary />
        </View>
        <View style={styles.Container}>
          <HeaderFilter filter={"2024"} />
          <View style={{ paddingVertical: 20 }}>
            <AccountFilter />
          </View>
          <BarChart></BarChart>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StadisticScreen;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 25,
    paddingTop: 25,
    paddingBottom: 5,
  },
  Container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 25,
    padding: 25,
    flex: 1, // Esto hará que el View ocupe todo el espacio restante
  },
});
