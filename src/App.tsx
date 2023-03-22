import { Index } from "./pages"
import { ComicPage } from "./pages/comic"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/comic/:id' element={<ComicPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
