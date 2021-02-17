import Employees from "./components/employees/Employees";
import Header from "./components/header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBar/>

      <Employees/>

    </div>
  );
}

export default App;
