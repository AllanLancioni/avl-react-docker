import { Link } from "react-router-dom";

import './Header.css';

function Header() {
  return (
    <nav class="header">

      <h2 class="brand">TradeMaster</h2>

      <div class="flex-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ajuda">Ajuda</Link></li>
        </ul>

        <div class="user-info">
          <span>email@trademaster.com.br</span>
          <Link to="/login">Sair</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;