import { StyleSheet } from "react-native";
import CORES from "../../cosntantes/cores";
// import CORES from '../../comum/constantes/cores';

const campoTextoCustomizadoStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  campoTexto: {
    borderWidth: 1,
    borderColor: "black",
    height: 40,
    padding: 8,
    backgroundColor: CORES.BRANCA,
    borderRadius: 50,
  },
});

export default campoTextoCustomizadoStyle;
