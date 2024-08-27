import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import CardAccount from "../components/CardAccount";

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
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <Header />
          <CardAccount />
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  gradient: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
