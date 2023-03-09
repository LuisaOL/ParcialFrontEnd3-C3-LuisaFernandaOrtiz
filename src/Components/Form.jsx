import React, { useState } from 'react'
import Card from './Card'
import "./Form.css";

const Form = () => {

    const [user, setUser] = useState({
        nombre: '',
        ciudadResidencia:'',
        colorFavorito: ''
    })

    const [modal, setModal] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (user.nombre.length >= 3 && user.colorFavorito.length >= 6){
            setModal(true)
            setError(false)
        }else {
            setModal(false)
            setError(true)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='form'>
            <label className='label'>Nombre completo</label>
            <input type="text" className='input-container' value={user.nombre} required onChange={(e) => setUser({...user,nombre: e.target.value})}/>
            <label className='label'>Ciudad de Residencia</label>
            <input type="text" className='input-container' value={user.ciudadResidencia} required onChange={(e) => setUser({...user,ciudadResidencia: e.target.value})}/>
            <label className='label'>Color favorito</label>
            <input type="text" className='input-container' value={user.colorFavorito} required onChange={(e) => setUser({...user,colorFavorito: e.target.value})}/>
            <button className='submit-btn'> Enviar </button>
        </form>

        {error && 'Por favor chequea que la información sea correcta'}
        {modal && <Card nombre={user.nombre} ciudadResidencia={user.ciudadResidencia} colorFavorito={user.colorFavorito}/>}
    </div>
  )
}

export default Form
