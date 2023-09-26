import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";
import { formatarPreco } from "./utilidades";

export function renderizarCatalogo() {

    for (const produtoCatalogo of catalogo) {
        const cartaoProduto = `<div class="border-solid w-48 m-2 flex flex-col p-2 justify-between bg-white shadow-lg rounded-sm group ${produtoCatalogo.menina ? 'Menina' : 'Menino'}" id="card-produto-${produtoCatalogo.cod}">
        <img src="./assets/produtos/${produtoCatalogo.nomeArquivoImagem1}" alt="Body Regata para Bebês" class="group-hover:scale-110 duration-300 rounded-sm">
        <p class="text-sm pt-4">${produtoCatalogo.nome}</p>
        <p class="text-xs">${produtoCatalogo.cor}</p>
        <p class="text-sm py-2">${formatarPreco(produtoCatalogo.preco)}</p>
        <button id="adicionar-${produtoCatalogo.cod}" class="bg-[#435334] text-slate-100 hover:bg-lime-950 p-1 rounded-sm">
        <i class="fa-solid fa-cart-plus"></i>
        </button>
        </div>`;

        document.getElementById('container-produto').innerHTML += cartaoProduto;
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.cod}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.cod))
    }
}