import { Link } from "react-router-dom";



export function Login({
  form,
  setFormUser,
  loginUsuario
}) {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <form
        onSubmit={loginUsuario}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >

        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Entrar
        </h1>


        {/* EMAIL */}

        <div className="mb-4">

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email:
          </label>

          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={(e) =>
              setFormUser((obj) => ({
                ...obj,
                email: e.target.value
              }))
            }
            placeholder="exemplo@gmail.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-cyan-500
                       focus:border-cyan-500"
          />

        </div>


        {/* SENHA */}

        <div className="mb-6">

          <label
            htmlFor="senha"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Senha:
          </label>

          <input
            type="password"
            name="senha"
            id="senha"
            value={form.senha}
            onChange={(e) =>
              setFormUser((obj) => ({
                ...obj,
                senha: e.target.value
              }))
            }
            placeholder="Digite sua senha"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-cyan-500
                       focus:border-cyan-500"
          />

        </div>


        {/* LOGIN */}

       

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white font-semibold
                     py-2.5 rounded-lg hover:bg-cyan-700
                     transition active:scale-[0.98]"
        >
          Entrar
        </button>


        {/* CADASTRO */}

        <p className="text-center text-sm text-gray-500 mt-4">
          Ainda não possui uma conta?
        </p>

        <Link
          to="/cadastro"
          className="block w-full mt-2 text-center border border-cyan-600
                     text-cyan-600 font-semibold py-2.5 rounded-lg
                     hover:bg-cyan-50 transition"
        >
          Criar conta
        </Link>


        {/* VOLTAR */}

        <Link
          to="/"
          className="block text-center mt-4 text-sm text-gray-500 hover:text-cyan-600"
        >
          ← Voltar para Home
        </Link>

      </form>

    </div>

  );
}