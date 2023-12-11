const express = require("express");
const cors = require("cors");
const salvarDados = require("./salvarDados");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/cadastro", (req, res) => {
  const dadosRecebidos = req.body;
  const response = salvarDados.salvarNoArquivoJSON(
    "./dados.json",
    dadosRecebidos
  );
  res.send(response);
});

app.post("/login", (req, res) => {
  const dadosLogin = req.body;
  const dadosCadastrados = salvarDados.lerArquivoJSON("./dados.json");
  const [response] = dadosCadastrados.filter(
    (item) => item.email === dadosLogin.email && item.senha === dadosLogin.senha
  );
  const autenticado = response ? true : false;

  let usuario = { ...response };
  delete usuario.senha;

  res.send({ autenticado, usuario });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
