import Header from "./components/header/Header";
import { GlobalState } from "./global/GlobalState";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import HomePage from "./pages/HomePage/HomePage";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import Router from "./router/Router"

function App() {
  return (
    <div>
      <GlobalState>
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
