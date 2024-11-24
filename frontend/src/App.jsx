import { Dashboard } from './pages/dashboard.jsx'
import { Help } from './pages/help.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  )
}