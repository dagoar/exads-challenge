/**
 * clean up special characters from a string 
 *
 * @param {string} s - A string.
 * @returns {string}
 */
const NormalizeString = (s: string) : string => {
    // cleanup
    const normalized = s.replace(/[^a-zA-Z0-9]/g, '')
    // lowercase
    .toLowerCase()
    // max length
    .substring(0, 64);

    // return normalized string
    return normalized;
}

const NearestSquare = n => Math.pow(Math.round(Math.sqrt(n)), 2);

const DoEncoding = (message: string): string => {
    // guess the size of the rectangle
    const perfectLength = NearestSquare(message.length)
    const columns = Math.sqrt(perfectLength);

    message = message.padEnd(perfectLength, ' ');
    // cut rows with 'columns' length
    const chunks = [].concat(...message.split('').map(function(_x,i){ return i%columns ? [] : message.slice(i,i+columns) }))
    
    // explode rows
    for (let index = 0; index < chunks.length; index++) {
        chunks[index] = chunks[index].split('');        
    }
    // transpose
    const transposed = chunks[0].map((_, colIndex) => chunks.map(row => row[colIndex]));

    // join columns
    for (let index = 0; index < transposed.length; index++) {
        transposed[index] = transposed[index].join('');
    }

    return transposed.join(' ')
}


export { NormalizeString, NearestSquare, DoEncoding }