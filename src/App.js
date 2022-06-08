import GlobalStyle from "./globalStyles";

import Header from "./components/Header/Header.js"

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Header />
        {/* <MainContent />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
