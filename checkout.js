import {desenharProdutoCarrinhoSimples, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage} from "./src/utilidades";

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQtd = lerLocalStorage('carrinho') ?? {};
    for (const idProduto in idsProdutoCarrinhoComQtd ){
        desenharProdutoCarrinhoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQtd[idProduto]);
    }
}

function finalizarCompra(evento) {
    evento.preventDefault();
    const idsProdutoCarrinhoComQtd = lerLocalStorage('carrinho') ?? {};
    if (Object.keys(idsProdutoCarrinhoComQtd).length === 0){
        return;
    }

    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido: idsProdutoCarrinhoComQtd,
    }
    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos];

    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    apagarDoLocalStorage('carrinho');

    window.location.href = './pedidos.html';
}

desenharProdutosCheckout();

document.addEventListener('submit', (evt) => finalizarCompra(evt));