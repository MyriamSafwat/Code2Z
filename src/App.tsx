import Intro from "./components/Intro";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import "./index.css";

function App() {
  return (
    <div>
      <Intro />
      <CustomCursor />
      <Testimonials/>

      <Footer />
    </div>
  );
}

export default App;
