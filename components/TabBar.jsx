import { View, Text, TouchableOpacity } from "react-native";
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
    <View style={{ flexDirection: "row" }}>
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

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
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

export default TabBar;
