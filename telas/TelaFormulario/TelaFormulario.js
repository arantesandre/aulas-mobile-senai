import React from "react";
import { Switch, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import CampoTextoCustomizado from "../../comum/componentes/CampoTextoCustomizado/CampoTextoCustomizado";
// import CORES from "../../comum/cosntantes/cores";

import { estilos, pickerSelectStyles } from "./TelaFormularioStyle";

import FontAwesome from "@expo/vector-icons/FontAwesome";
// https://oblador.github.io/react-native-vector-icons/

const TelaFormulario = () => {
  const [campoNome, setCampoNome] = React.useState("");
  const [campoSobrenome, setCampoSobrenome] = React.useState("");
  const [campoCPF, setcampoCPF] = React.useState("");
  const [campoAceitaTermos, setCampoAceitaTermos] = React.useState(false);
  const [campoEsporte, setCampoEsporte] = React.useState("");

  const salvar = () => {
    console.log("Salvar:", {
      campoNome,
      campoSobrenome,
      campoCPF,
      campoAceitaTermos,
      campoEsporte,
    });
  };

  return (
    <View style={estilos.container}>
      <View style={{ alignSelf: "center" }}>
        <FontAwesome
          name="file-text-o"
          style={{ fontSize: 48, color: "gray" }}
        />
      </View>

      <CampoTextoCustomizado
        label="Nome"
        value={campoNome}
        onChangeText={setCampoNome}
      />
      <CampoTextoCustomizado
        label="Sobrenome"
        value={campoSobrenome}
        onChangeText={setCampoSobrenome}
      />
      <CampoTextoCustomizado
        label="CPF"
        inputMode="numeric"
        value={campoCPF}
        onChangeText={setcampoCPF}
      />

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={campoAceitaTermos ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={setCampoAceitaTermos}
        value={campoAceitaTermos}
      />

      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={setCampoEsporte}
        value={campoEsporte}
        items={[
          { label: "Futebol", value: "1" },
          { label: "Baseball", value: "2" },
          { label: "Volei", value: "3" },
          { label: "Surf", value: "4" },
          { label: "Sakate", value: "5" },
        ]}
        placeholder={{ label: "Selecione um Esporte", value: undefined }}
      />

      <BotaoCustomizado onPress={salvar}>Salvar</BotaoCustomizado>
    </View>
  );
};

export default TelaFormulario;
