import { Index } from "./pages"
import { ComicPage } from "./pages/comic"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { NotFoundPage } from './pages/notFoundPage';
import { Buy } from './pages/buy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/comic/:id' element={<ComicPage />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
