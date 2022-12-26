import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";
import FooterPage from "./components/Footer/FooterPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
        <GalleryPage />
        <FooterPage />
      </header>
    </div>
  );
}

export default App;
