import React from 'react'
import TextComponent from './components/TextComponent'
import { SecondText, ThirdText } from './components/OtherComponents'
import Event from './components/Event'
import MyCSSComponent from './components/MyCSSComponent/MyCSSComponent'
import Counter from './components/Counter'
import ProductQuantity from './components/ProductQuantity'
import GithubUser from './components/GithubUser'

import './App.css'

function App() {
  return (
    // <> Is called a "fragment" tag, ideal for being the ultimate parent element for the app.
    <>
      {/* Github User */}
      <h2>Usuário do GitHub</h2>
      <GithubUser></GithubUser>
      
      {/* Contador */}
      <h1>Contador</h1>
      <Counter></Counter>
      <hr />

      {/* Controle de Quantidade do produto */}
      <h2>Controle de quantidade do produto</h2>
      <ProductQuantity></ProductQuantity>
      <hr />
      
      <h2>Meu componente css</h2>
      <MyCSSComponent></MyCSSComponent>
      <TextComponent text='Meu primeiro texto' descricao='Descrição do primeiro texto' />
      <SecondText text='Meu Segundo texto' descricao='Descrição do segundo texto' />
      <ThirdText text='Meu Terceiro texto' descricao='Descrição do terceiro texto' />
      <Event />



    </>
  )
}

export default App
