import AboutUsPage from "./pages/about-us-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <section className="router">
      <nav className="navSection">
        <img src="#" alt="logo"/>
        <ul>
          <li>
            <Link className="Link" to="/">About Us</Link>
          </li>
          <li>
            <Link className="Link" to="/exercises">Delivery</Link>
          </li>
          <li>
            <Link className="Link" to="/exercises">Discount</Link>
          </li>
          <li>
            <Link className="Link" to="/exercises">Collection</Link>
          </li>
          <li>
            <Link className="Link" to="/exercises">Contact Us</Link>
          </li>

        </ul>

      </nav>

      <Routes>
        <Route path="/" element={<AboutUsPage/>}/>
      </Routes>
    </section>
  </Router>
  );
}

export default App;
