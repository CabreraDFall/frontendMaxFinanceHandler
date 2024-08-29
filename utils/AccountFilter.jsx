import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colorTheme, sizeTheme } from "../theme/globalSettting";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const AccountFilter = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          backgroundColor: colorTheme.whiteBase,
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          // Shadow for iOS
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          // Shadow for Android
          elevation: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="bank"
              size={sizeTheme.hBig}
              color="black"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: sizeTheme.h2,
                color: colorTheme.grayBase,
              }}
            >
              Todas Las cuentas
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "baseline", gap: 2 }}
            >
              <Text style={{ color: colorTheme.grayBase }}>Banco</Text>
              <Text
                style={{
                  fontSize: sizeTheme.small,
                  color: colorTheme.grayBase,
                }}
              >
                | RD$ 25000
              </Text>
            </View>
          </View>
        </View>
        <View>
          <AntDesign
            name="down"
            size={sizeTheme.h1}
            color={colorTheme.grayAlternative}
            style={{ top: 2 }}
          />
        </View>
      </View>
    </View>
  );
};

export default AccountFilter;

const styles = StyleSheet.create({});
