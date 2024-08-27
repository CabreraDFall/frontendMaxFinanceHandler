import { Stack, useRouter } from "expo-router";
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
import { colorTheme } from "../theme/globalSettting";

const LoginAlternative = ({ image, text }) => {
  return (
    <View style={styles.loginAlternative}>
      <Image source={image} />
      <Text style={styles.loginAlternativeText}>Iniciar sesión con {text}</Text>
    </View>
  );
};

const isAuthenticated = true;
const LoginScreen = () => {
  const router = useRouter();

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
            <FontAwesome5
              name="user-alt"
              size={20}
              color={colorTheme.grayBase}
            />
            <TextInput style={styles.input} placeholder="Nombre" />
            <MaterialIcons
              name="check-circle"
              size={12}
              color={colorTheme.grayBase}
              style={styles.before}
            />
          </View>
          <View style={styles.inputs}>
            <MaterialIcons name="lock" size={20} color={colorTheme.grayBase} />
            <TextInput style={styles.input} placeholder="Contraseña" />
            <Ionicons
              name="eye-off"
              size={12}
              color={colorTheme.grayBase}
              style={styles.before}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/HomeScreen")}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.lineCointainer}>
            <View style={styles.line} />
            <Text style={styles.textline}>o iniciar sesion con</Text>
            <View style={styles.line} />
          </View>
          <LoginAlternative
            image={require("../assets/devicon_google.png")}
            text={"Google"}
          />
          <LoginAlternative
            image={require("../assets/ic_baseline-apple.png")}
            text={"Apple"}
          />
          <LoginAlternative
            image={require("../assets/logos_facebook.png")}
            text={"Facebook"}
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontWeight: "bold",
              color: colorTheme.grayBase,
            }}
          >
            ¿No tienes cuenta?{" "}
            <Text style={{ color: colorTheme.primaryPurple }}>Registrarse</Text>
          </Text>
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
    color: "#013958",
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
    backgroundColor: colorTheme.primaryPurple,
    justifyContent: "center",
    alignContent: "center",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",

    alignItems: "center",
    marginBottom: 36,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginAlternative: {
    flexDirection: "row",
    paddingBottom: 20,
    gap: 20,
    alignItems: "center",
    paddingLeft: "15%",
  },
  loginAlternativeText: {
    color: colorTheme.grayBase,
  },

  lineCointainer: {
    flexDirection: "row",
    gap: 8,
    paddingBottom: 40,
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 0.3,
    backgroundColor: colorTheme.grayBase,
  },
  textline: {
    fontSize: 12,
    color: colorTheme.grayBase,
  },
});

export default LoginScreen;
