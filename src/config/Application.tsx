import { BrowserRouter, Route, Routes } from "react-router-dom"

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hellow reactJS</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Application
