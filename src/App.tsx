import { Search } from "@mui/icons-material";
import "./App.scss";
import Status from "./components/Status/Status";
import Topbar from "./components/Topbar/Topbar";
import SearchBar from "./components/SearchBar/SearchBar";
import InfoCustomer from "./components/InfoCustomer/InfoCustomer";

function App() {
  return <>
  <div className="app">

      <Topbar />
      <SearchBar/>
      <Status/>
      <InfoCustomer/>
  </div>
  </>;
}

export default App;
