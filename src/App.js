import Leaderboard from "./components/Leaderboard.jsx";
import './App.css';
import NavigationBar from "./components/NavigationBar.jsx";
import ProfileNavBar from "./components/ProfileNavBar.jsx";

function App() {
  return (
    <div className="App">
      <div className="sticky-top">
        <ProfileNavBar />
        <NavigationBar />
      </div>
      <div className="">
        <Leaderboard />
      </div>
    </div>
  );
}

export default App;