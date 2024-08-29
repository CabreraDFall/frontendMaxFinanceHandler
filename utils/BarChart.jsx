import { Text, View } from "react-native";
import { Bar, BarGroup, CartesianChart } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import inter from "../fonts/inter-medium.ttf";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colorTheme, sizeTheme } from "../theme/globalSettting";

const MusicChart = () => {
  const font = useFont(inter, 10);
  const DATA = {
    leyendas: {
      mes: "Mes",
      ingresos: "Ingresos",
      gastos: "Gastos",
    },
    datos: [
      { mes: 1, ingresos: 50, gastos: 100 },
      { mes: 2, ingresos: 45, gastos: 35 },
      { mes: 3, ingresos: 50, gastos: 40 },
      { mes: 4, ingresos: 60, gastos: 55 },
      { mes: 5, ingresos: 70, gastos: 65 },
      { mes: 6, ingresos: 80, gastos: 75 },
    ],
  };

  return (
    <View style={{ height: 200 }}>
      <CartesianChart
        data={DATA.datos}
        xKey="mes"
        yKeys={["ingresos", "gastos"]}
        domainPadding={{ left: 50, right: 50, top: 30 }}
        axisOptions={{
          /**
           * 👇 Pass the font object to the axisOptions.
           * This will tell CartesianChart to render axis labels.
           */
          font,
          /**
           * 👇 We will also use the formatXLabel prop to format the month number
           * from a number to a month name.
           */
          formatXLabel: (value) => {
            const date = new Date(2023, value - 1);
            return date.toLocaleString("default", { month: "short" });
          },
        }}
      >
        {({ points, chartBounds }) => (
          <BarGroup
            chartBounds={chartBounds}
            betweenGroupPadding={0.3}
            withinGroupPadding={0.1}
            axisOptions
          >
            <BarGroup.Bar
              points={points.ingresos}
              color={colorTheme.chartGreen}
            />
            <BarGroup.Bar points={points.gastos} color={colorTheme.chartRed} />
          </BarGroup>
        )}
      </CartesianChart>
      <View
        style={{
          flexDirection: "row",
          gap: 4,

          justifyContent: "center",
        }}
      >
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <FontAwesome
            name="square"
            size={sizeTheme.h2}
            color={colorTheme.chartGreen}
          />
          <Text>{DATA.leyendas.ingresos}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
          <FontAwesome
            name="square"
            size={sizeTheme.h2}
            color={colorTheme.chartRed}
          />
          <Text>{DATA.leyendas.gastos}</Text>
        </View>
      </View>
    </View>
  );
};

export default MusicChart;
