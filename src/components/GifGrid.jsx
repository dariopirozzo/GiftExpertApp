import { useEffect, useState } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { getGifs } from "./getGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ({category}) => {

  const {images, isLoading}= useFetchGifs(category)
  console.log({images, isLoading})

  return (
    <>
      <h2>{category}</h2>
       <div className="card-grid">
          {
            isLoading 
            ? "cargando..."
            :
            images.map (image =>(
              <GifItem key={ image.id }
                       {...image}
              
              />
            ))
          }
       </div>
    </>
  )
}
