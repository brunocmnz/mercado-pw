import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/paginas/Home";
import Container from "react-bootstrap/Container";
import ProdutoList from "./components/paginas/produto/ProdutoList";
import ProdutoIncluir from "./components/paginas/produto/ProdutoIncluir";
import ProdutoAlterar from "./components/paginas/produto/ProdutoAlterar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Container>
          <Header/>

          <Routes>
            <Route exact path="" element={<Home/>}  />

            <Route path="/produto" >
              <Route exact path="" element={<ProdutoList/>}  />
              <Route exact path="list" element={<ProdutoList/>}  />
              <Route exact path="incluir" element={<ProdutoIncluir/>}  />
              <Route exact path="alterar/:id" element={<ProdutoAlterar/>}  />
            </Route>

          </Routes>

        </Container>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
