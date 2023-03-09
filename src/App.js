import './App.css';
import UserTable from './Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Context } from "./Context.js";
import { useState} from "react";


function App() {
  const [value, setValue] = useState("0");
  return (
    <Context.Provider value={[value, setValue]}>
    <Container>
     <UserTable/>
     </Container>
     </Context.Provider>
  );
}

export default App;
