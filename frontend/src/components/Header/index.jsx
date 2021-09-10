import { Link } from "react-router-dom";

import './index.css';

function Header() {
  return (
    <nav className="header">

      <h2 className="brand">TradeMaster</h2>

      <div className="flex-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ajuda">Ajuda</Link></li>
        </ul>

        <div className="user-info">
          <span>email@trademaster.com.br</span>
          <Link to="/login">Sair</Link>
        </div>
      </div>
    </nav>
  );
}
export default Header;