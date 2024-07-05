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

export const getTileColor = (rank: number, file: number) => {
  return (rank + file) % 2 === 0 ? "bg-white" : "bg-slate-100";
}