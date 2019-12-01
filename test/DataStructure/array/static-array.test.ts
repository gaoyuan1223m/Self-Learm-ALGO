import { StaticArray } from "@DataStructure/array/static-array";
import { IArray } from "@Interface/specific/IArray";

describe(`Test for Static Array`, () => {

    const capacity: number = 7;
    const staticArray: IArray<number> = new StaticArray<number>(capacity)

    beforeAll(() => {
        staticArray
            .append(7)
            .insertByIndex(6, 3)
            .insertByIndex(2, 5)
            .insertByIndex(16, 3)
            .updateByIndex(26, 4);
    });

    it(`#Get size/length of the array`, () => {
        expect(staticArray.size).toBe(4);
        expect(staticArray.length).toBe(7);
    });

    it(`#Get value by positive index`, () => {
        expect(staticArray[3]).toBe(16);
        expect(staticArray[4]).toBe(26);
        expect(staticArray[5]).toBe(2);
    });

    it(`#Get value by negative index`, () => {
        expect(staticArray[-4]).toBe(16);
        expect(staticArray[-3]).toBe(26);
        expect(staticArray[-2]).toBe(2);
    });

    it(`#remove value by positive index`, () => {
        staticArray.removeByIndex(2);
        expect(staticArray[2]).toBe(16);
    });

    it(`#remove value by negative index`, () => {
        expect(staticArray[-5]).toBe(16);
    })

    it(`#insert value by positive index`, () => {
        staticArray.insertByIndex(44, 4);
        expect(staticArray[4]).toBe(44);
        expect(staticArray[5]).toBe(2);
    })

    it(`#insert value by negative index`, () => {
        expect(staticArray[-3]).toBe(44);
        expect(staticArray[-2]).toBe(2);
    })

    it(`#append value to the empty position`, () => {
        staticArray.append(100);
        expect(staticArray[6]).toBe(100);
        expect(staticArray[-1]).toBe(100);
        expect(staticArray.size).toBe(6);
    })

    it(`#insert value to the left`, () => {
        staticArray.insertByIndex(32, 5);
        expect(staticArray[0]).toBe(7);
        expect(staticArray[6]).toBe(100);
        expect(staticArray[-7]).toBe(7);
        expect(staticArray[-1]).toBe(100);
        expect(staticArray[3]).toBe(44);
        expect(staticArray[-5]).toBe(26);
    })

    it(`#get index of value `, () => {
        expect(staticArray.indexOf(11)).toBe(-1);
        expect(staticArray.indexOf(32)).toBe(5);
    })

    it(`#contains value?`, () => {
        expect(staticArray.contains(22)).toBeFalsy()
        expect(staticArray.contains(100)).toBeTruthy();
    })

    it(`#remove value by searching itself`, () => {
        staticArray
            .remove(123)
            .remove(44);

        expect(staticArray[3]).toBe(2);
        expect(staticArray[5]).toBe(100);
        expect(staticArray[6]).toBeUndefined();

        expect(staticArray[-5]).toBe(26);
        expect(staticArray[-2]).toBe(100);
        expect(staticArray[-1]).toBeUndefined();
    })

    it(`#reverse current array`, () => {
        staticArray.reverse();
        expect(staticArray[0]).toBe(undefined);
        expect(staticArray[6]).toBe(7);
        expect(staticArray[-2]).toBe(16);
        expect(staticArray[-4]).toBe(2);
    })

    it(`print the array`, () => {
        staticArray.print();
    })
    
    it(`clear the array`, () => {
        staticArray.clear();
        expect(staticArray.isEmpty()).toBeTruthy();
    })

});
