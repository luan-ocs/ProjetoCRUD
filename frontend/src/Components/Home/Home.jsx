import React from "react";
import Main from "../Template/Main";
const application = (props) => (
  <Main icon="home" title="inicio" subtitle="Segundo Projeto de React">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">
      Sistema Desenvolvido para exemplificar a construção de um cadastro
      desenvolvido em react
    </p>
  </Main>
);

export default application;
