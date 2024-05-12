import React from 'react'
import { Home } from './src/screens/Home'

const App: React.FC = () => (
  <Home
    beer={{
      name: 'Orange Sunshine',
      origin: 'Rio de Janeiro-RJ',
      price: 6,
      type: 'Double Sour IPA',
      brand: 'Hocus Pocus',
    }}
  />
)

export default App
