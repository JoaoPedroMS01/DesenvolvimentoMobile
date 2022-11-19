import { createContext } from "react";

const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
    return (
        <MessageContext.Provider value={{mensagem: 'mensagem'}}>
            {children}
        </MessageContext.Provider>
    )
}

export default MessageContext