import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {StoreProvider} from './Providers/StoreProvider'
import LoginPage from './Pages/LoginPage'
import UserPage from './Pages/UserPage'
import KitchenPage from './Pages/KitchenPage'
import AdminPage from './Pages/AdminPage'
import HomePage from './Pages/HomePage'


function App() {
  return (
    <BrowserRouter>
    <StoreProvider>

      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/user">User</Nav.Link>
              <Nav.Link href="/kitchen">Kitchen</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
              {/* <Nav.Link href="/articles">Articles</Nav.Link>
              <Nav.Link href="/articles/categories">Categories</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
          <Routes>
            <Route path="/home" element={<HomePage/>} > </Route>
            <Route path="/login" element={<LoginPage/>} > </Route>
            <Route path="/user" element={<UserPage/>} > </Route>
            <Route path="/kitchen" element={<KitchenPage/>} > </Route>
            <Route path="/admin" element={<AdminPage/>} > </Route>
            {/* <Route path="/articles" element={<ArticlesPage/>} > </Route>
            <Route path="/articles/:id" element={<SingleArticlePage/>} > </Route>
            <Route path="/articles/categories" element={<CategoriesPage/>} > </Route> */}
          </Routes>
      

    </StoreProvider>
    </BrowserRouter>
  );
}

export default App;
