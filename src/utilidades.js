export const catalogo = [
    {
        cod: "1",
        nome: "Body Regata Balões",
        cor: "Rosa Claro",
        preco: 5.99,
        menina: true,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "2",
        nome: "Body Regata Panda",
        cor: "Rosa Claro",
        preco: 5.99,
        menina: true,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 1 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "3",
        nome: "Body Regata Coroas",
        cor: "Rosa Pink",
        preco: 5.99,
        menina: true,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 8 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "4",
        nome: "Body Regata Unicórnio",
        cor: "Rosa Claro",
        preco: 3.99,
        menina: true,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 1 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "5",
        nome: "Body Regata Unicórnio",
        cor: "Vermelho",
        preco: 5.99,
        menina: true,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 1 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "6",
        nome: "Body Regata Unicórnio",
        cor: "Branco",
        preco: 5.99,
        menina: true,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "29",
        nome: "Body Regata Space Fun",
        cor: "Azul Claro",
        preco: 5.99,
        menina: false,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "30",
        nome: "Body Regata Little Lion",
        cor: "Azul Claro",
        preco: 5.99,
        menina: false,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "31",
        nome: "Body Regata Super Pilot",
        cor: "Azul Claro",
        preco: 5.99,
        menina: false,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "32",
        nome: "Body Regata Skate",
        cor: "Azul Claro",
        preco: 5.99,
        menina: false,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },
    {
        cod: "33",
        nome: "Body Regata Pelúcias",
        cor: "Azul Claro",
        preco: 5.99,
        menina: false,
        composicao: '100% Algodão',
        gradeTamanhos: [
            { tamanho: "P", qtd: 6 },
            { tamanho: "M", qtd: 0 },
            { tamanho: "G", qtd: 0 }
        ]
    },

];

// Definindo nome da Imagem com base no cod
catalogo.forEach(produto => {
    produto.nomeArquivoImagem1 = `${produto.cod}.jpg`;
});

// Função para formatar o preço em moeda brasileira (Real)
export function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

 export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, qtdProduto) {
    const produto = catalogo.find((p) => p.cod === idProduto);
  
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);
  
    const elementoArticle = document.createElement('article');
    const articleClasses = ['flex', 'bg-[#CEDEBD]', 'rounded-lg', 'relative', 'mb-2', 'px-2', 'w-96'];
  
    for (const articleClass of articleClasses) {
      elementoArticle.classList.add(articleClass);
    }
  
    const cartaoProdutoCarrinho = `<img src="./assets/produtos/${produto.nomeArquivoImagem1}" alt="Carrinho: Foto do produto adicionado" class="h-20 m-2 border-2 border-white">
          
          <div class="flex flex-col justify-between p-2">
            <div>
              <p class="text-sm font-medium">${produto.nome}</p>
              <p class="text-xs text-slate-400">Tamanho: P</p>
            </div>
            <p class="text-lg pt-5">${formatarPreco(produto.preco)}</p>
          </div>
  
            <div class="flex items-end gap-2 absolute bottom-2 right-5 text-lg">
              <p id="qtd-${produto.cod}">${qtdProduto} <span class="text-xs">und</span></p>
            </div>`;
  
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
  }