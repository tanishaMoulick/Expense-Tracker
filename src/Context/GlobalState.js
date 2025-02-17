import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
           { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 },
           { id: 4, text: 'Camera', amount: 150 }
         ]
        
}

export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children})=> {
    const [state,dispatch] = useReducer(AppReducer,initialState);
    
    //Axtions

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTIONS',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload:transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

}

