import { StyleSheet } from "react-native";
import CORES from "../../comum/cosntantes/cores";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemTarefa: {
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:'flex-end',
    backgroundColor: CORES.CINZA,
    padding: 20,
    margin: 8,
  },
  descricaoTarefa: {
    fontSize: 24,
    color: CORES.TEXTO_CLARO,
  },
  separadorListagem: {
    height: 8,
  },
  containerCampoAdicionar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    gap: 16,
  },
  campoAdicionar: {
    flex: 1,
  },
});

export default estilos;
