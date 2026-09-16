export function Formulario({
  setForm,
  form,
  enviarFormulario
}) {

  return (

    <form
      onSubmit={enviarFormulario}
      className="bg-white p-6 rounded-xl shadow-md border border-slate-200"
    >

      <h2 className="text-xl font-semibold text-slate-800 mb-5">
        Cadastrar produto
      </h2>


      <div className="space-y-4">

        {/* NOME */}

        <div>

          <label
            htmlFor="nome"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Nome
          </label>

          <input
            id="nome"
            type="text"
            value={form.nome}
            onChange={(e) =>
              setForm((obj) => ({
                ...obj,
                nome: e.target.value
              }))
            }
            className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nome do produto"
          />

        </div>


        {/* PREÇO + ESTOQUE */}

        <div className="grid grid-cols-2 gap-4">

          <div>

            <label
              htmlFor="preco"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Preço
            </label>

            <input
              id="preco"
              type="number"
              value={form.preco}
              onChange={(e) =>
                setForm((obj) => ({
                  ...obj,
                  preco: e.target.value
                }))
              }
              className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="R$ 0,00"
            />

          </div>


          <div>

            <label
              htmlFor="estoque"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Estoque
            </label>

            <input
              id="estoque"
              type="number"
              value={form.estoque}
              onChange={(e) =>
                setForm((obj) => ({
                  ...obj,
                  estoque: e.target.value
                }))
              }
              className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Quantidade"
            />

          </div>

        </div>


        {/* IMAGEM */}

        <div>

          <label
            htmlFor="imagem"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            URL da imagem
          </label>

          <input
            id="imagem"
            type="url"
            value={form.imagem}
            onChange={(e) =>
              setForm((obj) => ({
                ...obj,
                imagem: e.target.value
              }))
            }
            className="w-full border border-slate-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="https://site.com/imagem.jpg"
          />

        </div>


        {/* BOTÃO */}

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg transition"
        >
          CADASTRAR PRODUTO
        </button>

      </div>

    </form>

  );
}