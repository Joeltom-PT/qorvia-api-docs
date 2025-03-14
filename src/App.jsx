import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import SwaggerDocs from './pages/SwaggerDocs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="api-reference" element={<SwaggerDocs />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
