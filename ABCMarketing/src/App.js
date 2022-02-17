import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header"
import Table from "./Components/Table";
import Create from "./Components/Create";
import Read from "./Components/Read";
import EditCustomer from "./Components/EditCustomer";
import EditContact from "./Components/EditContact";
import EditAddress from "./Components/EditAddress";
import CreateContact from "./Components/CreateContact";
import CreateAddress from "./Components/CreateAddress";

function App(){
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table/>} />
          <Route path="/add" element={<Create/>} />
          <Route path="/add/contact/:id" element={<CreateContact/>} />
          <Route path="/add/address/:id" element={<CreateAddress/>} />
          <Route path="/view/:id" element={<Read/>} />
          <Route path="/edit/customer/:id" element={<EditCustomer/>} />
          <Route path="/edit/contact/:id" element={<EditContact/>} />
          <Route path="/edit/address/:id" element={<EditAddress/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
