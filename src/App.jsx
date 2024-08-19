import {useState, useEffect} from 'react'

// Importando os componentes

import Header from "./components/Header"
import Resultado from './components/Resultado'


function App() {

  //Hooks - useState - manipula o estado da variavel
  const[altura,setAltura]=useState(0)
  const[peso,setPeso]=useState(0)
  const [resultado, setResultado]=useState(0)
  const [mostrarresultado, setMostrarResultado]=useState(false)

  // criando a função calcularImc
  const calcularImc =()=>{
    const imc = peso / (altura * altura)
    return setResultado(imc.toFixed(2))
  }

  // Hooks - useEffect - vai executar uma ação - chamar o componente resultado

  useEffect(()=>{
    resultado > 0 ? setMostrarResultado(true): setMostrarResultado(false)
  },[resultado])

  

  return (
    <>
    <div className="container">

      <div className="box">
  <Header/>
  <form >
    <div>
      <label htmlFor="altura">Altura<span className='span'>(Ex. 1,80)</span></label>
      <input type='number' id='altura' placeholder='Altura' onBlur={({target})=>parseInt(setAltura(target.value))}/>
    </div>

    <div>
      <label htmlFor="peso">Peso<span className='span'>(Ex. 80)</span></label>
      <input type='number' id='peso' placeholder='Peso' onBlur={({target})=>parseInt(setPeso(target.value))}/>
    </div>

    <button type="submit" onClick={calcularImc}>Calcular</button>
  </form>

  {/* trazendo os dados de resultado desestruturação */}   
   {mostrarresultado &&  (
          <Resultado resultado={resultado}/>
        )}

      </div>

    </div>
    </>
  )
}

export default App
