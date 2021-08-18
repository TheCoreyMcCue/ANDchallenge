import "./styles.css";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import AndiForm from "./Components/AndiForm";

export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <AndiForm />
        <Cards />
      </div>
    </>
  );
}
