import { Stack } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Button } from "react-native";

const isAuthenticated = true;
const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View>
          <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </View>
          <View>
            <Text style={styles.title}>Iniciar sesión</Text>
          </View>
          <View style={styles.inputs}>
            <FontAwesome5 name="user-alt" size={20} color="black" />
            <TextInput style={styles.input} placeholder="Nombre" />
            <MaterialIcons
              name="check-circle"
              size={12}
              color="black"
              style={styles.before}
            />
          </View>
          <View style={styles.inputs}>
            <MaterialIcons name="lock" size={20} color="black" />
            <TextInput style={styles.input} placeholder="Contraseña" />
            <Ionicons
              name="eye-off"
              size={12}
              color="black"
              style={styles.before}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>o iniciar sesion con</Text>

          <View style={styles.loginAlternative}>
            <Image source={require("../assets/devicon_google.png")} />
            <Text>Iniciar sesión con Google</Text>
          </View>
          <View style={styles.loginAlternative}>
            <Image source={require("../assets/devicon_google.png")} />
            <Text>Iniciar sesión con Google</Text>
          </View>
          <View style={styles.loginAlternative}>
            <Image source={require("../assets/devicon_google.png")} />
            <Text>Iniciar sesión con Google</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputs: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginBottom: 40,
    position: "relative",
  },
  input: {
    width: "90%",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  before: {
    position: "absolute",
    right: 0,
  },
  button: {
    backgroundColor: "#3E009F",
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  loginAlternative: {
    flexDirection: "row",
    paddingBottom: 20,
    gap: 20,
    justifyContent: "center",
  },
});

export default HomeScreen;
