import React from "react";
import MeusDados from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";

function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <h1>Meus Dados</h1>

      {/* Componente MeusDados com props */}
      <MeusDados
        nome="Francisco Rafael Lobo Pinho"
        curso="Engenharia de Software"
        universidade="UFC Quixada"
      />

      {/* Título da seção de temperatura */}
      <h1>Temperatura</h1>

      {/* Componente Temperatura */}
      <Temperatura />
    </div>
  );
}

export default App;
