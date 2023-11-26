import Header from "./components/Header";
import Form from "./pages/Form";
import styles from './App.module.css'
// import FormComponent from "./page";

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Form />
      {/* <FormComponent /> */}
    </div>
  );
}

export default App;
