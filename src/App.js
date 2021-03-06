import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "./components/navigation-bar";
import HomePage from "./pages/home-page/home-page";
import DeliveryPage from "./pages/delivery-page/delivery-page";
import ContactsPage from "./pages/contact-us-page/contacts-page";
import BookPage from "./pages/book-page/book-page";
import Basket from "./pages/basket-page/basket-page";
import PaymentPage from "./pages/payment-page/payment-page";
import Footer from "./components/footer";
//Styles
import 'leaflet/dist/leaflet.css';
import "./styles/css/index.css";
import "./styles/css/elements.css";
import "./styles/css/footer.css"


function App() {

  return (
    <Router>
    <section className="router">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Routes>
        <Route path="/delivery" element={<DeliveryPage/>}/>
      </Routes>
      <Routes>
        <Route path="/contacts" element={<ContactsPage/>}/>
      </Routes>
      <Routes>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
      <Routes>
        <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
      <Routes>
        <Route path="/book/:id" element={<BookPage/>}/>
      </Routes>
    </section>
    <Footer/>
  </Router>
  );
}

export default App;
