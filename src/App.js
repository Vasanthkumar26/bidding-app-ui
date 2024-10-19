import "./App.css";
import ContentComponent from "./components/ContentComponent/ContentComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import LogInComponent from "./components/LogInComponent/LogInComponent";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderComponent />} />
      <Route path="/sign-up" element={<SignUpComponent />} />
      <Route path="/log-in" element={<LogInComponent />} />
    </Routes>
  );
}

export default App;
