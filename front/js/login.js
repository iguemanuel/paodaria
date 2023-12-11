"use strict";

const _URL = "http://localhost:3000";

const logarUsuario = async () => {
  console.log("Teste");

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const login = {
    email,
    senha,
  };

  try {
    const resposta = await fetch(`${_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const dado = await resposta.json();
    console.log(dado);

    if (dado.autenticado) {
      localStorage.setItem("autenticado", dado.autenticado);
      localStorage.setItem("usuario", JSON.stringify(dado.usuario));
      window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
      document.getElementById("message-error").innerText =
        "Usuario ou senha incorretos!";
    }
  } catch (erro) {
    console.error("Erro:", erro);
  }
};
