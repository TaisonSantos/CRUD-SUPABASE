export function Card({
  id,
  nome,
  valor,
  estoque,
  remover,
  imagem
}) {

  return (

    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-4 hover:shadow-lg transition">

      <div className="flex gap-4 items-center">

        {/* IMAGEM */}

        <div className="w-[90px] h-[90px] flex items-center justify-center bg-slate-100 rounded-lg overflow-hidden shrink-0">

          <img
            src={imagem}
            alt={nome}
            className="max-w-[70px] max-h-[70px] object-contain"
          />

        </div>


        {/* INFORMAÇÕES */}

        <div className="flex-1">

          <p className="text-xs text-slate-400">
            ID: {id}
          </p>

          <h3 className="text-lg font-semibold text-slate-800">
            {nome}
          </h3>

          <p className="text-emerald-600 font-bold">
            R$ {valor}
          </p>

          <p className="text-sm text-slate-500">
            Estoque: {estoque} unidades
          </p>

        </div>

      </div>


      {/* BOTÕES */}

      <div className="flex gap-2 mt-4">

        <button
          onClick={remover}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition"
        >
          Excluir
        </button>

        <button
          className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-800 font-medium py-2 rounded-lg transition"
        >
          Alterar
        </button>

      </div>

    </div>

  );
}