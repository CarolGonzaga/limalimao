const catalogoProdutos = document.getElementById('container-produto');

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'));

    for (const produto of produtosEscondidos) {
        produto.classList.remove('hidden');
    }
}

function esconderMeninos(){
    exibirTodos()
    const produtosMeninos = Array.from(catalogoProdutos.getElementsByClassName('Menino'));

    for(const produto of produtosMeninos) {
        produto.classList.add('hidden');
    }
}

function esconderMeninas(){
    exibirTodos()
    const produtosMeninas = Array.from(catalogoProdutos.getElementsByClassName('Menina'));

    for(const produto of produtosMeninas) {
        produto.classList.add('hidden');
    }
}

export function inicializarFiltro() {
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);

    document.getElementById('exibir-meninas').addEventListener('click', esconderMeninos);

    document.getElementById('exibir-meninos').addEventListener('click', esconderMeninas);
}