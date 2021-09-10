import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

import './index.css';
import TreeAVL from './TreeAvl';
import TreeControl from './TreeControl';

function InitialPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <PageTitle>Gerar Árvore AVL</PageTitle>
        <div className="grid">
          <TreeControl />
          <TreeAVL />
        </div>
      </div>
    </div>
  );
}

export default InitialPage;