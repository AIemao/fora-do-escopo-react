import Header from "./components/Header";
import Form from "./pages/Form";
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
