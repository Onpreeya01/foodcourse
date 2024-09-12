import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "./layout/MainLayout";
import Breakfast from "./layout/Breakfast";
import Page from './pages/Page';
import Content from './component/Content/Content';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/ขาหมู" element={<Page />} />
        </Routes>
    </Router>
  )
}

export default App
