import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
        <GalleryPage />
      </header>
    </div>
  );
}

export default App;
