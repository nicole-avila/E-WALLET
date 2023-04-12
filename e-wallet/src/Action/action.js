function addNewCard(cards) {
    return {
        type: 'ADD_NEW_CARD',
        payload: cards
    }
}
function removeOneCard(card) {
    return {
        type: 'REMOVE_ONE_CARD',
        payload: card
    }
}

export { addNewCard, removeOneCard }