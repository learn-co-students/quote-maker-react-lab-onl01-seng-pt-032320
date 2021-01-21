import uuid from 'uuid';
const id = uuid();
const quotes = [{content: "wise man", author: "Nabil", id: 1, votes: 0}]

export default (state = [], action) => {
  let idx;
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote ]
    case 'REMOVE_QUOTE':
     return state.filter(q => q.id != action.quoteId)
     case 'UPVOTE_QUOTE':
       return state.map(quote => {
         if(quote.id === action.quoteId){
           return {...quote, votes: quote.votes + 1}
         }
         else {
           return quote
         }
       })
      case 'DOWNVOTE_QUOTE':
        return state.map(quote => {
          if(quote.id === action.quoteId && quote.votes > 0){
            return {...quote, votes: quote.votes - 1}
          }
          else {
            return quote
          }
        })
    default:
      return state;

  }
 
}
