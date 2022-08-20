import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import News from "./pages/News";
import About from "./pages/About";
import ScrollToTop from './components/ScrollTop/Index';
import Admin from './pages/Admin';


function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout> */}
      <Routes>
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
