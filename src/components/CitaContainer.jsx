import React, { useState, useEffect } from 'react';
import ListaCitas from './ListaCitas';

const CitaContainer = () => {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasLocalStorage = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(citasLocalStorage);
  }, [citas]);

  const handleDeleteCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
    localStorage.setItem('citas', JSON.stringify(nuevasCitas));
  }
  return (
    <div>
      <ListaCitas citas={citas} onDelete={handleDeleteCita} />
    </div>
  )
}


export default CitaContainer