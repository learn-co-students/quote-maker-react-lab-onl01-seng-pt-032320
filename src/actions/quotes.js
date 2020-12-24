// TODO: Create action object creators functions as defined in tests
//action is a js object that does something like add, delete, etc

//export default - can only do once in a file



export const addQuote = quote => {
    return {
        type: "ADD_QUOTE", 
        quote: quote //match the quote object, this is the payload
        //sends to reducer
    }
}

export const removeQuote = quoteId => {
    return {
        type: "REMOVE_QUOTE", 
        quoteId: quoteId //match the quote object, this is the payload
    }
}

export const upvoteQuote = quoteId => {
    return {
        type: "UPVOTE_QUOTE", 
        quoteId: quoteId 
    }
}

//if key and value are the same, then we can do one
export const downvoteQuote = quoteId => {
    return {
        type: "DOWNVOTE_QUOTE", 
        quoteId 
    }
}