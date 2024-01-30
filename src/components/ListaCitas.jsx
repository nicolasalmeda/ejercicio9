import React from 'react'
import '../css/listCitas.css'

const ListaCitas = ({citas,onDelete}) => {
  return (
    <div className="lista-citas">
      <div className='subtitle'>
      <h4>Lista de Citas</h4>
      </div>
      <div className='cita-container'>

    {citas.length === 0 ? (
      <p>No hay citas disponibles</p>
      ) : (
        citas.map((cita) => (
          <div key={cita.id} className="cita-card">
              <div className='card-title'>
                <h3>{cita.nombre}</h3>
              </div>
            <div className='card-body'>
            <p>{`Fecha: ${cita.fecha}`}</p>
            <p>{`Hora: ${cita.hora}`}</p>
            <p>{`Dueño: ${cita.apellido}`}</p>
            <p>{`Síntomas: ${cita.sintomas}`}</p>
          </div>
          <div className='card-button'>
          <button className='button-cita' onClick={() => onDelete(cita.id)}>Eliminar</button>
          </div>
        </div>
      ))
      )}
      </div>
  </div>
  )
}

export default ListaCitas