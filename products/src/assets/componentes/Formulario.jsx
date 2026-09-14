export function Formulario({setForm,form,enviarFormulario}){
    return(
        <form action="#" className="p-3 m-1 bg-blue-400 text-amber-50 flex justify-center flex-col " onSubmit={enviarFormulario}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input onChange={(e)=>setForm((obj)=>({
                    ...obj,
                    nome:e.target.value
                }))} value={form.nome} type="text"/>
                
            </div>

            <div>
                <label htmlFor="preco">Valor:</label>
                <input onChange={(e)=>setForm((obj)=>({
                    ...obj,
                    preco:e.target.value
                }))} value={form.preco} type="number" name="preco" id="preco" />
            </div>

            <div>
                <label htmlFor="estoque">Estoque:</label>
                <input onChange={(e)=>setForm((obj)=>({
                    ...obj,
                    estoque:e.target.value
                }))} value={form.estoque}type="number" name="estoque" id="estoque" />
            </div>

            <div>
                <label htmlFor="imagem">Imagem:</label>

                <input
                    type="url"
                    name="imagem"
                    id="imagem"
                    value={form.imagem}
                    onChange={(e) =>
                    setForm((obj) => ({
                        ...obj,
                        imagem: e.target.value
                    }))
                    }
                    placeholder="https://site.com/imagem.jpg"
                />
            </div>

            <button type="submit" className="bg-emerald-500">CADASTRAR</button>
        </form>
    )
}