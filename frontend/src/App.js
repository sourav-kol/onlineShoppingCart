import { NavLinks } from "./navigationBar/navLinks";
import { Logo } from "./navigationBar/logo";
import { Cart } from "./navigationBar/cart";
import { Links } from "./navigationBar/links"
import { RouterConfig } from "./router/router";
import { NavLayout } from "./layouts/nav-layout"

import { BrowserRouter as Router } from 'react-router-dom'

import "./styles/navigation.css"
import "./styles/product.css"
import "./styles/about.css"

function App() {
  return (
    <div className="App">
      <Router>
        <NavLinks>
          <NavLayout>
            <Logo />
            <Links />
            <Cart />
          </NavLayout>
        </NavLinks>
        <RouterConfig />
      </Router>
    </div>
  );
}

export default App;
