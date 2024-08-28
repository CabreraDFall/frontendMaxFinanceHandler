import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { colorTheme, sizeTheme } from "../theme/globalSettting";
import Ionicons from "@expo/vector-icons/Ionicons";

const CardAccount = () => {
  return (
    <>
      <LinearGradient
        colors={["rgba(58,23, 109, 0.8)", "rgba(255, 255, 255, 0)"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        style={{
          padding: 2,
          borderRadius: 12,
          marginVertical: 20,
          marginHorizontal: 30,
        }}
      >
        <LinearGradient
          colors={["rgba(58,23, 109, 0.8)", "rgba(255, 255, 255, 0)"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 12 }}
        >
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
                paddingBottom: 55,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: colorTheme.whiteBase,
                }}
              >
                LOGO
              </Text>
              <Text
                style={{
                  fontSize: sizeTheme.small,
                  color: colorTheme.whiteBase,
                  position: "absolute",
                  right: -40,
                  top: 8,
                }}
              >
                Cuenta 2/3
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: sizeTheme.small,
                  color: colorTheme.whiteBase,
                }}
              >
                Balance
              </Text>
              <Text
                style={{ fontSize: sizeTheme.h2, color: colorTheme.whiteBase }}
              >
                RD$ 25,000.00
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
              >
                <Ionicons
                  name="trending-up"
                  size={sizeTheme.h3}
                  color={colorTheme.sucess}
                />
                <Text
                  style={{
                    fontSize: sizeTheme.small,
                    color: colorTheme.whiteBase,
                  }}
                >
                  incremento 5% este mes
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
        <Image
          style={styles.imagebg}
          source={require("../assets/userCardUI.png")}
        />
      </LinearGradient>
    </>
  );
};

export default CardAccount;

const styles = StyleSheet.create({
  imagebg: {
    position: "absolute",
    bottom: -40,
    right: -60,
  },
});
