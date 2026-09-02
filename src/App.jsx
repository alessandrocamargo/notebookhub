import Layout from './components/Layout';
import NotebookGrid from './components/NotebookGrid';
import { notebooks } from './data/notebooks';

function App() {
  return (
    <Layout>
      <NotebookGrid notebooks={notebooks} />
    </Layout>
  );
}

export default App;