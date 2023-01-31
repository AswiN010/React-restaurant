import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import ViewRest from './components/ViewRest';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

<Router>
      <Header/>
        <Routes>
            {/*path setting for resturant lisst */}
            <Route path='/' element={ <Restaurentlist/>}/>
            {/*path setting for view rest*/}
            <Route path='/view-restaurant/:id' element={<ViewRest/>}/>
        </Routes>
      <Footer/>
</Router> 
    </div>
  );
}

export default App;
