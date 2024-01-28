import { CustomerProvider } from "./hooks/CustomerHooks";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="container_geral">
      <CustomerProvider>
        <Home />
      </CustomerProvider>
    </div>
  );
}

export default App;
