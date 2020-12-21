export default (state = [], action) => {
  let index
  let currentQuote
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]

    case 'REMOVE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      return  [...state.slice(0, index), ...state.slice(index + 1)]

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      currentQuote = state.find(quote => quote.id === action.quoteId)
      return [
        ...state.slice(0, index), 
          Object.assign({}, currentQuote, { votes: currentQuote.votes += 1}), 
          ...state.slice(index + 1)
        ]

        case 'DOWNVOTE_QUOTE':
          index = state.findIndex(quote => quote.id === action.quoteId)
          currentQuote = state.find(quote => quote.id === action.quoteId)
          if (currentQuote.votes > 0) {
            return [
              ...state.slice(0, index),
              Object.assign({}, currentQuote, { votes: currentQuote.votes -= 1}), 
              ...state.slice(index + 1)
            ]
      }
  }
  return state;
}