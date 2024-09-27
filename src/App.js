import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainLayout from './MainLayout/MainLayout';
import Dashboard from './View/Dashboard/Dashboard.jsx';
import Vendorstatus from './View/Vendorstatus/Vendorstatus.jsx';
import Completeddeed from './View/Completeddeed/Completeddeed.jsx';
import Ticket from './View/Ticket/Ticket.jsx';
import Vendortable from './View/Vendortable/Vendortable.jsx';
import Qctable from './View/Qctable/Qctable.jsx';
import Vendorassignment from './View/Vendorassignment/Vendorassignment.jsx';
import Assignmenttable from './View/Assignmenttable/Assignmenttable.jsx';
import Invoicerequest from './View/Invoicerequest/Invoicerequest.jsx';
import Payment from './View/Payment/Payment.jsx';
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
        <Route path='/invoicerequest' element={<Invoicerequest/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
