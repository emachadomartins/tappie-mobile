import React from 'react'
import { Home } from './src/screens/Home'

const App: React.FC = () => (
  <Home beer={require('./example.json').beer} />
)

export default App
