import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Condition } from "./components/Condition/Condition";

function App() {
  return (
    <div className={styles.App}>
       <div className="app-container">
        <Navbar />
        <Hero />
       </div>
       <Condition/>
      
    </div>
  );
}

export default App;
