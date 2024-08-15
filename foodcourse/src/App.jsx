import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Breakfast from "./layout/Breakfast";
import Page from './pages/Page';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/ขาหมู" element={<Page />} />
        </Routes>
    </Router>
  )
}

export default App
