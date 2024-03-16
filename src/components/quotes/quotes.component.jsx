import { useContext } from "react"
import { QuotesContext } from "../../context/quotesContext";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa6";
import Footer from "../footer/footer.component";
import "./quotes.styles.css"

const Quotes = () => {
    const {quotes, quote, setQuote} = useContext(QuotesContext);
    const {text, author} = quote
    
    const setQuoteHandler = () => {
        const newQuote = quotes[Math.floor(Math.random() * quotes.length)]
        setQuote(newQuote);
      }
    const tweetQuote = () => {
            const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`
            window.open(twitterUrl, '_blank');
        }

    return (
       <>
            <div className="quote-container">
                <div className="quote-text">
                    <FaQuoteLeft className="fa-quote-left"/>
                    <span>{text}</span>
                </div>
                <div className="quote-author">
                    <span>{author}</span>
                </div>
                <div className="button-container">
                    <button className="twitter-btn" title="Tweet this" onClick={tweetQuote}>
                        <FaSquareXTwitter className="fa-twitter"/>
                    </button>
                    <button onClick={setQuoteHandler}>New Quote</button>
                </div>  
            </div> 
            <Footer/>
       </>
    )
};


export default Quotes; 