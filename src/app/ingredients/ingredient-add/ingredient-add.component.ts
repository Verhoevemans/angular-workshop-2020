import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientsService } from '../ingredients.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ingredient-add',
  templateUrl: './ingredient-add.component.html',
  styleUrls: ['./ingredient-add.component.scss']
})
export class IngredientAddComponent implements OnInit {
  // Deprecated eventEmitter after changes from chapter 4.5
  // @Output() ingredientAdded = new EventEmitter<{ name: string, amount: number }>();
  
  ingredientName: string;
  ingredientAmount: number;
  ingredientIndex: number;

  constructor(private ingredientsService: IngredientsService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.ingredientIndex = +params['id'];
        const ingredient = this.ingredientsService.getIngredient(this.ingredientIndex);
        if (ingredient) {
          this.ingredientName = ingredient.name;
          this.ingredientAmount = ingredient.amount;
        } else {
          this.router.navigate(['ingredients']);
        }
      } else {
        this.ingredientIndex = null;
      }
    })
  }
  
  addIngredient(): void {
    // Deprecated eventEmitter after changes from chapter 4.5
    // this.ingredientAdded.emit({ name: this.ingredientName, amount: this.ingredientAmount });
    
    const newIngredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.ingredientsService.addIngredient(newIngredient);
    this.ingredientName = null;
    this.ingredientAmount = null;
  }
  
  deleteIngredient() {
    this.ingredientsService.updateIngredients(this.ingredientIndex, null);
    this.router.navigate(['ingredients']);
  }
  
  updateIngredient() {
    const newIngredient = new Ingredient(this.ingredientName, this.ingredientAmount);
    this.ingredientsService.updateIngredients(this.ingredientIndex, newIngredient);
    this.router.navigate(['ingredients']);
  }
  
  isDisabled(): boolean {
    return !this.ingredientName || !this.ingredientAmount;
  }
}
