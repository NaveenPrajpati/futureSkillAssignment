import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <Dashboard />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
