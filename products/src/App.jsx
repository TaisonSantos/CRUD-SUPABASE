import { useState, useEffect } from "react";
import {
  buscarProdutos,
  removerProduto,
} from "./assets/services/produtosServices";
import { Card } from "./assets/componentes/Card";

function App() {
  const [produtos, setProdutos] = useState([]);

  async function remover(id) {
    const { data, error } = await removerProduto(id);

    if (error) {
      console.error("Erro ao remover produto:", error);
      return;
    }

    await fetchProdutos();
  }

  async function fetchProdutos() {
    const { data, error } = await buscarProdutos();

    if (error) {
      console.error("Erro ao buscar produtos:", error);
      return;
    }

    setProdutos(data);
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3 p-1 m-1">
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          valor={produto.valor}
          estoque={produto.estoque}
          remover={() => remover(produto.id)}
        />
      ))}
    </div>
  );
}

export default App;
