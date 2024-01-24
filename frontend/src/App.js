import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { CustomerProvider } from './hooks/CustomerHooks';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
        <div className='container_geral'>
          <CustomerProvider>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </CustomerProvider>
        </div>
    </Router>
  );
}

export default App;
