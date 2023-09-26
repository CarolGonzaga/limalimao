import { catalogo, formatarPreco, salvarLocalStorage, lerLocalStorage } from "./utilidades";

const idsProdutoCarrinhoComQtd = lerLocalStorage('carrinho') ?? {};

function abrirCarrinho() {
  document.getElementById('carrinho').classList.remove('right-[-360px]');
  document.getElementById('carrinho').classList.add('right-[0px]');
}

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('right-[0px]');
  document.getElementById('carrinho').classList.add('right-[-360px]');
}

function irParaCheckout() {
  if (Object.keys(idsProdutoCarrinhoComQtd).length === 0) {
    return;
  }
  window.location.href = './checkout.html';
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById('fechar-carrinho');
  const botaoAbrirCarrinho = document.getElementById('abrir-carrinho');
  const botaoIrParaCheckout = document.getElementById('finalizar-compra');

  botaoFecharCarrinho.addEventListener('click', fecharCarrinho);
  botaoAbrirCarrinho.addEventListener('click', abrirCarrinho);
  botaoIrParaCheckout.addEventListener('click', irParaCheckout);
}

function atualizarInformacaoQtd(idProduto) {
  document.getElementById(`qtd-${idProduto}`).innerText = idsProdutoCarrinhoComQtd[idProduto];
}

export function renderizarProdutosCarrinho() {
  const containerProdutosCarrinho = document.getElementById('produtos-carrinho');
  containerProdutosCarrinho.innerHTML = '';
  
  for (const idProduto in idsProdutoCarrinhoComQtd) {
    desenharProdutoNoCarrinho(idProduto);
  }
}

function removerDoCarrinho(idProduto) {
  delete idsProdutoCarrinhoComQtd[idProduto];
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtd);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function incrementarQtdProduto(idProduto) {
  idsProdutoCarrinhoComQtd[idProduto]++;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtd);
  atualizarPrecoCarrinho();
  atualizarInformacaoQtd(idProduto);
}

function decrementarQtdProduto(idProduto) {
  if (idsProdutoCarrinhoComQtd[idProduto] === 1) {
    removerDoCarrinho(idProduto);
    return;
  }
  idsProdutoCarrinhoComQtd[idProduto]--;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtd);
  atualizarPrecoCarrinho();
  atualizarInformacaoQtd(idProduto)
}

function desenharProdutoNoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.cod === idProduto);

  const containerProdutosCarrinho = document.getElementById('produtos-carrinho')

  const elementoArticle = document.createElement('article');
  const articleClasses = ['flex', 'bg-[#FAF1E4]', 'rounded-lg', 'relative'];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const cartaoProdutoCarrinho = `<button id="remover-item-${produto.cod}" class="absolute top-1 right-2">
          <i class="fa-solid fa-circle-xmark hover:text-lime-950"></i>
        </button>

        <img src="./assets/produtos/${produto.nomeArquivoImagem1}" alt="Carrinho: Foto do produto adicionado" class="h-24 border-4 border-white m-2">
        
        <div class="flex flex-col justify-between p-2">
          <div>
            <p class="text-sm font-medium">${produto.nome}</p>
            <p class="text-xs text-slate-400">Tamanho: P</p>
          </div>
          <p class="text-lg pt-5">${formatarPreco(produto.preco)}</p>
        </div>

          <div class="flex items-end gap-2 absolute bottom-2 right-5 text-lg">
            <button id="decrementar-produto-${produto.cod}">-</button>
            <p id="qtd-${produto.cod}">${idsProdutoCarrinhoComQtd[produto.cod]}</p>
            <button id="incrementar-produto-${produto.cod}">+</button>
          </div>`;

  elementoArticle.innerHTML = cartaoProdutoCarrinho;

  containerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`decrementar-produto-${produto.cod}`).addEventListener('click', () => decrementarQtdProduto(produto.cod));

  document.getElementById(`incrementar-produto-${produto.cod}`).addEventListener('click', () => incrementarQtdProduto(produto.cod));

  document.getElementById(`remover-item-${produto.cod}`).addEventListener('click', () => removerDoCarrinho(produto.cod))
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsProdutoCarrinhoComQtd) {
    incrementarQtdProduto(idProduto);
    return;
  }

  idsProdutoCarrinhoComQtd[idProduto] = 1;
  salvarLocalStorage('carrinho', idsProdutoCarrinhoComQtd);
  desenharProdutoNoCarrinho(idProduto);
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById('preco-total');
  let precoTotalCarrinho = 0;

  for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQtd) {
    precoTotalCarrinho += catalogo.find(p => p.cod == idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQtd[idProdutoNoCarrinho];
  }

  precoCarrinho.innerText = `Total: ${formatarPreco(precoTotalCarrinho)}`
}