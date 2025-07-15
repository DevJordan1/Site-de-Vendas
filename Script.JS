// script.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("Produtos");

  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.className = "produto";

    card.innerHTML = `
      <a href="${produto.link}" target="_blank" rel="noopener noreferrer">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
      </a>
    `;

    container.appendChild(card);
  });
});
