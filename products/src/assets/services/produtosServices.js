import { supabase } from '../supabaseClient'

export async function buscarProdutos(){
    const {data,error} = await supabase
    .from("Produtos")
    .select("*");

    return {data,error}
}


async function remover(id) {
    const { data, error } = await removerProduto(id);
  
    if (error) {
      console.error("Erro ao remover produto:", error);
      return;
    }
  
    await fetchProdutos();
  }