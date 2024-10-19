import { Dashboard } from './pages/dashboard.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}