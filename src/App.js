import "./App.css";
import Login from "./Login.js";
import Header from "./Header.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widget from "./Widget.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
