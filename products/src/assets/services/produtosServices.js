import { supabase } from "../supabaseClient";

export async function buscarProdutos() {
  const { data, error } = await supabase
    .from("Produtos")
    .select("*");

  return { data, error };
}

export async function removerProduto(id) {
  const { data, error } = await supabase
    .from("Produtos")
    .delete()
    .eq("id", id);

  return { data, error };
}


export async function cadastrarProduto({form}){
  const {data,error} = await supabase
  .from("Produtos")
  .insert({
    nome: form.nome,
    preco: Number(form.preco),
    estoque: Number(form.estoque),
    imagem: form.imagem,
    categoria:form.categoria
  })
  return { data, error };
}