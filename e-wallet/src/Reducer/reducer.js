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
        default:
            return state
    }
}

export default reducer;
