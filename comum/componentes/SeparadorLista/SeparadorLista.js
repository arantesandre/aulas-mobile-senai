import { StyleSheet, View } from "react-native";
import CORES from "../../constantes/cores";

const estilos = StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: CORES.CINZA,
    marginTop: 12,
    marginBottom: 12,
  },
});

const SeparadorLista = () => {
  return <View style={estilos.container}></View>;
};

export default SeparadorLista;
