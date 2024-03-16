import { useContext } from "react";
import { QuotesContext } from "./context/quotesContext";
import Quotes from "./components/quotes/quotes.component";
import Loader from "./components/loader-component/loader.component";
import './App.css';

function App() {

  const {quotes} = useContext(QuotesContext);
  console.log(quotes)


  return (
    <>
      {
        quotes.length ? <Quotes/> : <Loader/>
      }
    </>
  );
}

export default App;
