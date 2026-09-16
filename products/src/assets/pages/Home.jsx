import { Link } from "react-router-dom";

import { Card } from "../componentes/Card";
import { Formulario } from "../componentes/Formulario";


export function Home({
  produtos,
  form,
  setForm,
  enviarFormulario,
  remover,
  user,
  logoutUsuario
}) {

  return (

    <div className="min-h-screen bg-slate-100 p-6">

      {/* =========================
          MENU
      ========================= */}

      <nav className="flex items-center gap-4 mb-8">

        <Link
          to="/"
          className="font-semibold text-slate-800 hover:text-cyan-600"
        >
          Home
        </Link>

        <Link
          to="/login"
          className="font-semibold text-slate-800 hover:text-cyan-600"
        >
          Login
        </Link>

        <Link
          to="/cadastro"
          className="font-semibold text-slate-800 hover:text-cyan-600"
        >
          Cadastro
        </Link>

      </nav>


      {/* =========================
          USUÁRIO
      ========================= */}

      <div className="bg-blue-950 text-white p-4 rounded-xl mb-6">

        {user ? (

          <div className="flex items-center justify-between">

            <p>
              Usuário logado: {user.email}
            </p>

            <button
              onClick={logoutUsuario}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
            >
              Deslogar
            </button>

          </div>

        ) : (

          <div className="flex items-center justify-between">

            <p>
              Nenhum usuário logado
            </p>

            <Link
              to="/login"
              className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg"
            >
              Fazer Login
            </Link>

          </div>

        )}

      </div>


      {/* =========================
          TÍTULO
      ========================= */}

      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Gerenciamento de Produtos
      </h1>


      {/* =========================
          FORMULÁRIO
      ========================= */}

      <div className="max-w-2xl mx-auto mb-8">

        <Formulario
          setForm={setForm}
          form={form}
          enviarFormulario={enviarFormulario}
        />

      </div>


      {/* =========================
          LISTA DE PRODUTOS
      ========================= */}

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