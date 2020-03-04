import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IngredientsService {
  
  private ingredients: Ingredient[];
  ingredientsChanged = new Subject<Ingredient[]>();
  
  constructor(private httpClient: HttpClient) {}
  
  addIngredient(ingredient): void {
    this.ingredients.push(ingredient);
    this.httpClient.put(
      'https://ordina-fontys-workshop.firebaseio.com/ingredients.json',
      this.ingredients
    ).subscribe((response: Ingredient[]) => {
      this.ingredientsChanged.next(response);
    });
  }
  
  getIngredient(index: number): Ingredient {
    return this.ingredients
      ? this.ingredients.slice(index, index + 1)[0]
      : null;
  }
  
  getIngredients(): Ingredient[] {
    if (this.ingredients) {
      return this.ingredients.slice();
    } else {
      this.httpClient.get<Ingredient[]>('https://ordina-fontys-workshop.firebaseio.com/ingredients.json')
        .subscribe((response) => {
          this.ingredients = response.filter((ingredient) => ingredient !== null);
          this.ingredientsChanged.next(this.ingredients.slice());
        });
    }
  }
  
  updateIngredients(index, ingredient?): void {
    if (ingredient) {
      this.ingredients[index] = ingredient;
    } else {
      this.ingredients.splice(index, 1);
    }
    this.httpClient.put<Ingredient[]>('https://ordina-fontys-workshop.firebaseio.com/ingredients.json', this.ingredients)
      .subscribe((response) => {
        this.ingredientsChanged.next(response);
      });
  }
}
