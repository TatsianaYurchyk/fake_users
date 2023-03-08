import './App.css';
import { faker } from '@faker-js/faker';
import UserTable from './Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container>
     <UserTable/>
     </Container>
  );
}

export default App;
