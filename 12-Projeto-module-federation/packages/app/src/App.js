import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

import './app.css';

// CSS
const App = () => {

  //MF - lazy load
  /*   const HomePage = React.lazy(() => import("HomeApp/HomePage"));
    const ContactPage = React.lazy(() => import("ContactApp/ContactPage")); */

  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Routes>
          <Route exact path="/">
            <Suspense fallback={<div>Loading...</div>}>
              {/*  <HomePage /> */}
            </Suspense>
          </Route>
          <Route exact path="/contact">
            <Suspense fallback={<div>Loading...</div>}>
              {/*  <ContactPage /> */}
            </Suspense>
          </Route>
        </Routes>
      </div>
    </Router>
  )

}

export default App;