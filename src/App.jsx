import Layout from './components/Layout';
import NotebookCard from './components/NotebookCard';
import { notebooks } from './data/notebooks';

function App() {
  return (
    <Layout>
      <NotebookCard notebook={notebooks[0]} />
    </Layout>
  );
}

export default App;