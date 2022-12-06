import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
  const repo: ClienteRepositorio = new ColecaoCliente()

  const {
    tabelaVisivel,
    formularioVisivel,
    exibirFormulario,
    exibirTabela  
  } = useTabelaOuForm()


  const [client, setClient] = useState<Cliente>(Cliente.vazio())

  const [clients, setClients] = useState<Cliente[]>()

  useEffect(obterTodos, [])
  
  
  function obterTodos(){
    repo.obterTodos()?.then((clientes) => {
      setClients(clientes)
      exibirTabela()
    })

  }

  function selecionarCliente(cliente: Cliente) {
    setClient(cliente)
    exibirFormulario()
  }


  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos()
    
  }

  function novoCliente(){
    setClient(Cliente.vazio());
    exibirFormulario()
  }

  return {
    client,
    clients,
    salvarCliente,
    novoCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    exibirTabela,
    tabelaVisivel,
    exibirFormulario,
    formularioVisivel
  }

}