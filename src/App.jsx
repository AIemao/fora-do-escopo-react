import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Form from "./pages/Form";
// import FormComponent from "./page";

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Form />
      {/* <FormComponent /> */}
      <Footer />
    </div>
  );
}

export default App;
