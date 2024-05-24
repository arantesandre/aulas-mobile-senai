import { useState } from "react";
import { Text, View } from "react-native";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
import estilos from "./TelaLoginStyle";
import TELAS from "../../comum/constantes/telas";

import api from "../../comum/servicos/api";
import { atualizarItemStorage } from "../../comum/servicos/servicoStorage";
import { CHAVES_STORAGE } from "../../comum/constantes/chaves-storage";

const TelaLogin = (props) => {
  const [campoUsuario, setCampoUsuario] = useState("");
  const [campoSenha, setCampoSenha] = useState("");

  // const entrar = () => {
  //   if (campoUsuario.trim() && campoSenha.trim()) {
  //     // aqui vamos chamar a api do backend para validar login no futuro
  //     if (campoUsuario === "admin" && campoSenha === "admin") {
  //       // redireiconar para "dentro" do app
  //       props.navigation.navigate(TELAS.TELA_PRINCIPAL);
  //     } else {
  //       alert("Usuário ou senha inválida!");
  //     }
  //   } else {
  //     alert("Preencha os campos!");
  //   }
  // };

  const entrar = async () => {
    try {
      if (!campoUsuario.trim() || !campoSenha.trim()) {
        alert("Preencha os campos!");
        return;
      }

      const response = await api.post("/logar", {
        email: campoUsuario,
        senha: campoSenha,
      });

      await atualizarItemStorage(CHAVES_STORAGE.USUARIO_LOGADO, response.data);
      props.navigation.navigate(TELAS.TELA_PRINCIPAL);
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.containerTituloEntrar}>
        <Text style={estilos.tituloEntrar}>Entrar</Text>
      </View>
      <CampoTextoCustomizado
        label="E-mail"
        value={campoUsuario}
        onChangeText={setCampoUsuario}
      />
      <CampoTextoCustomizado
        label="Senha"
        value={campoSenha}
        onChangeText={setCampoSenha}
      />
      <BotaoCustomizado cor="primaria" onPress={entrar}>
        Entrar
      </BotaoCustomizado>
      <BotaoCustomizado
        onPress={() => {
          props.navigation.navigate(TELAS.TELA_NOVO_USUARIO);
        }}
      >
        Novo Cadastro
      </BotaoCustomizado>
    </View>
  );
};

export default TelaLogin;
