//relogio da home
function atualizarHora() {
  let data = new Date();
  let hora = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  document.getElementById("hora-atual").innerHTML = hora + ":" + minutos + ":" + segundos;
}
// Atualiza a hora a cada segundo
setInterval(atualizarHora, 1000);
