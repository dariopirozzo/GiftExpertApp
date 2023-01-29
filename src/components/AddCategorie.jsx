import React from 'react'
import { useState } from 'react'

export const AddCategorie = ({onNewCategory}) => {

 const [inputValue, setInputValue] = useState('')

 const onInputChange = (e)=>{

  setInputValue(e.target.value)

 }

 const onSubmmitForm = (e)=>{
    e.preventDefault()

    if (inputValue.trim().length <= 1) return

    
    setInputValue('')
    onNewCategory( inputValue.trim() )
  }


  return (
    <form onSubmit={onSubmmitForm}>

      <input
          type="text"
          placeholder='buscar gifs'
          value={inputValue}
          onChange={ (e)=> onInputChange(e) }
      />

    </form>
  )
}
