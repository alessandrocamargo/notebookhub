import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import NotebooksPage from './pages/NotebooksPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import NotebookDetailsPage from './pages/NotebookDetailsPage';
import CategoryPage from './pages/CategoryPage';
import { ComparisonProvider } from './context/ComparisonContext';

function App() {

  return (
    <ComparisonProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/notebooks' element={<NotebooksPage />} />
          <Route path='/notebooks/:id' element={<NotebookDetailsPage />} />
          <Route path='/categoria/:slug' element={<CategoryPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ComparisonProvider>

  );
}

export default App;