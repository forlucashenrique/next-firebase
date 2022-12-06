import { useState } from "react";
import Cliente from "../../core/Cliente";
import Button from "../Button";
import Input from "../Input";


interface formProps {
  cliente: Cliente,
  canceled?: () => void,
  clientChanged?: (cliente: Cliente) => void
}

export default function Form(props: formProps){

  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)


  const id = props.cliente?.id

  return (
    <div>
        {
          id ? (
            <Input 
              text='Código' 
              value={id}
              readonly
              className='mb-5'
            />
          ) : false
        }
        <Input 
          text='Nome'
          value={nome}
          onChange={setNome}
          className='mb-5'
        />
        <Input 
          text='Idade'
          value={idade}
          type="number"
          onChange={setIdade}
        />
        <div className="flex justify-end mt-7">
          <Button 
            color='gray'
            className="mr-2"
            onClick={() => props.clientChanged?.(new Cliente(nome, Number(idade), id))}
          >
            {id ? 'Alterar' : 'Salvar'}
          </Button>
          <Button 
            onClick={props.canceled}
          >
            Cancelar 
          </Button>
        </div>
    </div>
  )
}