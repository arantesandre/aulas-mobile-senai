import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CORES from "../../comum/cosntantes/cores";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";

//ESTILOS
const estilos = StyleSheet.create({
  tudoTelaContador: {
    flex: 1,
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

const TelaContador = () => {
  const [contador, setContador] = React.useState(0);

  return (
    <View style={estilos.tudoTelaContador}>
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
    </View>
  );
};

export default TelaContador;
