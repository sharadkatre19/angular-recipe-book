import { Ingredients } from './ingredients';

export class Recipe {
    constructor(public name, public description, public imagePath, public ingredients: [Ingredients]) {
    }
}
