export function FormularioUser({form,setFormUser,cadastraUsuario,loginUsuario}){
    return(
        <form action="#" className="bg-amber-300" onSubmit={cadastraUsuario}>
            <div>
                <label htmlFor="email">Email:</label>
                <input value={form.email} onChange={(e)=>setFormUser((obj)=>({
                    ...obj,
                    email: e.target.value
                }))} type="email" name="email" id="email" />
            </div>

            <div>
                <label htmlFor="senha">Senha:</label>
                <input value={form.senha} onChange={(e)=>setFormUser((obj)=>({
                    ...obj,
                    senha: e.target.value
                }))} type="password" name="senha" id="senha"/>
            </div>

            <div>
            <button type="submit">
            Cadastrar
            </button>
            <button type="button" onClick={loginUsuario}>LOGIN</button>
            </div>
        </form>
    );
}