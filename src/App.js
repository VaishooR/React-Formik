import './App.css';
import './assets/sb-admin-2.min.css';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Table from './components/Table';
import Createuser from './components/Createuser';
import Product from './components/Product';
import Createproduct from './components/Createproduct';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
          <div id="wrapper">
          <Sidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                  <Topbar/>
                        <div class="container-fluid">
                        <Routes>
                            <Route path="/" element={<Table/>}/>
                            <Route path="/table/view/:userid" element={<Createuser/>}/>
                            <Route path="/tables/createuser" element={<Createuser/>}/>
                            <Route path="/product" element={<Product/>}/>
                            <Route path="/product/createproduct" element={<Createproduct/>}/>
                        </Routes>
                        </div>
                  </div> 
              </div>     
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
