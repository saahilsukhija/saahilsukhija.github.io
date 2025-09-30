import "./style/App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./Home.jsx";
function App() {
  return (
    <>
      {/*<NavBar />*/}
      <main className="main-content">
        <Home />
      </main>
    </>
  );
}

export default App;
