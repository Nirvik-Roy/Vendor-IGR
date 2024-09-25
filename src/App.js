import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './MainLayout/MainLayout';
import Dashboard from './Dashboard/Dashboard';
import Vendorstatus from './Vendorstatus/Vendorstatus';
import Completeddeed from './Completeddeed/Completeddeed';
import Ticket from './Ticket/Ticket';
import Vendortable from './Vendortable/Vendortable';
import Qctable from './Qctable/Qctable';
import Vendorassignment from './Vendorassignment/Vendorassignment';
import Assignmenttable from './Assignmenttable/Assignmenttable';
function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/vendorstatus' element={<Vendorstatus/>}></Route>
        <Route path='/completeddeed' element={<Completeddeed/>}></Route>
        <Route path='/ticket' element={<Ticket/>}></Route>
        <Route path='/vendordetails' element={<Vendortable/>}></Route>
        <Route path='/qctable' element={<Qctable/>}></Route>
        <Route path='/vendorassignment' element={<Vendorassignment/>}></Route>
        <Route path='/assignmenttable' element={<Assignmenttable/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
