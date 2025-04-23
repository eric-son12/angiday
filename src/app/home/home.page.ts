import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonIcon, IonButton, IonLabel } from '@ionic/angular/standalone';

import { HeroComponent } from '../components/hero/hero.component';
import { FoodCategoriesComponent } from '../components/food-categories/food-categories.component';
import { SuggestRestaurantComponent } from '../components/suggest-restaurant/suggest-restaurant.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonLabel, IonContent, IonIcon, IonButton, HeroComponent, FoodCategoriesComponent, SuggestRestaurantComponent],
})
export class HomePage {
  constructor() {}
}
