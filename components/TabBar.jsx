import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const TabBar = ({ state, descriptors, navigation }) => {
  const icons = {
    index: (props) => (
      <Entypo name="home" size={24} color={"black"} {...props} />
    ),
    favorite: (props) => (
      <Entypo name="heart" size={24} color={"black"} {...props} />
    ),
    order: (props) => (
      <AntDesign name="book" size={24} color={"black"} {...props} />
    ),
    profile: (props) => (
      <FontAwesome6 name="user-large" size={24} color={"black"} {...props} />
    ),
    item: (props) => (
      <FontAwesome6 name="user-large" size={24} color={"black"} {...props} />
    ),
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Determinar el estilo según el índice del elemento
        const itemStyle =
          index === 2
            ? styles.circularItem // Estilo circular para el tercer ítem
            : styles.squareItem; // Estilo cuadrado para los demás

        return (
          <TouchableOpacity
            key={route.name}
            style={[
              styles.tabBarItem,
              itemStyle,
              (index === 0 || index === 1 || index === 3 || index === 4) && {
                flex: 1,
              }, // Expandir los ítems que son cuadros
            ]}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    gap: 5,
  },
  tabBarItem: {
    justifyContent: "center", // Centrar el contenido verticalmente
    alignItems: "center", // Centrar el contenido horizontalmente
  },
  squareItem: {
    backgroundColor: "white", // Fondo blanco para los cuadros
    padding: 10,
    borderRadius: 10, // Bordes redondeados para los cuadros
  },
  circularItem: {
    width: 60, // Ajusta el tamaño según sea necesario
    height: 60,
    borderRadius: 30, // Hace el ítem circular
    backgroundColor: "white", // Color de fondo del círculo
    justifyContent: "center", // Centrar el contenido verticalmente
    alignItems: "center", // Centrar el contenido horizontalmente
  },
});

export default TabBar;
