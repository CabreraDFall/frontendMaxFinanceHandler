import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { colorTheme, sizeTheme } from "../theme/globalSettting";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import HeaderFilter from "../utils/HeaderFilter";

const { height } = Dimensions.get("window");
const data = [
  { id: 1, title: "Comida" },
  { id: 2, title: "Transporte" },
  { id: 3, title: "Combustible" },
  { id: 4, title: "Renta" },
  { id: 5, title: "Servicios Públicos" },
  { id: 6, title: "Internet" },
  { id: 7, title: "Teléfono" },
  { id: 8, title: "Educación" },
  { id: 9, title: "Salud" },
  { id: 10, title: "Entretenimiento" },
  { id: 11, title: "Ropa" },
  { id: 12, title: "Hogar" },
  { id: 13, title: "Gimnasio" },
  { id: 14, title: "Mascotas" },
  { id: 15, title: "Regalos" },
];

const TransactionData = [
  { id: "1", title: "Comida Fuera", amount: "RD$ -2,500", date: "27/05/29" },
  { id: "24", title: "Supermercado", amount: "RD$ -3,800", date: "22/05/29" },
  { id: "25", title: "Ropa", amount: -1200, date: "2029-05-18" },
  { id: "27", title: "Transporte Público", amount: -150, date: "2029-05-25" },
  {
    id: "23",
    title: "Suscripción Streaming",
    amount: -450,
    date: "2029-05-15",
  },
  {
    id: "22",
    title: "Suscripción Streaming",
    amount: -450,
    date: "2029-05-15",
  },
  {
    id: "21",
    title: "Suscripción Streaming",
    amount: -450,
    date: "2029-05-15",
  },
  {
    id: "20",
    title: "Suscripción Streaminga",
    amount: -450,
    date: "2029-05-15",
  },
  {
    id: "11",
    title: "Suscripción Streaminga",
    amount: -450,
    date: "2029-05-15",
  },
  { id: "121", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "122", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "123", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "124", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "1254", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "125", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "127", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "1255", title: "Internet", amount: -1500, date: "2029-06-05" },
  { id: "1259", title: "Internet1", amount: -1500, date: "2029-06-05" },
];

const ListItem = ({ title }) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemText}>{title}</Text>
  </View>
);

const CategoryTag = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => (
        <LinearGradient
          colors={["rgba(235, 235, 235, 0)", "rgba(235, 235, 235, 1)"]} // Degradado del fondo de blanco opaco a rojo transparente
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            marginHorizontal: 3,
            borderRadius: 6,
          }}
        >
          <ListItem title={item.title} />
        </LinearGradient>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

const Transaction = ({ data }) => {
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
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
          <MaterialIcons
            name="fastfood"
            size={24}
            color={colorTheme.grayBase}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: sizeTheme.h2,
              color: colorTheme.grayBase,
            }}
          >
            {item.title}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "baseline", gap: 2 }}
          >
            <Text style={{ color: colorTheme.danger }}>{item.amount}</Text>
            <Text
              style={{
                fontSize: sizeTheme.small,
                color: colorTheme.grayBase,
              }}
            >
              | {item.date}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Entypo
          name="dots-three-horizontal"
          size={18}
          color={colorTheme.grayBase}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

const Historial = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 20,
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <CategoryTag />
      </View>
      <View style={{ paddingHorizontal: 30, paddingVertical: 15 }}>
        <HeaderFilter filter={"Detalles"}></HeaderFilter>
        <View style={{ paddingBottom: 20, height: height * 0.6 }}>
          <Transaction data={TransactionData} />
        </View>
      </View>
    </View>
  );
};

export default Historial;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemText: {
    color: colorTheme.grayBase,
    fontSize: sizeTheme.subText,
  },
});
