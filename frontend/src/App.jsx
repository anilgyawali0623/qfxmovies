import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
 import AdminPage from './pages/AdminPage';
const Offers = () => <div className="p-4">Offers Page</div>;
const Schedules = () => <div className="p-4">Schedules Page</div>;
import Dashboard from './pages/Dashboard';
import AddDetails from './pages/AddDetails';
import Messages from './pages/Messages';


function App() {
  return (
    <Layout>

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />

        
        <Route path='/admin' element={<AdminPage/>}>
        <Route path="schedules" element={<Schedules />} />
           <Route path='dashboard' index element={<Dashboard />} />
      <Route path="add-details" element={<AddDetails />} />
      <Route path="messages" element={<Messages />} />
        </Route>
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;