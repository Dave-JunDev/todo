import { describe, it, expect } from "vitest";
import {useLocalStorage} from './../../src/hooks/useLocalStorage'
describe('useLocalStorage', () => {

    it('should be a function', () => {
        expect(useLocalStorage).toBeTypeOf('function')
    })

    it('should return an array with the parsed item and a saveItem function when given a valid itemName and initialValue', () => {
        const itemName = 'testItem';
        const initialValue = { name: 'John', age: 25 };
        const [item, saveItem] = useLocalStorage(itemName, initialValue);

        expect(Array.isArray(item)).toBe(true);
        expect(item).toEqual(initialValue);
        expect(typeof saveItem).toBe('function');
    });
})