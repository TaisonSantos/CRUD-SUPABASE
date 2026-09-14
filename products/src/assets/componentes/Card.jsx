export function Card({ id, nome, valor, estoque, remover, imagem }) {
  const textColor = "text-amber-50";

  return (
    <div className="bg-cyan-700 p-4 rounded-lg shadow  ">
      <div className="flex gap-4">
        <div>
          <img
            src={imagem}
            alt={nome}
            className="w-[150px] h-[150px] object-cover rounded"
          />
        </div>

        <div className="text-mist-50 p-1">
          <p>id: {id}</p>
          <p>nome: {nome}</p>
          <p>valor: {valor}</p>
          <p>estoque: {estoque}</p>
        </div>
      </div>

      <div className="flex p-1 w-full gap-2">
        <button
          className="bg-red-500 flex-1"
          onClick={remover}
        >
          X
        </button>

        <button className="bg-amber-300 flex-1">
          ALTERAR
        </button>
      </div>
      
    </div>
  );
}