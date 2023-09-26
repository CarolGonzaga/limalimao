import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltro } from "./src/filtrosCatalogo";
import { inicializarCarrinho, renderizarProdutosCarrinho, atualizarPrecoCarrinho } from "./src/menuCarrinho";


renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltro();