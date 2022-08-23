import { MapPinLine } from 'phosphor-react'
import { FormContainer, BodyForm, GroupInput, HeaderForm } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@hookform/error-message'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../../context/Cart'
import { useEffect, useState } from 'react'
import axios from 'axios'

const schema = z.object({
  cep: z.string().min(8),
  street: z.string(),
  houseNum: z.string(),
  district: z.string(),
  complement: z.string(),
  city: z.string(),
  uf: z.string(),
})

type formDataCheckout = z.infer<typeof schema>

interface DataCep {
  bairro: string
  cep: string
  localidade: string
  logradouro: string
  uf: string
}
export function CheckoutForm() {
  const { createDataCheckout, clearCart } = useCartContext()

  const navigate = useNavigate()

  const formCycle = useForm<formDataCheckout>({
    resolver: zodResolver(schema),
  })

  const {
    watch,
    handleSubmit,
    reset,
    formState: { errors },
    register,
    setValue,
  } = formCycle
  const cep = watch('cep')

  const lengthCep = 9
  useEffect(() => {
    if (cep) {
      let cepMask = cep.replace(/D/g, '')
      cepMask = cepMask.replace(/^(\d{5})(\d)/, '$1-$2')

      if (cepMask.length === lengthCep) {
        fetch(`https://viacep.com.br/ws/${cepMask}/json/`)
          .then((resp) => resp.json())
          .then((data: DataCep) => {
            setValue('street', data.logradouro)
            setValue('district', data.bairro)
            setValue('city', data.localidade)
            setValue('uf', data.uf)
          })
      }
    }
  }, [cep, setValue])

  const handleSubmitDataCheckout = (data: formDataCheckout) => {
    createDataCheckout(data)
    reset()
    clearCart()
    navigate('/cart/success/')
  }
  return (
    <FormContainer
      id="checkout-form"
      onSubmit={handleSubmit(handleSubmitDataCheckout)}
    >
      <HeaderForm>
        <MapPinLine size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </HeaderForm>
      <BodyForm>
        <label id="cepfield">
          <input
            type="text"
            placeholder="CEP"
            required
            {...register('cep', { required: 'digite um cep' })}
          />
        </label>

        <label id="rua">
          <input
            type="text"
            required
            placeholder="Rua"
            {...register('street')}
          />
        </label>
        <GroupInput>
          <label>
            <input type="text" placeholder="Número" {...register('houseNum')} />
          </label>
          <label>
            <input
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </label>
        </GroupInput>
        <GroupInput>
          <label>
            <input type="text" placeholder="Bairro" {...register('district')} />
          </label>
          <label>
            <input
              type="text"
              placeholder="Cidade"
              required
              {...register('city')}
            />
          </label>
          <label>
            <input type="text" placeholder="UF" required {...register('uf')} />
          </label>
        </GroupInput>
      </BodyForm>
    </FormContainer>
  )
}
