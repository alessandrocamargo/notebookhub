import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import NotebooksPage from './pages/NotebooksPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NotebookDetailsPage from './pages/NotebookDetailsPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/notebooks' element={<NotebooksPage />} />
        <Route path='/notebooks/:id' element={<NotebookDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;