import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BotaoCustomizado from "./comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CORES from "./comum/cosntantes/cores";

//ESTILOS
const estilos = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: CORES.SECUNDARIA,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
  },
  contador: {
    fontSize: 72,
    color: CORES.BRANCA,
  },
});

export default function App() {
  const [contador, setContador] = React.useState(0);

  return (
    <View style={estilos.tudo}>
      <BotaoCustomizado
        cor="secundaria"
        onPress={() => setContador(contador - 1)}
      >
        -
      </BotaoCustomizado>

      <Text style={estilos.contador}>{contador}</Text>

      <BotaoCustomizado
        cor="primaria"
        onPress={() => setContador(contador + 1)}
      >
        +
      </BotaoCustomizado>

      <StatusBar style="auto" />
    </View>
  );
}
