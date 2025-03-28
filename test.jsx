import { createContext, useEffect } from 'react';
import run from '../config/gemini'; //Importing the Gemini API function

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const onSent = async (prompt) => {
        const response = await run(prompt);
        console.log("Gemini Response:", response); // Log the response to console
    };

    useEffect(() => {
        onSent("What is api?");
    }, []);

    const contextValue = { onSent };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
