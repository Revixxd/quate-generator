import React from "react";
import {GlobalStyles} from "./globalStyles";

import Header from "./components/Header/Header.js"
import MainContent from "./components/MainContent/MainContent.js"
import Footer from "./components/Footer/Footer.js"

function App() {

  const [curretQuoteInfos, setCurrentQuoteInfos] = React.useState({
    id: "1",
    quoteText: "test",
    quoteAuthor: "test",
    quoteGenre: "test",
  })
  const [allQuotes, setCurrentQuotes] = React.useState([])

  React.useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
        .then(res => res.json())
        .then(data => setCurrentQuotes(data.data))
  }, [])

  function loadNewQuote(){
    const randomNumber = Math.floor(Math.random() * allQuotes.length)
    const quoteId = allQuotes[randomNumber]._id
    const quoteText = allQuotes[randomNumber].quoteText
    const quoteAuthor = allQuotes[randomNumber].quoteAuthor

    setCurrentQuoteInfos({
      id: quoteId,
      quoteText: quoteText,
      quoteAuthor: quoteAuthor,
    })


  }
  return (
    <>
      <GlobalStyles/>
      <div className="app">
        <Header random={loadNewQuote}/>
        <MainContent data = {curretQuoteInfos}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
