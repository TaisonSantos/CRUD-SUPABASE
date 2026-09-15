import { useState, useEffect } from "react";
import {
  buscarProdutos,
  removerProduto,
  cadastrarProduto
} from "./assets/services/produtosServices";
import { Card } from "./assets/componentes/Card";
import { Formulario } from "./assets/componentes/Formulario";
import {FormularioUser} from "./assets/componentes/FormularioUser"
import { supabase } from "./assets/supabaseClient";

function App() {
  const [produtos, setProdutos] = useState([]);
  const[form,setForm] = useState({
    nome: "",
    preco: "",
    estoque:"",
    imagem: ""
  })

  const [formUser,setFormUser] = useState({
    email:"",
    senha:""
  })


  const [user,setUsuario] = useState(null)
  
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

  async function cadastraUsuario(e){
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: formUser.email,
      password: formUser.senha
    });


  console.log(data);
  console.log(error);
  }

  async function logoutUsuario() {
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      console.log(error);
      return;
    }
  
    setUsuario(null);
  }


  async function loginUsuario(e){
    e.preventDefault();

    const {data,error} = await supabase.auth.signInWithPassword({
      email: formUser.email,
      password: formUser.senha
    })

    if (error) {
      console.log(error);
      return;
    }
    setUsuario(data.user)
    console.log(data);
  }



  useEffect(() => {
    async function verificarSessao() {
      const { data, error } = await supabase.auth.getSession();
  
      if (error) {
        console.log(error);
        return;
      }
  
      if (data.session) {
        setUsuario(data.session.user);
      }
    }
  
    verificarSessao();
  
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("EVENTO:", event);
  
        if (session) {
          setUsuario(session.user);
        } else {
          setUsuario(null);
        }
      }
    );
  
    fetchProdutos();
  
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-6">
  
      {/* Título */}
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Gerenciamento de Produtos
      </h1>
  
      {/* Formulário */}
      <div className="max-w-2xl mx-auto mb-8">
        <Formulario
          setForm={setForm}
          form={form}
          enviarFormulario={enviarFormulario}
          
          
        />
      </div>



      <div>
      <FormularioUser 
      form={formUser} 
      setFormUser={setFormUser}
      cadastraUsuario={cadastraUsuario}
      loginUsuario={loginUsuario} />
      
      </div>

      <div className="bg-blue-950 text-amber-50">
       
        {user? <p>Usuario logado: {user.email}</p>: <p>Nenhum usuario logado</p> }
        {user? <button onClick={logoutUsuario}>deslogar</button>:null}
      </div>
      {/* Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
