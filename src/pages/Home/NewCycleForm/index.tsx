import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export const NewCycleForm = () => {
  const { activeCycle, cycles } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task"> Vou trabalhar em </label>
      <TaskInput
        type="text"
        list="task-suggestion"
        placeholder="Dê um nome para o seu projeto"
        id="task"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        {cycles.map((cycle) => {
          return <option key={cycle.id} value={cycle.task} />
        })}
      </datalist>

      <label htmlFor="minutesAmount"> durante </label>
      <MinutesAmountInput
        type="number"
        placeholder="00"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
