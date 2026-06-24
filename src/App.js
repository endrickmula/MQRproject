import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproduct from './components/Getproduct';
import Makepayment from './components/Makepayment';



function App() {
  return (
  <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <h1 className='text-success'>MQR4 - Buy & Sell online</h1>
        
      </header>
      {/* navigetion Link  */}
      <nav className='m-4'>
        <Link to="/" className='btn btn-dark mx-2'>Home</Link>  |
        <Link to="/addproduct" className='btn btn-dark mx-2'>Addproduct</Link>  |
        <Link to="signup" className='btn btn-dark mx-2'>Signup</Link> |
        <Link to="/signin" className='btn btn-dark mx-2'>Signin</Link>
      </nav>
      {/* Routes section  */}
      <Routes>
        {/* home or default page load when app opens  */}
        <Route path='/' element={<Getproduct/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/makepayment' element={<Makepayment/>} />
        
      </Routes>
      
    </div>
  </BrowserRouter>
  );
}

export default App;
