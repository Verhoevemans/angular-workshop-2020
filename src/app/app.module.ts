import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientListComponent } from './ingredients/ingredient-list/ingredient-list.component';
import { IngredientAddComponent } from './ingredients/ingredient-add/ingredient-add.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { IngredientsService } from './ingredients/ingredients.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    IngredientsComponent,
    IngredientListComponent,
    IngredientAddComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    IngredientsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
