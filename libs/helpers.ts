/**
 * Convert Number to Alphabic letter
 * ETC: 0->a, 1->b
 * @param index
 * @returns string
 */
export const getChar = (index: number): string => String.fromCharCode(97 + index);

/**
 * Convert Alphabic letter to number
 * ETC a->0, b->1
 * @param char
 * @returns number
 */
export const getInt = (char: string): number => char.charCodeAt(0) - 97;

/**
 * Get Color For Each Tile of the board using position
 * @param rank 
 * @param file 
 * @returns boolean
 */
export const getTileColor = (rank: number, file: number): boolean => {
  return (rank + file) % 2 === 0;
}


export const convertFen = (fen: string) => {
  return fen.split("/").map((rank: string) => {
    return rank.split("").map(char => {
      if(isCharNumber(char)) {
        let str = "";
        for(let i=0; i < char.charCodeAt(0) - 48; i++) {
          str += "0";
        }
        return str
      }else {
        return char
      }
    }).join("");
  });
}

/**
 * Check if the char is a number or not a number
 * @param c 
 * @returns boolean
 */
export const isCharNumber = (c: string): boolean => {
  return typeof c === 'string' && c.length === 1 && c >= '0' && c <= '9';
}