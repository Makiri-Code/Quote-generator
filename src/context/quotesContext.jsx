import { createContext, useEffect, useState } from "react";

export const QuotesContext = createContext({
    quotes: [],
    quote: {},
    setQuote: () => {}
});

export const QuotesProvider = ({children}) => {
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState({});

    useEffect(() => {
        const getQuotes = async () => {
            const response = await fetch('https://type.fit/api/quotes');
            const apiQuotes = await response.json();
            const filterQuote = apiQuotes.map(quote => {
                return (
                    {
                        ...quote,
                        author: quote.author.replace(', type.fit', ''),
                    }
                )
            })
            setQuotes(filterQuote);
            setQuote(filterQuote[Math.floor(Math.random() * apiQuotes.length)]);
        };
        getQuotes();
    }, []);

    const value = {
        quotes,
        quote,
        setQuote
    }
    return (
        <QuotesContext.Provider value={value}>{children}</QuotesContext.Provider>
    )
}