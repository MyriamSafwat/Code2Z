import Intro from "./components/Intro";
import CustomCursor from "./components/CustomCursor";
import "./index.css";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [showHome, setShowHome] = useState(false);
  return (
    <div>
      <Intro onFinish={() => setShowHome(true)} />
      {showHome && <Home />}
      <CustomCursor />
    </div>
  );
}

export default App;
