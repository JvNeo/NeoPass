var listaJogos = [
  "https://www.mobygames.com/images/covers/l/376858-the-elder-scrolls-v-skyrim-special-edition-xbox-one-front-cover.png",
  "https://images-na.ssl-images-amazon.com/images/I/A1lSovZRXgL.jpg",
  "https://store-images.s-microsoft.com/image/apps.15468.71301536751217683.f7ab9b81-2b8c-40dc-ab02-df21935e87ca.f131d7e9-7e4d-40f9-89bc-d636d72198d0",
  "https://store-images.s-microsoft.com/image/apps.61966.14229724971193324.2000000000007864596.5efc00e9-f8fa-48a3-89a2-60e31be565f4",
  "https://bdjogos.com.br/capas/8865-hades-pc-capa-1.jpg",
  "https://files.bastter.com/game/4f4b72cd-de6e-451f-a92d-9c23808ccff4.jpg"
];

for (var i = 0; i < listaJogos.length; i++) {
  document.write("<img src=" + listaJogos[i] + ">");
}

function adicionarJogo() {
  var campoJogoAdicionado = document.getElementById("jogo").value;
  var elementoJogoAdicionado = "<img src=" + campoJogoAdicionado + ">";
  var elementoListaJogo = document.getElementById("listaJogo");
  elementoListaJogo.innerHTML =
    elementoListaJogo.innerHTML + elementoJogoAdicionado;
  document.getElementById("jogo").value = "";
}