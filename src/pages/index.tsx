
import Button from "../components/Button";
import Form from "../components/Formulario";
import Layout from "../components/Layout";
import Table from "../components/Table";

import useClientes from "../hooks/useClientes";

export default function Home() {

  const {
      client, 
      clients, 
      selecionarCliente, 
      excluirCliente, 
      novoCliente,
      salvarCliente,
      tabelaVisivel,
      exibirTabela,
     
     } = useClientes();

  return (
    <div className={`
      flex justify-center items-center
      h-screen

      bg-gradient-to-r from-blue-500 to-purple-500

      text-white
    `}>
      <Layout title='Cadastro Simples'>
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Button
                color='green'
                className='mb-4'
                onClick={novoCliente}
              >
                Novo Cliente
              </Button>
            </div>

            <Table
              clientes={clients}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Form 
            cliente={client}
            canceled={exibirTabela}
            clientChanged={salvarCliente}
           />
        )}


      </Layout>
    </div>
  )
}
