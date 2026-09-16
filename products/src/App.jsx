import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./assets/pages/Home";
import { Login } from "./assets/pages/Login";
import { Cadastro } from "./assets/pages/Cadastro";

import {
  buscarProdutos,
  removerProduto,
  cadastrarProduto
} from "./assets/services/produtosServices";

import { supabase } from "./assets/supabaseClient";


function App() {

  // ========================================
  // ESTADOS DOS PRODUTOS
  // ========================================

  const [produtos, setProdutos] = useState([]);

  const [form, setForm] = useState({
    nome: "",
    preco: "",
    estoque: "",
    imagem: ""
  });


  // ========================================
  // ESTADOS DO USUÁRIO
  // ========================================

  const [formUser, setFormUser] = useState({
    email: "",
    senha: ""
  });

  const [user, setUsuario] = useState(null);


  // ========================================
  // BUSCAR PRODUTOS
  // ========================================

  async function fetchProdutos() {

    const { data, error } = await buscarProdutos();

    if (error) {
      console.error("Erro ao buscar produtos:", error);
      return;
    }

    setProdutos(data);
  }


  // ========================================
  // REMOVER PRODUTO
  // ========================================

  async function remover(id) {

    console.log("ID que vou remover:", id);

    const { data, error } = await removerProduto(id);

    console.log("DELETE:", {
      data,
      error
    });

    if (error) {
      console.error("Erro ao remover produto:", error);
      return;
    }

    // Atualiza a lista depois de remover
    await fetchProdutos();
  }


  // ========================================
  // CADASTRAR PRODUTO
  // ========================================

  async function enviarFormulario(e) {

    e.preventDefault();

    const { data, error } = await cadastrarProduto({
      form
    });

    if (error) {
      console.error("Erro ao cadastrar produto:", error);
      return;
    }

    console.log("Produto cadastrado:", data);

    // Limpa o formulário
    setForm({
      nome: "",
      preco: "",
      estoque: "",
      imagem: ""
    });

    // Atualiza a lista
    await fetchProdutos();
  }


  // ========================================
  // CADASTRAR USUÁRIO
  // ========================================

  async function cadastraUsuario(e) {

    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: formUser.email,
      password: formUser.senha
    });

    console.log("Cadastro:", data);
    console.log("Erro:", error);

    if (error) {
      console.error("Erro ao cadastrar usuário:", error);
      return;
    }

    // Limpa o formulário
    setFormUser({
      email: "",
      senha: ""
    });
  }


  // ========================================
  // LOGIN
  // ========================================

  async function loginUsuario(e) {

    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formUser.email,
      password: formUser.senha
    });

    if (error) {
      console.error("Erro no login:", error);
      return;
    }

    console.log("Usuário logado:", data.user);

    setUsuario(data.user);
  }


  // ========================================
  // LOGOUT
  // ========================================

  async function logoutUsuario() {

    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erro ao deslogar:", error);
      return;
    }

    setUsuario(null);
  }


  // ========================================
  // VERIFICAR SESSÃO
  // ========================================

  useEffect(() => {

    async function verificarSessao() {

      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Erro ao verificar sessão:", error);
        return;
      }

      if (data.session) {

        setUsuario(data.session.user);

      } else {

        setUsuario(null);
      }
    }


    // Verifica se já existe usuário logado
    verificarSessao();


    // Observa mudanças na autenticação
    const {
      data: listener
    } = supabase.auth.onAuthStateChange(
      (event, session) => {

        console.log("EVENTO:", event);
        console.log("SESSION:", session);

        if (session) {

          setUsuario(session.user);

        } else {

          setUsuario(null);
        }
      }
    );


    // Busca os produtos quando o App inicia
    fetchProdutos();


    // Limpeza do listener
    return () => {

      listener.subscription.unsubscribe();

    };

  }, []);


  // ========================================
  // ROTAS
  // ========================================

  return (

    <Routes>

      {/* HOME */}

      <Route
        path="/"
        element={
          <Home
            produtos={produtos}
            form={form}
            setForm={setForm}
            enviarFormulario={enviarFormulario}
            remover={remover}
            user={user}
            logoutUsuario={logoutUsuario}
          />
        }
      />


      {/* LOGIN */}

      <Route
        path="/login"
        element={
          <Login
            form={formUser}
            setFormUser={setFormUser}
            loginUsuario={loginUsuario}
          />
        }
      />


      {/* CADASTRO */}

      <Route
        path="/cadastro"
        element={
          <Cadastro
            form={formUser}
            setFormUser={setFormUser}
            cadastraUsuario={cadastraUsuario}
          />
        }
      />


      {/* PÁGINA NÃO ENCONTRADA */}

      <Route
        path="*"
        element={
          <h1>
            Página não encontrada
          </h1>
        }
      />

    </Routes>
  );
}


export default App;