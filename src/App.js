import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NoPage from './pages/NoPages';

function App() {
  return (
    <BrowserRouter basename="/portofolio-v2">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
