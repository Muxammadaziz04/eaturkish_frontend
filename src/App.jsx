import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element="<span />" />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )

}

export default App;
