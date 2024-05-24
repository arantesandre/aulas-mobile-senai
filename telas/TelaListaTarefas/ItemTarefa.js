import { Text, View } from "react-native";
import estilos from "./TelaListaTarefasStyle";
import FontAwesome from "@expo/vector-icons/AntDesign"
import {atualizarItemStorage, pegarItemStorage} from '../../comum/servicos/servicoStorage';
import CORES from "../../comum/constantes/cores";
import { CHAVES_STORAGE } from "../../comum/constantes/chaves-storage";

const ItemTarefa = (props) => {
  // console.log(props);

  const removerItem = async () => {
    const itensDoStorage = await pegarItemStorage(CHAVES_STORAGE.LISTA_TAREFAS);
    itensDoStorage.splice(props.index, 1);
    await atualizarItemStorage(CHAVES_STORAGE.LISTA_TAREFAS, [...itensDoStorage]);
    props.setListaTarefas([...itensDoStorage]);
  };

  return (
    <View style={estilos.itemTarefa}>
      <Text style={estilos.descricaoTarefa}>{props.item.descricao}</Text>
      <FontAwesome name="delete" size={24} color={CORES.SECUNDARIA} onPress={removerItem}/>
    </View>
  );
};

export default ItemTarefa;