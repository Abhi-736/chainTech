import Login from './Login';
import Header from './Header'
import Registration from './Registration'
import './App.css';
import {Route,Routes,  BrowserRouter as Router} from 'react-router-dom'
import User from './User.jsx';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' element={<Login/>}/>
     <Route path='/Registration' element={<Registration/>}/>
     <Route path='/User' element={<User/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
