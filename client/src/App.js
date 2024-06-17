import './App.css';
import Signin from './components/Signin/signin.js'
import Signup from './components/Signup/signup.js';
import Dashboard from './components/Dashboard/dashboard.js';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home/home.js';

function App() {
  return (
    <div className='App'>
      {/* Setting up the Router component from react-router-dom */}
      <Router>
        {/* Defining different Routes using Routes and Route components */}
        <Routes>
          {/* Route for the Dashboard component */}
          <Route exact path='/' element={<Home/>} />
          {/* Route for the Login component */}
          <Route exact path="/signin" element={<Signin/>} />
          {/* Route for the Signup component */}
          <Route exact path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;