import { ICollection } from "@Interface/common/ICollection";

/**
 * *IList provides clients with CRUD methods.*
 * *Element on the IList has a unique Index Signature by which clients can query the element.*
 * *Generally, Array, LinkedList can implement IList Interface* 
 */
export interface IList<T> extends ICollection<T> {

    /**
     * Insert a new element on the List
     * @param value: value of a single element
     * @param index: index of the inserted element
     */
    insertByIndex: (value: T, index: number) => this;

    /**
     * Remove a element from the List
     * @param index: index of the element that has to be removed from the List 
     */
    removeByIndex: (index: number) => T;

    /**
     * *Update value on the List by its index*
     * @param value: the value that needs to be updated on the Array
     * @param index: the position where the old value is located
     */
    updateByIndex: (value: T, index: number) => this;

    /**
     * Get a element from the List by its index
     * @param index: index of the element that has to be searched
     */
    getByIndex: (index: number) => T;

    /**
     * Look up the index of the element, if it's not there, return -1
     * @param value: value of the element that has to be searched on the List 
     */
    indexOf: (value: T) => number;

}