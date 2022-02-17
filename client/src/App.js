import "./tailwind.css";
import { useState } from "react";
import Customer from "./components/Customer";
import Customers from "./components/Cutomers";

function App() {
  const [customers, setCustomers] = useState([]);

  return (
    <>
      <div className="flex items-center justify-center">
        <Customer setCustomers={setCustomers} />
      </div>
      <Customers customers={customers} setCustomers={setCustomers} />
    </>
  );
}

export default App;
