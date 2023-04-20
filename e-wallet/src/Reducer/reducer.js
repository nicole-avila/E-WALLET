const initialState = {
    creditCards: [],
    activeCard: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_CARD':
            return {
                ...state,
                creditCards: [...state.creditCards, action.payload]
            }
        case 'ACTIVE_CARD':
            return {
                ...state,
                activeCard: action.payload
            }
        case 'REMOVE_ONE_CARD':
 
           
            return {
  
            }
        default:
            return state
    }
}

export default reducer;

// const cardItem = state.cardItems.find((card) => card.id === payload.id);
// cardItem.activeCard = cardItem.activeCard -1; 