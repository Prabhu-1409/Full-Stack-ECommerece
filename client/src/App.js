import './App.css';
import Productadd from './Productadd';
import Gettingproduct from './Gettingproduct';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import { useContext, createContext } from 'react';
import Productdetails from './Productdetails';
import Categorypage from './Categorypage';
import Banneradvertise from './Banneradvertise';
import Slider from './Slider';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import Account from './Account';
import Navbar from './Navbar';
import Cart from './Cart';
import Example from './Example';

export const Usercontext = createContext()

function App() {
  const [userdata, setuserdata] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
      <Usercontext.Provider value={{userdata,setuserdata}}>
      <Routes>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/Home'element={<Home></Home>}></Route>
        <Route path='/navbar' element={<Navbar></Navbar>}></Route>
        <Route path='/Account' element={<Account></Account>}/>
        <Route path='/gettingproduct' element={<Gettingproduct></Gettingproduct>}/>
        <Route path='/productadd' element={<Productadd></Productadd>}/>
        <Route path='/banneradvertise' element={<Banneradvertise></Banneradvertise>}/>
        <Route path='/slider' element={<Slider></Slider>}/>
        <Route path='productdetails' element={<Productdetails></Productdetails>}/>
        <Route path='/productdetails/:productid' Component={Productdetails}></Route>
        <Route path='/category/:categoryname' Component={Categorypage}></Route>
      </Routes>
      </Usercontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
