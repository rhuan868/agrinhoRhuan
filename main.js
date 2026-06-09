// =========================
// BOTÃO SAIBA MAIS
// =========================

const btnSaibaMais = document.getElementById("btnSaibaMais");

btnSaibaMais.addEventListener("click", () => {
  document.getElementById("mensagem").innerHTML =
    "🌿 O Agro Forte acredita em um futuro sustentável para todas as lavouras!";
});

// =========================
// CONTROLE DE FONTE
// =========================

let tamanhoFonte = 100;

document.getElementById("aumentarFonte").addEventListener("click", () => {
  tamanhoFonte += 10;
  document.body.style.fontSize = tamanhoFonte + "%";
});

document.getElementById("diminuirFonte").addEventListener("click", () => {
  if (tamanhoFonte > 80) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
  }
});

// =========================
// MODO ESCURO / CLARO
// =========================

document.getElementById("alternarTema").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// =========================
// LEITURA POR VOZ
// =========================

let fala;

document.getElementById("lerPagina").addEventListener("click", () => {
  window.speechSynthesis.cancel();

  const texto = document.getElementById("conteudoPrincipal").innerText;

  fala = new SpeechSynthesisUtterance(texto);
  fala.lang = "pt-BR";
  fala.rate = 1;
  fala.pitch = 1;

  window.speechSynthesis.speak(fala);
});

// =========================
// PARAR LEITURA
// =========================

document.getElementById("pararLeitura").addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
// ==========================
// CONTROLE DE TAMANHO DA FONTE
// ==========================

let tamanhoFonte = 100;

const btnAumentar = document.getElementById("aumentarFonte");
const btnDiminuir = document.getElementById("diminuirFonte");

btnAumentar.addEventListener("click", () => {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
});

btnDiminuir.addEventListener("click", () => {
    if (tamanhoFonte > 80) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
});

// ==========================
// MODO CLARO / ESCURO
// ==========================

const btnTema = document.getElementById("alternarTema");

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        btnTema.textContent = "☀️ Modo Claro";
    }else{
        btnTema.textContent = "🌙 Modo Escuro";
    }

});