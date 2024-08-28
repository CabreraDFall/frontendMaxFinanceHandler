import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import CardAccount from "../../components/CardAccount";
import Historial from "../../components/Historial";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  return (
    <>
      <LinearGradient
        // Colores del degradado
        colors={["#1D0044", "#3E009F"]} // Puedes añadir más colores
        style={styles.gradient}
        // Dirección del degradado (opcional)
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
      >
        <StatusBar style="light" />
        <SafeAreaView>
          <View
            style={{ paddingHorizontal: 25, paddingTop: 25, paddingBottom: 5 }}
          >
            <Header />
            <CardAccount />
          </View>
          <View>
            <Historial />
          </View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  gradient: {},
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
