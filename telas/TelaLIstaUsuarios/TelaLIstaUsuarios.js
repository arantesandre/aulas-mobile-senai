import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import ListagemVazia from "../../comum/componentes/ListagemVazia/ListagemVazia";
import SeparadorLista from "../../comum/componentes/SeparadorLista/SeparadorLista";
import api from "../../comum/servicos/api";
import ItemLIstaUsuarios from "./ItemListaUsuarios";
import TELAS from "../../comum/constantes/telas";

const TelaLIstaUsuarios = (props) => {
  const [usuarios, setUsuarios] = useState([]);

  console.log(props);

  useEffect(() => {
    const pegarUsuariosViaAPI = async () => {
      const response = await api.get("/usuarios");
      setUsuarios(response.data);
    };

    pegarUsuariosViaAPI();
  }, [props.route.params?.refresh]); // gambiarra para reatualizar a listagem ao voltar da edição

  return (
    <View style={{ padding: 16, gap: 16 }}>
      <Pressable
        onPress={() => props.navigation.navigate(TELAS.TELA_DETALHES_USUARIOS)}
      >
        <Text>Novo</Text>
      </Pressable>
      <FlatList
        data={usuarios}
        // renderItem={ItemListagemUsuarios}
        renderItem={(props) => <ItemLIstaUsuarios {...props} />}
        ListEmptyComponent={ListagemVazia}
        ItemSeparatorComponent={SeparadorLista}
        keyExtractor={(item) => item.id_usuarios}
      />
    </View>
  );
};

export default TelaLIstaUsuarios;
