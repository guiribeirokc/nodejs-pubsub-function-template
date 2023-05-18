
import {subject} from "../index"

interface Ingredient {
    name: String, quantity: number
}

describe('test', () => {
    const ingredient: Ingredient = {quantity: 1, name: "name"};
    test('return recipe 1 2 3 when tomato', async () => {
        expect(subject(ingredient)).toEqual([1,2,3]);
    });
});