import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit(): void {
    this.ingredients = this.ingredientsService.getIngredients();
    this.ingredientsService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }
  
  // Deprecated method after changes from chapter 4.5
  /*onIngredientAdded(data): void {
    this.ingredients.push(new Ingredient(data.name, data.amount));
  }*/
}
