const initialState = {
    creditCards: [{
        cardNumber: 'XXXX XXXX XXXX XXXX',
        cardHolder: '',
        validThru: '',
        ccv: '',
        vendor: ''
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.payload) {
        case 'ADD_NEW_CARD':
            return {
                ...state,
                creditCards: [...state.creditCards, action.payload]
            }
        case 'REMOVE_ONE_CARD':
            return {

            }
    
        default:
            return state
    }
}

export default reducer;

