const fs = require("fs");

function lerArquivoJSON(caminhoArquivo) {
  try {
    const dados = fs.readFileSync(caminhoArquivo, "utf8");
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

function salvarNoArquivoJSON(caminhoArquivo, novosDados) {
  try {
    const dadosExistentes = lerArquivoJSON(caminhoArquivo);
    const dadosAtualizados = [...dadosExistentes, novosDados];

    fs.writeFileSync(caminhoArquivo, JSON.stringify(dadosAtualizados, null, 2));
    return { message: "Dados adicionados com sucesso!" };
  } catch (erro) {
    return { message: `Erro ao salvar dados: ${erro}` };
  }
}

module.exports.lerArquivoJSON = lerArquivoJSON;
module.exports.salvarNoArquivoJSON = salvarNoArquivoJSON;
