import React from 'react'

const Card = ({nombre, ciudadResidencia, colorFavorito}) => {
  return (
    <div>
        <h2>Registro Exitoso</h2>
        <p>Nombre: {nombre}</p>
        <p>Ciudad de Residencia: {ciudadResidencia}</p>
        <p>Color Favorito: {colorFavorito}</p>
    </div>
  )
}

export default Card
