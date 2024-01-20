
/**
 * 
 * @param {Array<string>} deck 
 * @returns {Array<string>} retorna la carta seleccionada y eliminandola del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    let carta = deck.pop();
    return carta
}