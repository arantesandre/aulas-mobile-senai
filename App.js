import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CORES from "./comum/cosntantes/cores";

import TelaContador from "./telas/TelaContador/TelaContador";
import { NavigationContainer } from "@react-navigation/native";

//ESTILOS
const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.SECUNDARIA,
  },
});

export default function App() {
  return (
    <View style={estilos.todoApp}>
     
      <TelaContador />

      <StatusBar style="auto" />
    </View>
  );
}
