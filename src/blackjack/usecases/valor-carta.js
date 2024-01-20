/**
 * 
 * @param {String} carta 
 * @returns {int} retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    if (!carta || carta.length === 0 ) {
        throw 'No hay carta';
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}