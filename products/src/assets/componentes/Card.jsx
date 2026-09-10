export function Card({ id, nome, valor, estoque,remover }) {
    const textColor = "text-amber-50";
  
    return (
        <div className="bg-cyan-700 p-4 rounded-lg shadow">
        <p className={textColor}>id: {id}</p>
        <p className={textColor}>nome: {nome}</p>
        <p className={textColor}>valor: {valor}</p>
        <p className={textColor}>estoque: {estoque}</p>
        <button onClick={()=>remover()}>X</button>
      </div>
    );
  }
  