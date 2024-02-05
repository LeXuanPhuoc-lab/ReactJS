import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Content";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const MyApp = () => {
  return (
    <div className="d-flex flex-column justify-content-between vh-100">
      <div className="">
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  )
};

export default MyApp;
