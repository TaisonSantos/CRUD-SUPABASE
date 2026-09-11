export function Formulario(){
    return(
        <form action="#">
            <div>
                <label htmlFor="nome">Nome:</label>
                <input value={nome} type="text"/>
            </div>

            <div>
                <label htmlFor="valor">Valor:</label>
                <input value={valor} type="number" name="valor" id="valor" />
            </div>
        </form>
    )
}