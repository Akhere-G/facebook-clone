import styles from "./styles/App.module.css";
import Login from "./components/Login.js";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar.js";
import Feed from "./components/Feed.js";
import Widget from "./components/Widget.js";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className={styles.app}>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className={styles.appBody}>
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
