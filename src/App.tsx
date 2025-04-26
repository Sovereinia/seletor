import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Selector from './pages/Selector'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seletor" element={<Selector />} />
    </Routes>
  )
}
