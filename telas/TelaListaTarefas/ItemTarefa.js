import { Text, View } from "react-native";
import estilos from "./TelaListaTarefasStyle";
import FontAwesome from "@expo/vector-icons/AntDesign"
import CORES from "../../comum/cosntantes/cores";

const ItemTarefa = (props) => {
  // console.log(props);
  return (
    <View style={estilos.itemTarefa}>
      <Text style={estilos.descricaoTarefa}>{props.item.descricao}</Text>
      <FontAwesome onPress={() => {alert('Estou funcionando')}} name="delete" size={24} color={CORES.SECUNDARIA}/>
    </View>
  );
};

export default ItemTarefa;
