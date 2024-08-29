import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colorTheme, sizeTheme } from "../theme/globalSettting";

const HeaderFilter = ({ filter }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: sizeTheme.h3,
          fontWeight: "bold",
          color: colorTheme.grayBase,
        }}
      >
        Historial
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontSize: sizeTheme.h3, color: colorTheme.grayAlternative }}
        >
          {filter}
        </Text>
        <TouchableOpacity>
          <AntDesign
            name="down"
            size={sizeTheme.subText}
            color={colorTheme.grayAlternative}
            style={{ top: 2 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderFilter;

const styles = StyleSheet.create({});
