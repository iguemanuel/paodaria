"use strict";

const _URL = "http://localhost:3000";

const preencherCepAutomatico = (endereco) => {
  document.getElementById("endereco").value = endereco.logradouro;
  document.getElementById("bairro").value = endereco.bairro;
  document.getElementById("cidade").value = endereco.localidade;
  document.getElementById("estado").value = endereco.uf;
};

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
  const cep = document.getElementById("cep").value.replace("-", "");
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)) {
    const dados = await fetch(url);
    const endereco = await dados.json();
    console.log(endereco);
    if (endereco.hasOwnProperty("erro")) {
      return alert("CEP não encontrado!");
    } else {
      preencherCepAutomatico(endereco);
    }
  } else {
    alert("CEP invalido!");
  }
};

const enviarCadastro = async (event) => {
  console.log("Cadastro");

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const cep = document.getElementById("cep").value;
  const endereco = document.getElementById("endereco").value;
  const numero = document.getElementById("numero").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;

  const dadosCadastro = {
    nome,
    email,
    senha,
    cep,
    endereco,
    numero,
    bairro,
    cidade,
    estado,
  };

  try {
    const resposta = await fetch(`${_URL}/cadastro`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosCadastro),
    });

    if (resposta.ok) {
      console.log("Cadastro enviado com sucesso!");
    } else {
      console.error("Erro ao enviar o cadastro!");
    }
  } catch (erro) {
    console.error("Erro:", erro);
  }
};
