import React from 'react'
import {useForm} from 'react-hook-form'
import '../css/formulario.css'

const Formulario = () => {
  console.log('formulario')
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if(data.nombre && data.apellido && data.fecha && data.hora && data.sintomas){
      const citasLocalStorage = JSON.parse(localStorage.getItem('citas')) || [];
      const nuevaCita = { id: Date.now(), ...data };
      const nuevasCitas = [...citasLocalStorage, nuevaCita];
      localStorage.setItem('citas', JSON.stringify(nuevasCitas));
      alert("Cita creada correctamente")
    }else{
      alert('Complete todos los campos')
    }
  }
  return (
    <div className='container-formulario'>
      <div className='subtitle'>
        <h4>Llenar formulario para crear una cita</h4>
      </div>
       <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <label>
          Nombre de mascota:
          <input type="text" {...register("nombre",{ required: true })} />
          {errors.nombre && <span>Este campo es obligatorio</span>}
        </label>
        <label>
          Nombre de dueño:
          <input type="text"  {...register("apellido",{ required: true })} />
          {errors.apellido && <span>Este campo es obligatorio</span>}
        </label>
        
        <div className='fechayhora'>
        <label>
          Fecha:
          <input placeholder='dd/mm/aaa' {...register("fecha",{ required: true })} />
          {errors.dni && <span>Este campo es obligatorio</span>}
        </label>
        
        <label>
          Hora:
          <input placeholder='hh:mm' {...register("hora",{ required: true, minLength:5, maxLength:50 })} />
          {errors.email && <span>Este campo es obligatorio</span>}
        </label>
        </div>

        <label>
          Sintomas:
          <input {...register("sintomas",{ required: true })} />
          {errors.dni && <span>Este campo es obligatorio</span>}
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}


export default Formulario