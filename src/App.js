import {GlobalStyles} from "./globalStyles";

import Header from "./components/Header/Header.js"
import MainContent from "./components/MainContent/MainContent.js"
import Footer from "./components/Footer/Footer.js"

function App() {
  function random(){
    console.log("test")
  }
  return (
    <>
      <GlobalStyles/>
      <div className="app">
        <Header random={random}/>
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default App;
