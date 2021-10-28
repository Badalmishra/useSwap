export interface item {
    primaryKey?: string;
}
export declare type itemArray = Array<item>;
export interface returnValue {
    selectedItems: Array<item>;
    unSeletedItems: Array<item>;
    swap: (primaryKey: string) => void;
}
/**
 * Give statefull lists for selected and unselected items and a swap function
 * @param allItems The complete list, including both selected and unselected items
 * @param preSelected start the hook with pre filled selected items list
 * @returns
 */
declare const useSwap: (allItems: itemArray, preSelected?: itemArray | undefined, primaryKey?: string | undefined) => returnValue;
export default useSwap;
