import { useState, useEffect } from "react";
import {
  buscarProdutos,
  removerProduto,
  cadastrarProduto
} from "./assets/services/produtosServices";
import { Card } from "./assets/componentes/Card";
import { Formulario } from "./assets/componentes/Formulario";

function App() {
  const [produtos, setProdutos] = useState([]);
  const[form,setForm] = useState({
    nome: "",
    preco: "",
    estoque:"",
    imagem: ""
  })
  
  async function remover(id) {
    console.log("ID que vou remover:", id);
  
    const { data, error } = await removerProduto(id);
  
    console.log("DELETE:", { data, error });
  
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

  async function enviarFormulario(e){
    e.preventDefault();

    const {data,error} = await cadastrarProduto({form})

    if (error) {
      console.error("Erro ao cadastrar:", error);
      return;
    }
  
    console.log("Cadastrado com sucesso:", data);
    
    setForm({
      nome: "",
      preco: "",
      estoque: "",
      imagem: ""
    });
  
    await fetchProdutos();
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div>
        <Formulario
        setForm={setForm}
        form={form}
        enviarFormulario={enviarFormulario}/>


        <div className="grid grid-cols-2 gap-3 p-1 m-1">
      {produtos.map((produto) => (
        <Card
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          valor={produto.preco}
          estoque={produto.estoque}
          imagem={produto.imagem}
          remover={() => remover(produto.id)}
        />
      ))}
    </div>
    </div>
    
  );
}

export default App;
