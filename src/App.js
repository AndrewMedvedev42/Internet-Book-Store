import NavigationBar from "./components/navigation-bar";
import AboutUsPage from "./pages/about-us-page";
import Footer from "./components/footer";
import DoscountPage from "./pages/discount-page";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  return (
    <Router>
    <NavigationBar/>
    <section className="router">
      <Routes>
        <Route path="/" element={<AboutUsPage/>}/>
      </Routes>
      <Routes>
        <Route path="/discount" element={<DoscountPage/>}/>
      </Routes>
      <Footer/>
    </section>
  </Router>
  );
}

export default App;
