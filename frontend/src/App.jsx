import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home";
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Footer from './components/Footer/Footer'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/a-propos" element={<About />} />
          </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  )
}

export default App