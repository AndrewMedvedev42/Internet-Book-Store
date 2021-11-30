import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import AboutUsPage from "./pages/about-us-page/about-us-page";
import DeliveryPage from "./pages/delivery-page/delivery-page";
import DoscountPage from "./pages/discount-page/discount-page";
import ContactsPage from "./pages/contact-us-page/contacts-page";
import Footer from "./components/footer";
//Styles
import "./styles/css/index.css";
import "./styles/css/footer.css"


function App() {

  return (
    <Router>
    <section className="router">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<AboutUsPage/>}/>
      </Routes>
      <Routes>
        <Route path="/discount" element={<DoscountPage/>}/>
      </Routes>
      <Routes>
        <Route path="/delivery" element={<DeliveryPage/>}/>
      </Routes>
      <Routes>
        <Route path="/contacts" element={<ContactsPage/>}/>
      </Routes>
      <Routes>
        <Route path="/basket" element={<ContactsPage/>}/>
      </Routes>
      <Routes>
        <Route path="/payment" element={<ContactsPage/>}/>
      </Routes>
    </section>
    <Footer/>
  </Router>
  );
}

export default App;
