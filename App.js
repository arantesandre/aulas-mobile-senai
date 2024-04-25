import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CORES from "./comum/cosntantes/cores";
import TELAS from "./comum/cosntantes/telas";
import TelaContador from "./telas/TelaContador/TelaContador";
import TelaPrincipal from "./telas/TelaPrincipal/TelaPrincipal";
import TelaFormulario from "./telas/TelaFormulario/TelaFormulario";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

//ESTILOS
const estilos = StyleSheet.create({
  todoApp: {
    flex: 1,
    backgroundColor: CORES.FUNDO_PADRAO,
  },
});

export default function App() {
  return (
    <View style={estilos.todoApp}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={TELAS.TELA_PRINCIPAL}
            component={TelaPrincipal}
            options={{ title: "Tela Principal" }}
          />
          <Stack.Screen
            name={TELAS.TELA_CONTADOR}
            component={TelaContador}
            options={{ title: "Tela Contador" }}
          />
          <Stack.Screen
            name={TELAS.TELA_FORMULARIO}
            component={TelaFormulario}
            options={{ title: "Tela Formulário" }}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}
