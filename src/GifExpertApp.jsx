import { useState } from "react"
import { AddCategorie } from "./components/AddCategorie"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

     const [categoria, setCategoria] = useState(['uno'])

     const addCategory = (newCategory)=>{

      if(categoria.includes(newCategory)) return
      
        setCategoria([...categoria, newCategory])

     }


  return (
    <>
    <div>GifExpertApp</div>

    <AddCategorie 
        onNewCategory = {(value)=> addCategory(value)}
    />
          {categoria.map((c)=>( 
          <GifGrid
           key={c} 
           category={c}
          />
          ))}

    </>
  )
}
