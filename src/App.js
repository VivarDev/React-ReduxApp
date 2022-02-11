import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import Header from './components/Header';
import NewProduct from './components/NewProduct';
import Products from './components/Products';





function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Products />} />

          <Route exact path="/products/new" element={<NewProduct />} />

          <Route exact path="/products/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
